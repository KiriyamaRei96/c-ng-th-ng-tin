import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import CommercialDetailWrapper from "./_component/styled/style";

import Slider from "react-slick";
import RestaurantCard from "../_component/RestaurantCard";
import TourCard from "../_component/TourCard";
import {
  banner,
  icon13,
  iconBooking,
  iconCheck,
  iconMap2,
  iconTime,
} from "../../../components/img";
import callApi from "../../../Api/Axios";
import { v4 as uuid } from "uuid";

import Fancybox from "../../../components/fancybox";

import ContentBox from "./_component/ContentBox";
import Map from "../../../components/Map";
import RoomsList from "./_component/RoomsList";
import { useAppDispatch, useAppSelector } from "../../../ReduxStore/hooks";
import pointSelector from "../../../ReduxStore/pointSlice/slice";
import HotelCard from "../_component/HotelCard";
import Comment from "../../../components/Comment";

import globalSelector from "../../../ReduxStore/globalSlice/slice";
import capitalizeFirstLetter from "../../../funcion/toUpperCase";
import BookingCard from "../../../components/BookingCard";
import commentSelector from "../../../ReduxStore/commentSlice/slice";
import CommentBtn from "../../../components/CommentBtn";
import ShareBox from "../../../components/ShareBox";
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookIcon,
} from "react-share";
export async function getServerSideProps(context) {
  let type;
  let other;
  switch (context.query.commercial) {
    case "Restaurant":
      type = "restaurant_detail";
      other = "detailRestaurant";
      break;
    case "Tour":
      type = "tour_detail";
      other = "detailTour";

      break;
    case "Hotel":
      type = "hotel_detail";
      other = "detailHotel";
      break;
  }
  const id = context?.query?.commercialDetail.replace("detail~", "").toString();
  const data =
    (
      await callApi
        .get(`/v2/${type}/${id}?locale=${context.locale}`)
        .then((res) => res.data)
        .catch((err) => console.error(err))
    )?.data || null;
  const otherData =
    (
      await callApi
        .get(`/v2/page/${other}?locale=${context.locale}`)
        .then((res) => res.data)
        .catch((err) => console.error(err))
    )?.data || null;

  if (
    context.query.commercial === "Restaurant" ||
    context.query.commercial === "Tour" ||
    context.query.commercial === "Hotel"
  ) {
    return {
      props: {
        type,
        data,
        otherData,
        id,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
const CommercialDetail = ({ type, data, otherData, id }) => {
  const router = useRouter();
  const pointArr = useAppSelector(pointSelector).pointArr;
  const commentArr = useAppSelector(commentSelector).commentArr;
  useEffect(() => {
    dispatch({ type: "GET_COMMENT", payload: id });
  }, [id]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (pointArr.length === 0) {
      dispatch({ type: "GET_POINT" });
    }
  }, [pointArr, router.locale]);

  const [image, setImage] = useState<string | undefined>(
    data?.featureImage.path
  );

  const [active, setActive] = useState("content");

  const typeMap = {
    restaurant_detail: "ẩm thực",
    tour_detail: "Lữ Hành",
    hotel_detail: "Lưu trú",
  };
  let allIMG = [];
  if (data?.galleries) {
    allIMG = [data?.featureImage, ...data?.galleries];
  }
  const event = otherData?.snippets.find(
    (snip) => snip["snippet_name"] === "event"
  );
  const slider = otherData?.snippets.find(
    (snip) => snip["snippet_name"] === "slider"
  );
  const settingMap = useAppSelector(globalSelector).settingMap;
  let url;
  if (typeof window !== "undefined") {
    url = window.location.href;
  }
  return (
    <CommercialDetailWrapper>
      <div id="detailservice">
        <div className="detailserviceContent detailAll">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9">
                <div className="--left">
                  <div className="subTitle">
                    {settingMap[capitalizeFirstLetter(data?.type)]}
                  </div>
                  <h3 className="--titlepost">{data?.title}</h3>
                  <div className="--interactive d-flex align-items-center justify-content-between">
                    <div className="--evaluate d-flex align-items-center">
                      {data?.star ? (
                        <div className="--star d-flex align-items-center">
                          <span>{data?.star}</span>
                          {Array.apply(null, Array(Number(data?.star))).map(
                            function (x, i) {
                              return (
                                <i
                                  key={uuid()}
                                  className="fa-solid fa-star"
                                ></i>
                              );
                            }
                          )}
                          {Array.apply(null, Array(5 - Number(data?.star))).map(
                            function (x, i) {
                              return (
                                <i
                                  key={uuid()}
                                  style={{ color: "wheat" }}
                                  className="fa-solid fa-star"
                                ></i>
                              );
                            }
                          )}
                        </div>
                      ) : (
                        false
                      )}

                      <span>
                        {commentArr?.length} {settingMap.ratting}
                      </span>
                    </div>
                    <div className="--sharecmt  d-flex align-items-center">
                      <div className="--link">
                        <a className="share-hover">
                          <i className="fa-solid fa-share-nodes"></i>
                          <span className="txt"> {settingMap.share}</span>

                          <div className="--share">
                            <TwitterShareButton url={url}>
                              <TwitterIcon />
                            </TwitterShareButton>
                            <FacebookShareButton url={url}>
                              <FacebookIcon />
                            </FacebookShareButton>
                            <LinkedinShareButton url={url}>
                              <LinkedinIcon />
                            </LinkedinShareButton>
                          </div>
                        </a>
                      </div>

                      <CommentBtn id={id}>
                        <button className="button_hover2 button_2">
                          {settingMap.writeRatting}
                        </button>
                      </CommentBtn>
                    </div>
                  </div>
                  <div className="list_img">
                    <div className="--img">
                      <img src={image ? image : ""} alt="" />
                    </div>
                    {allIMG?.slice(0, 4).map((img, id) =>
                      id < 3 ? (
                        <div
                          onClick={() => {
                            setImage(img.path);
                          }}
                          key={uuid()}
                          className={
                            image === img.path ? "--img active" : "--img"
                          }
                        >
                          <img src={img.path} alt="" />
                        </div>
                      ) : (
                        <div key={uuid()} className="--img">
                          <img src={img.path} alt="" />
                          <Fancybox key={uuid()} options={{ infinite: true }}>
                            {allIMG?.map((item) => (
                              <a
                                key={uuid()}
                                data-fancybox="gallery"
                                data-src={item.path}
                              >
                                {data?.galleries.length - 3}+
                              </a>
                            ))}
                          </Fancybox>
                        </div>
                      )
                    )}
                  </div>
                  <div className="list_content">
                    <div className="--tab">
                      <div
                        onClick={() => {
                          setActive("content");
                        }}
                        className={
                          active === "content" ? "--item active" : "--item"
                        }
                      >
                        {settingMap.general}
                      </div>
                      {data?.plan ? (
                        <div
                          onClick={() => {
                            setActive("plan");
                          }}
                          className={
                            active === "plan" ? "--item active" : "--item"
                          }
                        >
                          {settingMap.plan}
                        </div>
                      ) : (
                        false
                      )}
                      {data?.menu ? (
                        <div
                          onClick={() => {
                            setActive("Menu");
                          }}
                          className={
                            active === "Menu" ? "--item active" : "--item"
                          }
                        >
                          {settingMap.restaurantMenu}
                        </div>
                      ) : (
                        false
                      )}
                      {data?.rooms ? (
                        <div
                          onClick={() => {
                            setActive("rooms");
                          }}
                          className={
                            active === "rooms" ? "--item active" : "--item"
                          }
                        >
                          {settingMap.rooms}
                        </div>
                      ) : (
                        false
                      )}
                      <div
                        onClick={() => {
                          setActive("potision");
                        }}
                        className={
                          active === "potision" ? "--item active" : "--item"
                        }
                      >
                        {settingMap.location}
                      </div>
                      <div
                        onClick={() => {
                          setActive("comments");
                        }}
                        className={
                          active === "comments" ? "--item active" : "--item"
                        }
                      >
                        {settingMap.comment}
                      </div>
                    </div>
                    {active === "content" ? (
                      <ContentBox title={data?.title} content={data?.content} />
                    ) : (
                      false
                    )}
                    {active === "Menu" ? (
                      <ContentBox title={"Thực Đơn"} content={data?.menu} />
                    ) : (
                      false
                    )}
                    {active === "plan" ? (
                      <ContentBox
                        title={settingMap.plan}
                        content={data?.plan}
                      />
                    ) : (
                      false
                    )}
                    {active === "potision" ? (
                      <Map arr={[data]} height="400px" />
                    ) : (
                      false
                    )}
                    {active === "rooms"
                      ? data?.rooms.map((room) => (
                          <RoomsList key={uuid()} rooms={room} />
                        ))
                      : false}
                    {active === "comments" ? <Comment id={id} /> : false}
                    <div className="--card">
                      <div className="--icon">
                        <img src={icon13.default.src} alt="" />
                      </div>
                      <div className="--txt">
                        <div className="--title">{settingMap.hightLight}</div>
                        <ul>
                          {data?.highlights?.split("/").map((text) => (
                            <li key={uuid()}>
                              <div className="--check">
                                <img src={iconCheck.default.src} alt="" />
                              </div>
                              <span>{text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="--right cardbook">
                  <BookingCard />
                  <div className="--map">
                    <Map height="450px" arr={pointArr} />
                  </div>
                  <div className="--endow">
                    <div className="--img">
                      <img src={event?.image?.path} alt="" />
                    </div>
                    <Link shallow href={event?.link ? event?.link : "/"}>
                      <div className="--txt">
                        <span>{event?.subTitle}</span>
                        <h2>{event?.title}</h2>
                        <div className="--des">{event?.description}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {router?.query?.commercial === "Restaurant" ? (
          <div className="detailservicediscover">
            <div className="container-fluid">
              <div className="--title">
                <div className="subTitle text-center">{slider?.subTitle}</div>
                <h1 className="Title text-center">{slider?.tilte}</h1>
              </div>
              <div className="slider">
                <div className="list_servicediscover">
                  {slider?.relations?.length > 4 ? (
                    <Slider
                      {...{
                        dots: true,
                        infinite: true,
                        speed: 800,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: true,

                        nextArrow: (
                          <div>
                            <i className="fa-solid nextarrow arrow arrow_hover  fa-arrow-right-long"></i>
                          </div>
                        ),
                        prevArrow: (
                          <div>
                            <i className="fa-solid prevarrow arrow arrow_hover  fa-arrow-left-long"></i>
                          </div>
                        ),
                        responsive: [
                          {
                            breakpoint: 768,
                            settings: {
                              slidesToShow: 1,

                              slidesToScroll: 1,
                            },
                          },
                        ],
                      }}
                      className="row"
                    >
                      {slider?.relations?.map((i) => (
                        <div key={uuid()} className="col-md-3">
                          <RestaurantCard
                            title={i.title}
                            address={i.address}
                            img={i.featureImage?.path}
                            id={i.id}
                            key={uuid()}
                            rate={i.star}
                          />
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <div className="row">
                      {slider?.relations?.map((i) => (
                        <div key={uuid()} className="col-md-3">
                          <RestaurantCard
                            title={i.title}
                            address={i.address}
                            img={i.featureImage?.path}
                            id={i.id}
                            key={uuid()}
                            rate={i.star}
                            view={i.viewTotal}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="arrow_servicediscover"></div>
              </div>
            </div>
          </div>
        ) : (
          false
        )}
        {router?.query?.commercial === "Hotel" ? (
          <div className="detailservicediscover detailhotel">
            <div className="container-fluid">
              <div className="--title">
                <div className="subTitle text-center">{slider?.subTitle}</div>
                <h1 className="Title text-center">{slider?.title}</h1>
              </div>
              <div className="slider">
                <div className="list_servicediscover">
                  {slider?.relations?.length > 4 ? (
                    <Slider
                      {...{
                        dots: true,
                        infinite: true,
                        speed: 800,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: true,

                        nextArrow: (
                          <div>
                            <i className="fa-solid nextarrow arrow arrow_hover  fa-arrow-right-long"></i>
                          </div>
                        ),
                        prevArrow: (
                          <div>
                            <i className="fa-solid prevarrow arrow arrow_hover  fa-arrow-left-long"></i>
                          </div>
                        ),
                        responsive: [
                          {
                            breakpoint: 768,
                            settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              variableWidth: true,
                            },
                          },
                        ],
                      }}
                      className="row"
                    >
                      {slider?.relations?.map((i) => (
                        <div key={uuid()} className="col-md-3">
                          <HotelCard
                            galaley={i.galleries}
                            title={i.title}
                            address={i.address}
                            img={i.featureImage?.path}
                            id={i.id}
                            key={uuid()}
                            rate={i.star}
                          />
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <div className="row">
                      {slider?.relations?.map((i) => (
                        <div key={uuid()} className="col-md-3">
                          <HotelCard
                            galaley={i.galleries}
                            title={i.title}
                            address={i.address}
                            img={i.featureImage?.path}
                            id={i.id}
                            key={uuid()}
                            rate={i.star}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="row"></div>
                </div>
                <div className="arrow_servicediscover"></div>
              </div>
            </div>
          </div>
        ) : (
          false
        )}
        {router?.query?.commercial === "Tour" ? (
          <div className="detailservicediscover1 detailservicediscover">
            <div className="container-fluid">
              <div className="--title">
                <div className="subTitle text-center">{slider?.subTitle}</div>
                <h1 className="Title text-center">{slider?.title}</h1>
              </div>
              <div className="slider1">
                <div className="list_servicediscover1 dicover_all">
                  {slider?.relations?.length > 4 ? (
                    <Slider
                      {...{
                        dots: true,
                        infinite: true,
                        speed: 800,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: true,
                        nextArrow: (
                          <div>
                            <i className="fa-solid nextarrow arrow arrow_hover  fa-arrow-right-long"></i>
                          </div>
                        ),
                        prevArrow: (
                          <div>
                            <i className="fa-solid prevarrow arrow arrow_hover  fa-arrow-left-long"></i>
                          </div>
                        ),
                        responsive: [
                          {
                            breakpoint: 768,
                            settings: {
                              slidesToShow: 1,
                              variableWidth: true,
                              adaptiveHeight: true,
                              slidesToScroll: 1,
                            },
                          },
                        ],
                      }}
                      className="list_slider"
                    >
                      {slider?.relations?.map((i) => (
                        <div key={uuid()} className="--wrapper">
                          <TourCard
                            id={i.id}
                            img={i.featureImage?.path}
                            tilte={i.title}
                            plan={i.plan ? i.plan : ""}
                            key={uuid()}
                            pointCategory={i.destinationsType?.title}
                          />
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <div className="row">
                      {slider?.relations?.map((i) => (
                        <div key={uuid()} className="--wrapper">
                          <TourCard
                            id={i.id}
                            img={i.featureImage?.path}
                            tilte={i.title}
                            plan={i.plan ? i.plan : ""}
                            key={uuid()}
                            pointCategory={i.destinationsType?.title}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="arrow_servicediscover1"></div>
              </div>
            </div>
          </div>
        ) : (
          false
        )}
      </div>
    </CommercialDetailWrapper>
  );
};
export default CommercialDetail;
