import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import HomeWrapper from "../components/Home/styled";
import Slider from "react-slick";
import { v4 as uuid } from "uuid";
import banner from "./_asset/banner.png";
import iconMap from "./_asset/icon-map.svg";
import iconSign from "./_asset/icon-sign.svg";

import iconTime from "./_asset/icon-time.svg";
import iconMap2 from "./_asset/icon-map2.svg";
import partent from "./_asset/partent.png";
import Link from "next/link";

import Image from "next/image";
import { Radio } from "antd";
import callApi from "../Api/Axios";
import { Marker } from "../components/Marker";
import chunk from "../funcion/chunk";
import { useAppDispatch, useAppSelector } from "../ReduxStore/hooks";
import pointSelector from "../ReduxStore/pointSlice/slice";
import Map from "../components/Map";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const res = await callApi
    .get(`/v2/page/Home?locale=${context.locale}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  const homeBanner = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "HomeBanner"
  );

  const homeIntro = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "homeIntro"
  );
  const listHomeIntro = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "listHomeIntro"
  );
  const homeDiscover = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "homeDiscover"
  );
  const homeMap = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "homeMap"
  );
  const homeNews = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "homeNews"
  );
  const homeDiscover1 = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "homeDiscover1"
  );
  return {
    props: {
      homeIntro,
      homeBanner,
      listHomeIntro,
      homeDiscover,
      homeMap,
      homeNews,
      homeDiscover1,
    },
  };
}

export default function Home({
  homeIntro,
  homeBanner,
  listHomeIntro,
  homeDiscover,
  homeMap,
  homeNews,
  homeDiscover1,
}) {
  const sliderRef: any = useRef();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [arr, setArr] = useState([]);
  const pointArr = useAppSelector(pointSelector).pointArr;
  useEffect(() => {
    if (pointArr.length === 0) {
      dispatch({ type: "GET_POINT" });
    }
    setArr(pointArr);
  }, [pointArr, router.locale]);

  const chunkArr = chunk(3, homeNews.relations);
  return (
    <HomeWrapper>
      <div id="home">
        {homeBanner ? (
          <div className="homeBanner">
            <div className="--background">
              <img src={homeBanner.image["path_1024px"]} alt="" />
            </div>
            <div className="--txt">
              <div className="--name">{homeBanner.subTitle}</div>
              <div className="--des">{homeBanner.title}</div>
              <span>{homeBanner.description}</span>
              <Link href={homeBanner.link}>
                <a className="button_hover1">
                  Tìm hiểu thêm
                  <i className="fa-sharp fa-solid fa-arrow-right"></i>
                </a>
              </Link>
            </div>
            <div className="container-fluid">
              <div className="filter">
                <div className="form-group">
                  <div className="--icon">
                    <img src={iconMap.src} alt="" />
                  </div>
                  <div className="--txtform">
                    <label htmlFor="">Điểm đến</label>
                    <input type="text" placeholder="Ví dụ: Ô Quy Hồ" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="--icon">
                    <img src={iconSign.src} alt="" />
                  </div>
                  <div className="--txtform">
                    <label htmlFor="">Thời gian</label>
                    <select name="" id="">
                      <option value="">Chọn thời gian</option>
                      <option value="">abc</option>
                      <option value="">xyz</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <div className="--icon">
                    <img src={iconMap.src} alt="" />
                  </div>
                  <div className="--txtform">
                    <label htmlFor="">Loại hình</label>
                    <select name="" id="">
                      <option value="">Chọn loại hình</option>
                      <option value="">abc</option>
                      <option value="">xyz</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <button className="button_1 button_hover1">Khám phá</button>
                </div>
              </div>
            </div>
            <div className="social">
              <a className="arrow_hover" href="">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a className="arrow_hover" href="">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a className="arrow_hover" href="">
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>
        ) : (
          false
        )}
        {homeIntro ? (
          <div className="homeIntro">
            <div className="container-fluid">
              <div className="--content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="--left">
                      <img src={homeIntro.image["path"]} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="--right">
                      <div className="subTitle">{homeIntro.subTitle}</div>
                      <h1 className="Title">{homeIntro.title}</h1>
                      <div className="--des">{homeIntro.description}</div>
                      <ul>
                        <li>
                          <span>Đèo - Núi</span>
                          <span>(20)</span>
                        </li>
                        <li>
                          <span>Khu bảo tồn</span>
                          <span>(16)</span>
                        </li>
                        <li>
                          <span>Ẩm thực</span>
                          <span>(25)</span>
                        </li>
                        <li>
                          <span>Di chuyển</span>
                          <span>(05)</span>
                        </li>
                        <li>
                          <span>Hang động</span>
                          <span>(02)</span>
                        </li>
                      </ul>
                      <Link href={homeIntro.link}>
                        <a className="button_2 button_hover2">
                          Xem tất cả
                          <i className="fa-sharp ms-2 fa-solid fa-arrow-right-long"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {listHomeIntro ? (
                <div className="list_homeIntro d-flex flex-wrap">
                  {listHomeIntro.articles.map((item) => (
                    <div
                      key={uuid()}
                      className="--item d-flex flex-column align-items-center"
                    >
                      <div className="--icon">
                        <img src={item.image?.path} alt="" />
                      </div>
                      <div className="--txt">
                        <h4>{item.title}</h4>
                        <article>{item.description}</article>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                false
              )}
            </div>
          </div>
        ) : (
          false
        )}
        {homeDiscover ? (
          <div className="homeDiscover">
            <div className="container-fluid">
              <div className="subTitle text-center">
                {homeDiscover.subTitle}
              </div>
              <h1 className="Title text-center">{homeDiscover.title}</h1>
            </div>
            <div className="container-fluid pe-0">
              <Slider
                key={uuid()}
                {...{
                  dots: false,
                  infinite: true,
                  speed: 300,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  variableWidth: true,
                  arrows: false,
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
                className="list_homeDiscover"
              >
                {homeDiscover?.relations?.map((item) => (
                  <div key={uuid()}>
                    <div className="--item img_hover1">
                      <div className="--img">
                        <img src={item?.featureImage?.path} alt="" />
                      </div>
                      <div className="--txt">
                        <div className="--subtitle">
                          {item?.pointType?.map((type) => type.title)}
                        </div>
                        <h4 className="--name">{item.title}</h4>
                        <div className="--bot d-flex justify-content-between align-items-end">
                          <div className="--des">
                            <div className="--location d-flex align-items-center">
                              <div className="--icon me-2">
                                <Image
                                  src={require("./_asset/icon-map1.svg")}
                                  alt=""
                                />
                              </div>
                              {item.address}
                            </div>
                            <article>{item.description}</article>
                          </div>
                          <Link
                            href={`/Discover/detail~${item.id}`}
                            key={uuid()}
                          >
                            <a className="--viewdetail button_hover1" href="">
                              <i className="fa-solid fa-arrow-right"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <Link href={homeDiscover.link}>
              <a className="--viewall button_2 button_hover2">
                Xem tất cả <i className="fa-solid ms-2 fa-arrow-right-long"></i>
              </a>
            </Link>
          </div>
        ) : (
          false
        )}
        {homeMap ? (
          <div className="homeMap">
            <div className="subTitle text-center">{homeMap.subTitle}</div>
            <h1 className="Title text-center">{homeMap.title}</h1>

            <Map
              height="600px"
              arr={pointArr?.filter((item) => item.vr !== "")}
            />
          </div>
        ) : (
          false
        )}
        {homeNews ? (
          <div className="homeNews">
            <div className="subTitle text-center">{homeNews.subTitle}</div>
            <h1 className="Title text-center">{homeNews.title}</h1>
            <div className="--content d-flex">
              <div className="--left">
                <div className="--img">
                  <img src={homeNews.relations[0].featureImage.path} alt="" />
                </div>
                <div className="--txt">
                  <div className="--cate">
                    {homeNews.relations[0].type} nổi bật
                  </div>
                  <div className="--subtitle">
                    {homeNews.relations[0].subTitle}
                  </div>
                  <a href="">
                    <h1>
                      <p> {homeNews.relations[0].title}</p>
                      <p> {homeNews.relations[0].description}</p>
                    </h1>
                  </a>
                  <div className="--time d-flex align-items-center">
                    <div className="--icon">
                      <Image src={require("./_asset/icon-time.svg")} alt="" />
                    </div>
                    {homeNews.relations[0].date}
                  </div>
                  <div className="--location d-flex align-items-center">
                    <div className="--icon">
                      <Image src={require("./_asset/icon-map1.svg")} alt="" />
                    </div>
                    {homeNews.relations[0]?.address}
                  </div>
                  <Link
                    href={`/News&Event/${homeNews.relations[0].type}/detail~${homeNews.relations[0].id}`}
                  >
                    <a className="--viewdetail button_hover1">
                      Tìm hiểu thêm
                      <i className="fa-solid ms-2 fa-arrow-right-long"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="--right">
                <Slider
                  ref={sliderRef}
                  key={uuid()}
                  {...{
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,

                    responsive: [
                      {
                        breakpoint: 768,
                        settings: {
                          slidesToShow: 1,
                          adaptiveHeight: true,
                          slidesToScroll: 1,
                        },
                      },
                    ],
                  }}
                  className="list_homeNews"
                >
                  {chunkArr?.map((item) => (
                    <div key={uuid()} className="--item">
                      {item?.map((news) => (
                        <div key={uuid()} className="--itemNews d-flex">
                          <div className="--img img_hover">
                            <Link
                              href={`/News&Event/${news.type}/detail~${news.id}`}
                            >
                              <a>
                                <img src={news.featureImage?.path} alt="" />
                              </a>
                            </Link>
                          </div>
                          <div className="--txt d-flex flex-column justify-content-between">
                            <div className="--top">
                              <div className="--cate">{news.type}</div>
                              <Link
                                href={`/News&Event/${news.type}/detail~${news.id}`}
                              >
                                <a href="">
                                  <h6>{news.title}</h6>
                                </a>
                              </Link>
                            </div>
                            <div className="--bot d-flex">
                              <div className="--time d-flex align-items-center">
                                <div className="--icon">
                                  <Image
                                    src={require("./_asset/icon-time.svg")}
                                    alt=""
                                  />
                                </div>
                                <span>{news.date}</span>
                              </div>
                              <div className="--view d-flex align-items-center">
                                <Image
                                  src={require("./_asset/icon-eye.svg")}
                                  alt=""
                                />{" "}
                                268
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </Slider>
                <div className="--botnews">
                  <ul className="slick-dots">
                    {chunkArr.map((chunk, id) => (
                      <>
                        <input
                          className="test"
                          type="radio"
                          name="slider"
                          id={id.toString()}
                          defaultChecked={id === 0}
                        />
                        <label
                          htmlFor={id.toString()}
                          onClick={() => {
                            sliderRef.current?.slickGoTo(id);
                          }}
                        ></label>
                      </>
                    ))}
                  </ul>
                  <Link href={homeNews.link}>
                    <a className="--viewall">
                      Xem tất cả{" "}
                      <i className="fa-solid ms-2 fa-arrow-right-long"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          false
        )}
        {homeDiscover1 ? (
          <div className="homeDiscover1">
            <div className="container-fluid">
              <div className="subTitle text-center">
                {homeDiscover1.subTitle}
              </div>
              <h1 className="Title text-center">{homeDiscover1.title}</h1>
              <div className="slider_homeDiscover1">
                <div className="list_homeDiscover1">
                  {homeDiscover1.relations?.length > 4 ? (
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
                      {homeDiscover1.relations?.map((item) => (
                        <div key={uuid()} className="col-md-3">
                          <Link href={`/Tour/${item.id}`}>
                            <div className="--item">
                              <div className="--img img_hover">
                                <a href="">
                                  <img src={item.featureImage?.path} alt="" />
                                </a>
                              </div>
                              <div className="--txt d-flex flex-column justify-content-between">
                                <div className="--top">
                                  <a href="">
                                    <h4>{item.title}</h4>
                                  </a>
                                  <article>{item.description}</article>
                                </div>
                                <div className="--bot">
                                  <div className="--time">
                                    <div className="--icon">
                                      <img src={iconTime.src} alt="" />
                                    </div>
                                    <span>2N1Đ</span>
                                  </div>
                                  <div className="--location">
                                    <div className="--icon">
                                      <img src={iconMap2.src} alt="" />
                                    </div>
                                    <span>{item?.destinationsType?.title}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <div className="row">
                      {homeDiscover1.relations?.map((item) => (
                        <div key={uuid()} className="col-md-3">
                          <Link href={`/Tour/${item.id}`}>
                            <div className="--item">
                              <div className="--img img_hover">
                                <a href="">
                                  <img src={item.featureImage?.path} alt="" />
                                </a>
                              </div>
                              <div className="--txt d-flex flex-column justify-content-between">
                                <div className="--top">
                                  <a href="">
                                    <h4>{item.title}</h4>
                                  </a>
                                  <article>{item.description}</article>
                                </div>
                                <div className="--bot">
                                  <div className="--time">
                                    <div className="--icon">
                                      <img src={iconTime.src} alt="" />
                                    </div>
                                    <span>2N1Đ</span>
                                  </div>
                                  <div className="--location">
                                    <div className="--icon">
                                      <img src={iconMap2.src} alt="" />
                                    </div>
                                    <span>{item?.destinationsType?.title}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="arrow_homeDiscover1"></div>
              </div>
            </div>
            <div className="partent">
              <img src={partent.src} alt="" />
            </div>
          </div>
        ) : (
          false
        )}
      </div>
    </HomeWrapper>
  );
}
