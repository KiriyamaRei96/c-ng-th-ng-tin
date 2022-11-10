import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import CommercialDetailWrapper from "./_component/styled/style";
import Image from "next/image";
import Sider from "antd/lib/layout/Sider";
import Slider from "react-slick";
import RestaurantCard from "../_component/RestaurantCard";
import TourCard from "../_component/TourCard";
import {
  icon13,
  iconBooking,
  iconMap2,
  iconTime,
} from "../../../components/img";
import callApi from "../../../Api/Axios";
import { v4 as uuid } from "uuid";
import Item from "antd/lib/list/Item";
import Fancybox from "../../../components/fancybox";
import { all } from "redux-saga/effects";
import ContentBox from "./_component/ContentBox";
import Map from "../../../components/Map";
import RoomsList from "./_component/RoomsList";
import { useAppDispatch, useAppSelector } from "../../../ReduxStore/hooks";
import pointSelector from "../../../ReduxStore/pointSlice/slice";
import HotelCard from "../_component/HotelCard";
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
        .get(`/v2/${type}/${id}?locale=vi`)
        .then((res) => res.data)
        .catch((err) => console.error(err))
    ).data || null;
  const otherData =
    (
      await callApi
        .get(`/v2/page/${other}?locale=vi`)
        .then((res) => res.data)
        .catch((err) => console.error(err))
    ).data || null;
  console.log(otherData);
  return {
    props: {
      type,
      data,
      otherData,
    },
  };
}
const CommercialDetail = ({ type, data, otherData }) => {
  const pointArr = useAppSelector(pointSelector).pointArr;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (pointArr.length === 0) {
      dispatch({ type: "GET_POINT" });
    }
  }, [pointArr]);

  const [image, setImage] = useState<string | undefined>(
    data?.featureImage.path
  );

  const [active, setActive] = useState("content");
  const router = useRouter();
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

  return (
    <CommercialDetailWrapper>
      <div id='detailservice'>
        <div className='detailserviceContent detailAll'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-9'>
                <div className='--left'>
                  <div className='subTitle'>{typeMap[type]}</div>
                  <h3 className='--titlepost'>{data?.title}</h3>
                  <div className='--interactive d-flex align-items-center justify-content-between'>
                    <div className='--evaluate d-flex align-items-center'>
                      {data?.star ? (
                        <div className='--star d-flex align-items-center'>
                          <span>{data?.star}</span>
                          {Array.apply(null, Array(Number(data?.star))).map(
                            function (x, i) {
                              return (
                                <i
                                  key={uuid()}
                                  className='fa-solid fa-star'
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
                                  className='fa-solid fa-star'
                                ></i>
                              );
                            }
                          )}
                        </div>
                      ) : (
                        false
                      )}

                      <span>84 đánh giá</span>
                    </div>
                    <div className='--sharecmt d-flex align-items-center'>
                      <div className='--link'>
                        <a href=''>
                          <i className='fa-solid fa-share-nodes'></i>Chia sẻ
                        </a>
                        <a href=''>
                          <i className='fa-solid fa-heart'></i>Yêu thích
                        </a>
                      </div>
                      <button className='button_hover2 button_2'>
                        Viết đánh giá
                      </button>
                    </div>
                  </div>
                  <div className='list_img'>
                    <div className='--img'>
                      <img src={image ? image : ""} alt='' />
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
                          <img src={img.path} alt='' />
                        </div>
                      ) : (
                        <div key={uuid()} className='--img'>
                          <img src={img.path} alt='' />
                          <Fancybox key={uuid()} options={{ infinite: true }}>
                            {allIMG?.map((item) => (
                              <a
                                key={uuid()}
                                data-fancybox='gallery'
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
                  <div className='list_content'>
                    <div className='--tab'>
                      <div
                        onClick={() => {
                          setActive("content");
                        }}
                        className={
                          active === "content" ? "--item active" : "--item"
                        }
                      >
                        Tổng quan
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
                          Kế hoạch du lịch
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
                        Địa điểm
                      </div>
                      <div
                        onClick={() => {
                          setActive("comments");
                        }}
                        className={
                          active === "comments" ? "--item active" : "--item"
                        }
                      >
                        Nhận xét
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
                        title={"Kế hoạch du lịch"}
                        content={data?.plan}
                      />
                    ) : (
                      false
                    )}
                    {active === "potision" ? (
                      <Map arr={[data]} height='400px' />
                    ) : (
                      false
                    )}
                    {active === "rooms" ? (
                      <RoomsList rooms={data?.rooms} />
                    ) : (
                      false
                    )}
                    <div className='--card'>
                      <div className='--icon'>
                        <img src={icon13.default.src} alt='' />
                      </div>
                      <div className='--txt'>
                        <div className='--title'>Điểm nổi bật</div>
                        {data?.highlights}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='--right cardbook'>
                  <div className='--schedule '>
                    <h3>Đặt chuyến đi của bạn</h3>
                    <div className='--tab d-flex '>
                      <div className='--item active'>Khách sạn</div>
                      <div className='--item'>Thuê xe</div>
                      <div className='--item'>Xe Buýt</div>
                    </div>
                    <div className='form'>
                      <div className='form-group'>
                        <label htmlFor=''>Điểm đến: </label>
                        <div className='--select'>
                          <div className='--icon'>
                            <img src={iconMap2.default.src} alt='' />
                          </div>
                          <select className='form-control' name='' id=''>
                            <option value=''>Hà Giang</option>
                          </select>
                          <i className='fa-sharp fa-solid fa-chevron-down'></i>
                        </div>
                      </div>
                      <div className='form-group'>
                        <label htmlFor=''>Check - in: </label>
                        <div className='--select'>
                          <div className='--icon'>
                            <img src={iconTime.default.src} alt='' />
                          </div>
                          <select className='form-control' name='' id=''>
                            <option value=''>10/11/2022</option>
                          </select>
                          <i className='fa-sharp fa-solid fa-chevron-down'></i>
                        </div>
                      </div>
                      <div className='form-group'>
                        <label htmlFor=''>With:</label>
                        <div className='--select'>
                          <div className='--icon'>
                            <img src={iconTime.default.src} alt='' />
                          </div>
                          <select className='form-control' name='' id=''>
                            <option value=''>1 đêm</option>
                          </select>
                          <i className='fa-sharp fa-solid fa-chevron-down'></i>
                        </div>
                      </div>
                      <div className='form-group'>
                        <label htmlFor=''>Điểm đến: </label>
                        <div className='--select'>
                          <div className='--icon'>
                            <img src={iconBooking.default.src} alt='' />
                          </div>
                          <select className='form-control' name='' id=''>
                            <option value=''>Booking.com</option>
                          </select>
                          <i className='fa-sharp fa-solid fa-chevron-down'></i>
                        </div>
                      </div>
                    </div>
                    <button className='button_1 button_hover1'>
                      <i className='fa-sharp fa-solid fa-magnifying-glass'></i>{" "}
                      Tìm kiếm
                    </button>
                  </div>
                  <div className='--map'>
                    <Map height='450px' arr={pointArr} />
                  </div>
                  <div className='--endow'>
                    <div className='--img'>
                      <img src={event?.image?.path} alt='' />
                    </div>
                    <Link href={event?.link ? event?.link : "/"}>
                      <div className='--txt'>
                        <span>{event?.subTitle}</span>
                        <h2>{event?.title}</h2>
                        <div className='--des'>{event?.description}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {router?.query?.commercial === "Restaurant" ? (
          <div className='detailservicediscover'>
            <div className='container-fluid'>
              <div className='--title'>
                <div className='subTitle text-center'>{slider?.subTitle}</div>
                <h1 className='Title text-center'>{slider?.tilte}</h1>
              </div>
              <div className='slider'>
                <div className='list_servicediscover'>
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
                            slidesToScroll: 1,
                          },
                        },
                      ],
                    }}
                    className='row'
                  >
                    {slider?.relations?.map((i) => (
                      <div key={uuid()} className='col-md-3'>
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
                  <div className='row'></div>
                </div>
                <div className='arrow_servicediscover'></div>
              </div>
            </div>
          </div>
        ) : (
          false
        )}
        {router?.query?.commercial === "Hotel" ? (
          <div className='detailservicediscover'>
            <div className='container-fluid'>
              <div className='--title'>
                <div className='subTitle text-center'>{slider?.subTitle}</div>
                <h1 className='Title text-center'>{slider?.title}</h1>
              </div>
              <div className='slider'>
                <div className='list_servicediscover'>
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
                            slidesToScroll: 1,
                          },
                        },
                      ],
                    }}
                    className='row'
                  >
                    {slider?.relations?.map((i) => (
                      <div key={uuid()} className='col-md-3'>
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
                  <div className='row'></div>
                </div>
                <div className='arrow_servicediscover'></div>
              </div>
            </div>
          </div>
        ) : (
          false
        )}
        {router?.query?.commercial === "Tour" ? (
          <div className='detailservicediscover1 detailservicediscover'>
            <div className='container-fluid'>
              <div className='--title'>
                <div className='subTitle text-center'>{slider?.subTitle}</div>
                <h1 className='Title text-center'>{slider?.title}</h1>
              </div>
              <div className='slider1'>
                <div className='list_servicediscover1 dicover_all'>
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
                            slidesToScroll: 1,
                          },
                        },
                      ],
                    }}
                    className='row'
                  >
                    {slider?.relations?.map((i) => (
                      <div key={uuid()} className='--wrapper'>
                        <TourCard
                          id={i.id}
                          img={i.featureImage?.path}
                          tilte={i.title}
                          plan={i.plan ? i.plan : "Chưa có kế hoạch du lịch"}
                          key={uuid()}
                          pointCategory={i.destinationsType?.title}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className='arrow_servicediscover1'></div>
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
