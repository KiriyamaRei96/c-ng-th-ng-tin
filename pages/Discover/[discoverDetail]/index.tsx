import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import callApi from "../../../Api/Axios";
import DiscoverWarpper from "../_component/Styled/style";
import { v4 as uuid } from "uuid";
import Fancybox from "../../../components/fancybox";
import ContentBox from "../../[commercial]/[commercialDetail]/_component/ContentBox";
import Map from "../../../components/Map";
import {
  icon13,
  iconBooking,
  iconCheck,
  iconMap2,
  iconTime,
  VR,
  VRLogo,
} from "../../../components/img";
import { useAppDispatch, useAppSelector } from "../../../ReduxStore/hooks";
import pointSelector from "../../../ReduxStore/pointSlice/slice";
import Link from "next/link";
import Comment from "../../../components/Comment";
import { useRouter } from "next/router";
import globalSelector from "../../../ReduxStore/globalSlice/slice";
import BookingCard from "../../../components/BookingCard";
import CommentBtn from "../../../components/CommentBtn";
import commentSelector from "../../../ReduxStore/commentSlice/slice";

export async function getServerSideProps(context) {
  let other;

  const id = context?.query?.discoverDetail.replace("detail~", "").toString();
  const data =
    (
      await callApi
        .get(`/v2/point_detail/${id}?locale=${context.locale}`)
        .then((res) => res.data)
        .catch((err) => console.error(err))
    ).data || null;
  const otherData =
    (
      await callApi
        .get(`/v2/page/deatilDiscover?locale=${context.locale}`)
        .then((res) => res.data)
        .catch((err) => console.error(err))
    ).data || null;

  return {
    props: {
      data,
      otherData,
      id,
    },
  };
}
const DiscoverDetail = ({ data, otherData, id }) => {
  const [image, setImage] = useState<string | undefined>(
    data?.featureImage?.path
  );
  const router = useRouter();
  let allIMG = [];
  const [active, setActive] = useState("content");
  const pointArr = useAppSelector(pointSelector).pointArr;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (pointArr.length === 0) {
      dispatch({ type: "GET_POINT" });
    }
  }, [pointArr, router.locale]);
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
  const commentArr = useAppSelector(commentSelector).commentArr;
  useEffect(() => {
    dispatch({ type: "GET_COMMENT", payload: id });
  }, [id]);
  return (
    <DiscoverWarpper>
      <div id="detaildiscover">
        <div className="detaildiscoverContent detailAll">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9">
                <div className="--left">
                  <div className="subTitle">Du lịch</div>
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
                        {commentArr.length} {settingMap.ratting}
                      </span>
                    </div>
                    <div className="--sharecmt d-flex align-items-center">
                      <div className="--link">
                        <a href="">
                          <i className="fa-solid fa-share-nodes"></i>{" "}
                          {settingMap.share}
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
                      {data?.featureImage?.path === image &&
                      data?.vr !== "" &&
                      data?.vr !== "null" ? (
                        <Fancybox
                          options={{ infinite: true, mainClass: "fancybox1" }}
                        >
                          <a
                            className="infame fancybox"
                            key={uuid()}
                            data-fancybox="360"
                            data-type="iframe"
                            data-src={data?.vr}
                          >
                            <img
                              style={{ width: "100px", height: "100px" }}
                              src={VRLogo.default.src}
                              alt=""
                            />
                          </a>
                        </Fancybox>
                      ) : (
                        false
                      )}
                    </div>
                    {allIMG?.slice(0, 4).map((img, id) =>
                      id < 3 ? (
                        <div
                          onClick={() => {
                            setImage(img?.path);
                          }}
                          key={uuid()}
                          className={
                            image === img?.path ? "--img active" : "--img"
                          }
                        >
                          <img src={img?.path} alt="" />
                        </div>
                      ) : (
                        <div key={uuid()} className="--img">
                          <img src={img?.path} alt="" />
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
                          Menu
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
                          Thông tin phòng
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
                    <Link href={event?.link ? event?.link : "/"}>
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
        <div className="detaildiscoverLocation">
          <div className="container-fluid">
            <div className="subTitle text-center">{slider?.subTitle}</div>
            <h1 className="Title text-center">{slider?.title}</h1>
            <div className="slider_listLocation">
              <div className="list_discover">
                {slider?.relations.length > 4 ? (
                  <Slider
                    {...{
                      dots: true,
                      infinite: true,
                      speed: 800,
                      slidesToShow: 4,
                      slidesToScroll: 4,
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
                            slidesToScroll: 1,
                          },
                        },
                      ],
                    }}
                    className="row"
                  >
                    {slider?.relations.map((item) => (
                      <div key={uuid()} className="--warrper ">
                        <div className="--item img_hover">
                          <Link
                            key={uuid()}
                            href={`/Discover/detail~${item.id}`}
                          >
                            <a>
                              <div className="--img">
                                <img src={item?.featureImage.path} alt="" />
                              </div>
                              <div className="--txt">
                                <div className="--type">
                                  {item?.pointType[0]?.title}
                                </div>
                                <h4>{item?.title}</h4>
                                <div className="--location ">
                                  <Image
                                    src={require("./_asset/icon-map1.svg")}
                                    alt=""
                                  />
                                  <span>{item?.address}</span>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="row">
                    {slider?.relations.map((item) => (
                      <div key={uuid()} className="--warrper col-md-3">
                        <div className="--item img_hover">
                          <Link
                            key={uuid()}
                            href={`/Discover/detail~${item.id}`}
                          >
                            <a>
                              <div className="--img">
                                <img src={item?.featureImage.path} alt="" />
                              </div>
                              <div className="--txt">
                                <div className="--type">
                                  {item?.pointType[0]?.title}
                                </div>
                                <h4>{item?.title}</h4>
                                <div className="--location ">
                                  <Image
                                    src={require("./_asset/icon-map1.svg")}
                                    alt=""
                                  />
                                  <span>{item?.address}</span>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="arrow_detaildiscoverLocation"></div>
            </div>
          </div>
        </div>
      </div>
    </DiscoverWarpper>
  );
};
export default DiscoverDetail;
