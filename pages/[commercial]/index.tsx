import React, { memo, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import CommercialWrapper from "./_component/_Style/style";
import BreadCrumb from "../../components/BreadCrumb";
import Navbar from "./_component/Navbar";
import { Pagination, Select } from "antd";
import TourCard from "./_component/TourCard";
import { v4 as uuid } from "uuid";
import HotelCard from "./_component/HotelCard";
import RestaurantCard from "./_component/RestaurantCard";
import Slider from "react-slick";
import callApi from "../../Api/Axios";
import { useAppDispatch, useAppSelector } from "../../ReduxStore/hooks";
import commercialSelector, {
  clearFilter,
  setType,
} from "../../ReduxStore/commercial/slice";
import List from "./_component/List/List";
import globalSelector from "../../ReduxStore/globalSlice/slice";

export async function getServerSideProps(context) {
  let type;
  switch (context.query.commercial) {
    case "Restaurant":
      type = "Restaurant";
      break;
    case "Tour":
      type = "Tour";

      break;
    case "Hotel":
      type = "Hotel";
      break;
  }
  const page = await callApi
    .get(`/v2/page/${type}?locale=${context.locale}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));

  const banner =
    (await page?.data?.snippets?.find(
      (item) => item["snippet_name"] === "banner"
    )) || null;
  const hotMenu =
    (await page?.data?.snippets?.find(
      (item) => item["snippet_name"] === "hotMenu"
    )) || null;
  const navBar =
    (await page?.data?.snippets?.find(
      (item) => item["snippet_name"] === "navBar"
    )) || null;
  const hotTour =
    (await page?.data?.snippets?.find(
      (item) => item["snippet_name"] === "hotTour"
    )) || null;
  const hotPoint =
    (await page?.data?.snippets?.find(
      (item) => item["snippet_name"] === "hotPoint"
    )) || null;

  if (
    context.query.commercial === "Restaurant" ||
    context.query.commercial === "Tour" ||
    context.query.commercial === "Hotel"
  ) {
    return {
      props: {
        banner,
        hotMenu,
        hotTour,
        hotPoint,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
export interface CommercialProps {
  banner: any;
  hotMenu?: any;
  hotTour?: any;
  hotPoint?: any;
}
const Commercial = ({
  banner,
  hotMenu,
  hotTour,
  hotPoint,
}: CommercialProps) => {
  const router = useRouter();
  const searchArr = useAppSelector(commercialSelector).searchArr;
  const dispatch = useAppDispatch();
  const settingMap = useAppSelector(globalSelector).settingMap;
  useEffect(() => {
    dispatch({ type: "GET_TYPES" });
  }, [router.locale]);
  useEffect(() => {
    const listType =
      router.query.commercial === "Restaurant"
        ? "restaurant_list"
        : router.query.commercial === "Tour"
        ? "tour_list"
        : "hotel_list";
    dispatch(setType(listType));
    dispatch({
      type: "GET_SEARCH_COMMERCIAL",
      payload: {
        page: 1,
        limit: 9,
      },
    });
    dispatch(clearFilter());
  }, [router.query.commercial, router.locale]);

  return (
    <CommercialWrapper>
      <div id='hotel'>
        <div className='Banner d-flex'>
          <img src={banner?.image?.path} alt=''></img>
          <div className='--Item'>
            <h1>{banner?.title}</h1>

            <BreadCrumb />
          </div>
        </div>
        <div className='container-fluid'>
          <div className='pageBody'>
            <Navbar />
            <div className='--content'>
              {hotMenu ? (
                <div className='hot-menu'>
                  <h2>{hotMenu.title}</h2>

                  <Slider
                    {...{
                      arrows: false,
                      dots: false,
                      slidesToShow: 5,
                      autoplay: true,
                      swipeToSlide: true,
                      speed: 500,
                      infinite: true,
                      responsive: [
                        {
                          breakpoint: 768,
                          settings: {
                            slidesToShow: 1,
                            variableWidth: true,
                            slidesToScroll: 1,
                          },
                        },
                      ],
                    }}
                  >
                    {hotMenu?.articles?.map((item) => (
                      <div
                        className='--item img_hover d-flex flex-column'
                        key={uuid()}
                      >
                        <div className='--img'>
                          <img src={item?.image?.path} alt='' />
                        </div>
                        <span>{item?.title}</span>
                      </div>
                    ))}
                  </Slider>
                </div>
              ) : (
                false
              )}
              <List />

              {hotPoint ? (
                <div className='Hotel-sliderWarpper'>
                  <h3>{hotPoint.title}</h3>
                  <Slider
                    {...{
                      className: "HotelSlider",
                      dots: true,
                      infinite: true,
                      speed: 500,
                      slidesToShow: 4,
                      slidesToScroll: 4,
                      arrows: false,
                      responsive: [
                        {
                          breakpoint: 1279,
                          settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                          },
                        },
                        {
                          breakpoint: 768,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: true,
                            adaptiveHeight: true,
                          },
                        },
                      ],
                    }}
                  >
                    {hotPoint?.relations?.map((item) => (
                      <div key={uuid()} className='--warpper'>
                        <div className='placeCard d-flex'>
                          <div className='--img img_hover'>
                            <img src={item.featureImage?.path} alt='' />
                          </div>
                          <div className='--txt pt-3 d-flex flex-column'>
                            <h4>{item.title}</h4>
                            <span>{item.highlights}</span>
                            <Link href={`/Discover/detail~${item.id}`}>
                              {settingMap?.FindOutMore
                                ? settingMap?.FindOutMore
                                : ""}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              ) : (
                false
              )}
              {hotTour ? (
                <div className='tour-sliderWarpper'>
                  <h3>{hotTour.title}</h3>
                  <Slider
                    {...{
                      className: "TourSlider",
                      dots: true,
                      infinite: true,
                      speed: 500,
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      arrows: true,
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
                      responsive: [
                        {
                          breakpoint: 768,
                          settings: {
                            slidesToShow: 1,
                            variableWidth: true,
                            slidesToScroll: 1,
                          },
                        },
                      ],
                    }}
                  >
                    {hotTour.relations?.map((item) => (
                      <div key={uuid()} className='--warpper'>
                        <TourCard
                          id={item.id}
                          img={item.featureImage?.path}
                          key={uuid()}
                          tilte={item.title}
                          plan={
                            item.plan ? item.plan : "Chưa có kế hoạch du lịch"
                          }
                          pointCategory={item.destinationsType.title}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              ) : (
                false
              )}
            </div>
          </div>
        </div>
      </div>
    </CommercialWrapper>
  );
};
export default memo(Commercial);
