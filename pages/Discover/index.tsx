import { Pagination } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import callApi from "../../Api/Axios";
import pad from "../../funcion/pad";
import DiscoverWarpper from "./_component/Styled/style";
import { v4 as uuid } from "uuid";
import DiscoverSearch from "./_component/DiscoverSearch";
import { useAppDispatch, useAppSelector } from "../../ReduxStore/hooks";
import pointSelector from "../../ReduxStore/pointSlice/slice";
import Fancybox from "../../components/fancybox";
export async function getServerSideProps() {
  // page
  const page = await callApi
    .get("/v2/page/discover?locale=vi")
    .then((res) => res.data)
    .catch((err) => console.error(err));
  const discoverBanner = await page.data?.snippets?.find(
    (item) => item["snippet_name"] === "discoverBanner"
  );
  const discoverBlock = await page.data?.snippets?.find(
    (item) => item["snippet_name"] === "discoverBlock"
  );
  const discoverBlock1 = await page.data?.snippets?.find(
    (item) => item["snippet_name"] === "discoverBlock1"
  );
  const discoverVideo = await page.data?.snippets?.find(
    (item) => item["snippet_name"] === "discoverVideo"
  );
  return {
    props: {
      discoverBanner,
      discoverBlock,
      discoverVideo,
      discoverBlock1,
    },
  };
}

const Discover = ({
  discoverBanner,
  discoverBlock,
  discoverVideo,
  discoverBlock1,
}) => {
  const dispatch = useAppDispatch();
  const pointArr = useAppSelector(pointSelector).pointArr;
  const [current, setCurrent] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<string>(
    "https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
  );
  useEffect(() => {
    if (pointArr.length === 0) {
      dispatch({ type: "GET_POINT" });
    }
  }, []);
  const slider: any = useRef();
  const playPoint = pointArr.filter(
    (item) => item.pointType[0]?.title === "Điểm vui chơi"
  );

  return (
    <DiscoverWarpper>
      <div id="discover">
        <div className="discoverBanner">
          <Slider
            ref={slider}
            {...{
              dots: false,
              infinite: true,
              speed: 800,
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight:true,
              arrows: false,
              fade:true,
              afterChange(currentSlide) {
                setCurrent(currentSlide);
              },
            }}
          >
            {discoverBanner?.articles?.map((item) => (
              <div key={uuid()}>
              
                  <div className="--item">
                    <div className="--background">
                      <img src={item.image?.path} alt="" />
                    </div>
                    <div className="container-fluid">
                      <div className="--content">
                        <div className="--top">
                          <div className="--title">
                            <span>{item?.subTitle}</span>
                            <h1 className="Title mt-3">{item?.title}</h1>
                          </div>
                        </div>
                        <div className="--bot d-flex justify-content-between align-items-end">
                          <a href="">
                            <i className="fa-sharp fa-solid fa-arrow-down-long"></i>
                            Xem tất cả
                          </a>
                          <div className="--txt">
                            <article>{item?.description}</article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              
              </div>
            ))}
          </Slider>
          <div className="Slider-action d-flex justify-content-between">
            <div className="--number d-flex align-items-center">
              <span>{pad(current + 1)}</span>
              <div className="line"></div>
              <span>{pad(discoverBanner?.articles?.length)}</span>
            </div>
            <div className="--arrow">
              <i
                onClick={() => {
                  slider.current.slickPrev();
                }}
                className="fa-solid prevarrow fa-arrow-left-long"
              ></i>
              <i
                onClick={() => {
                  slider.current?.slickNext();
                }}
                className="fa-solid nextarrow fa-arrow-right-long"
              ></i>
            </div>
          </div>
        </div>

        <div className="discoverBlock">
          <div className="container-fluid">
            <div className="--title">
              <div className="subTitle">{discoverBlock.subTitle}</div>
              <h1 className="Title">{discoverBlock.title}</h1>
            </div>
            <div className="slider_discoverBlock">
              <div className="list_discoverBlock list_discover">
                <Slider
                  {...{
                    dots: false,
                    infinite: true,
                    speed: 800,
                    slidesToShow: 3,
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
                  className=""
                >
                  {discoverBlock.relations.length > 1
                    ? discoverBlock.relations?.map((item) => (
                        <Link key={uuid()} href={`/Discover/${item.id}`}>
                    
                            <div className="--item img_hover">
                              <a href="">
                                <div className="--img">
                                  <img src={item.featureImage?.path} alt="" />
                                </div>
                                <div className="--txt">
                                  <div className="--type">
                                    {item.pointType[0]
                                      ? item.pointType[0].title
                                      : "Chưa phân loại"}
                                  </div>
                                  <h4>{item.title}</h4>
                                  <div className="--location ">
                                    <Image
                                      src={require("../../Asset/icon-map1.svg")}
                                      alt=""
                                    />
                                    <span>{item.address}</span>
                                  </div>
                                </div>
                              </a>
                            </div>
                      
                        </Link>
                      ))
                    : pointArr.map((item) => (
                        <Link
                          key={uuid()}
                          href={`https://congthongtin.vercel.app/Discover/${item.id}`}
                        >
                          <div className="--wrapper">
                            <div className="--item img_hover">
                              <a href="">
                                <div className="--img">
                                  <img src={item.featureImage?.path} alt="" />
                                </div>
                                <div className="--txt">
                                  <div className="--type">
                                    {item.pointType[0]
                                      ? item.pointType[0].title
                                      : "Chưa phân loại"}
                                  </div>
                                  <h4>{item.title}</h4>
                                  <div className="--location ">
                                    <Image
                                      src={require("../../Asset/icon-map1.svg")}
                                      alt=""
                                    />
                                    <span>{item.address}</span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </Link>
                      ))}
                </Slider>
              </div>
              <div className="arrow_discoverBlock"></div>
            </div>
          </div>
        </div>
        <div className="discoverBlock1">
          <div className="row ">
            <div className="col-md-5">
              <div className="--left">
                <img src={currentImage} alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="--right">
                <div className="--title">
                  <div className="subTitle">{discoverBlock1.subTitle}</div>
                  <h1 className="Title">{discoverBlock1.title}</h1>
                </div>
                <div className="list_discoverBlock1 list_discover">
                  <Slider
                    {...{
                      dots: true,
                      infinite: true,
                      speed: 800,
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      arrows: false,
                      afterChange(currentSlide) {
                        discoverBlock1.relations.length > 1
                          ? setCurrentImage(
                              discoverBlock1.relations[currentSlide]
                                .featureImage?.path
                            )
                          : setCurrentImage(
                              playPoint[currentSlide].featureImage?.path
                            );
                      },
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
                    {discoverBlock1.relations.length > 1
                      ? discoverBlock1.relations?.map((item) => (
                          <Link key={uuid()} href={`/Discover/${item.id}`}>
                            <div className="--wrapper">
                              <div className="--item img_hover1">
                                <a href="">
                                  <div className="--img">
                                    <img src={item.featureImage?.path} alt="" />
                                  </div>
                                  <div className="--txt">
                                    <div className="--type">
                                      {item.pointType[0]
                                        ? item.pointType[0]?.title
                                        : "Chưa phân loại"}
                                    </div>
                                    <h4>{item.title}</h4>
                                    <div className="--location ">
                                      <Image
                                        src={require("../../Asset/icon-map1.svg")}
                                        alt=""
                                      />
                                      <span>{item.address}</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </Link>
                        ))
                      : playPoint.map()}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DiscoverSearch />
        <div className="discoverVideo">
          <div className="--img">
            <img src={discoverVideo.image?.path} alt="" />
          </div>
          <div className="--txt d-flex flex-column align-items-center">
            <h1 className="Title">{discoverVideo.title}</h1>
            <Fancybox options={{ infinite: false }}>
              <a
                data-fancybox="iframe"
                data-src={discoverVideo.link}
                className="play"
              >
                <i className="fa-solid fa-play"></i>
              </a>
            </Fancybox>
          </div>
        </div>
      </div>
    </DiscoverWarpper>
  );
};
export default Discover;
