import { Pagination } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Slider from "react-slick";
import callApi from "../../Api/Axios";
import BreadCrumb from "../../components/BreadCrumb";
import NewsWrapper from "./_component/Styled/Styled";
import { v4 as uuid } from "uuid";
import { useAppDispatch, useAppSelector } from "../../ReduxStore/hooks";
import newsEventsSelector from "../../ReduxStore/newSlice/slice";
import Catalog from "./_component/Catalog";
import EventsList from "./_component/EventList";

export async function getServerSideProps() {
  const res = await callApi
    .get("/v2/page/news&event?locale=vi")
    .then((res) => res.data)
    .catch((err) => console.error(err));

  const newsBanner = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "newsBanner"
  );

  const hotNews = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "hotNews"
  );
  const Events = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "Events"
  );
  console.log(Events);
  return {
    props: {
      newsBanner,
      hotNews,
      Events,
    },
  };
}

const NewsEvent = ({ newsBanner, hotNews, Events }) => {
  const router = useRouter();
  const newsArr = useAppSelector(newsEventsSelector).newsArr;
  const eventsArr = useAppSelector(newsEventsSelector).eventsArr;
  const categoryArr = useAppSelector(newsEventsSelector).categoryArr;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (newsArr.length === 0) {
      dispatch({ type: "GET_NEWS" });
    }
    if (eventsArr.length === 0) {
      dispatch({ type: "GET_EVENTS", payload: 1 });
    }
    if (categoryArr.length === 0) {
      dispatch({ type: "GET_CATEGORY" });
    }
  }, [newsArr, eventsArr]);
  return (
    <NewsWrapper>
      <div id='News-Event'>
        <div className='Banner d-flex'>
          <img src={newsBanner.image.path} alt=''></img>
          <div className='--Item'>
            <h1>{newsBanner.title}</h1>
            <BreadCrumb />
          </div>
        </div>
        <div className='News'>
          <div className='container-fluid'>
            <div className='--hotNews'>
              <h3>{hotNews.title}</h3>
              <Slider
                {...{
                  dots: false,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                  adaptiveHeight: true,
                  nextArrow: (
                    <div>
                      <i className='fa-solid nextarrow arrow arrow_hover  fa-arrow-right-long'></i>
                    </div>
                  ),

                  prevArrow: (
                    <div>
                      <i className='fa-solid prevarrow arrow arrow_hover  fa-arrow-left-long'></i>
                    </div>
                  ),
                }}
                className='--hotSlider'
              >
                {hotNews.relations?.map((item) => (
                  <div key={uuid()}>
                    <div className='--item d-flex'>
                      <div className='--img img_hover'>
                        <img src={item.featureImage?.path} alt='' />
                      </div>
                      <div className='--txt'>
                        <div className='Info d-flex'>
                          <span className='type'>
                            {item.category[0]?.title}
                          </span>
                          <i className='fa-solid fa-circle divider'></i>
                          <span className='date'>
                            <i className='fa-solid fa-calendar-days'></i>
                            {item.date}
                          </span>
                          <i className='fa-solid fa-circle divider'></i>
                          <span className='view'>
                            <i className='fa-solid fa-eye'></i>
                            268
                          </span>
                        </div>
                        <h4>{item.title}</h4>
                        <div className='divider'></div>
                        <span>{item.description}</span>

                        <Link href={`/News&Event/news/detail~${item.id}`}>
                          <a className='button_2 button_hover2'>
                            Xem chi tiết
                            <i className='fa-sharp ms-2 fa-solid fa-arrow-right-long'></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <Catalog />
          </div>
        </div>
        <div className='Events'>
          <div className='container-fluid'>
            <div className='--title '>
              <span>{Events.subTitle}</span>
              <h3>{Events.title}</h3>
            </div>
            <div className='eventsSlider d-flex '>
              <EventsList />
            </div>
          </div>
        </div>
      </div>
    </NewsWrapper>
  );
};
export default NewsEvent;
