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
  iconMap2,
  iconTime,
} from "../../../components/img";
import { useAppDispatch, useAppSelector } from "../../../ReduxStore/hooks";
import pointSelector from "../../../ReduxStore/pointSlice/slice";
import Link from "next/link";

export async function getServerSideProps(context) {
  let other;

  const id = context?.query?.discoverDetail.replace("detail~", "").toString();
  const data =
    (
      await callApi
        .get(`/v2/point_detail/${id}?locale=vi`)
        .then((res) => res.data)
        .catch((err) => console.error(err))
    ).data || null;
  const otherData =
    (
      await callApi
        .get(`/v2/page/deatilDiscover?locale=vi`)
        .then((res) => res.data)
        .catch((err) => console.error(err))
    ).data || null;
  console.log(otherData);
  return {
    props: {
      data,
      otherData,
    },
  };
}
const DiscoverDetail = ({ data, otherData }) => {
  const [image, setImage] = useState<string | undefined>(
    data?.featureImage.path
  );
  let allIMG = [];
  const [active, setActive] = useState("content");
  const pointArr = useAppSelector(pointSelector).pointArr;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (pointArr.length === 0) {
      dispatch({ type: "GET_POINT" });
    }
  }, [pointArr]);
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
    <DiscoverWarpper>
      <div id='detaildiscover'>
        <div className='detaildiscoverContent detailAll'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-9'>
                <div className='--left'>
                  <div className='subTitle'>Du lịch</div>
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
        <div className='detaildiscoverLocation'>
          <div className='container-fluid'>
            <div className='subTitle text-center'>KHám phá Lai Châu</div>
            <h1 className='Title text-center'>Có thể bạn sẽ thích</h1>
            <div className='slider_listLocation'>
              <div className=' list_discover'>
                <Slider
                  {...{
                    dots: true,
                    infinite: true,
                    speed: 800,
                    slidesToShow: 3,
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
                          variableWidth: true,
                          slidesToScroll: 1,
                        },
                      },
                    ],
                  }}
                  className='row'
                >
                  <div>
                    <div className='--warrper'>
                      <div className='--item img_hover'>
                        <a href=''>
                          <div className='--img'>
                            <Image
                              src={require("./_asset/banner.png")}
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <div className='--type'>Đèo - Núi</div>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <div className='--location '>
                              <Image
                                src={require("./_asset/icon-map1.svg")}
                                alt=''
                              />
                              <span>Huyện Tam Đường</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='--warrper'>
                      <div className='--item img_hover'>
                        <a href=''>
                          <div className='--img'>
                            <Image
                              src={require("./_asset/banner.png")}
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <div className='--type'>Đèo - Núi</div>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <div className='--location '>
                              <Image
                                src={require("./_asset/icon-map1.svg")}
                                alt=''
                              />
                              <span>Huyện Tam Đường</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>{" "}
                  <div>
                    <div className='--warrper'>
                      <div className='--item img_hover'>
                        <a href=''>
                          <div className='--img'>
                            <Image
                              src={require("./_asset/banner.png")}
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <div className='--type'>Đèo - Núi</div>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <div className='--location '>
                              <Image
                                src={require("./_asset/icon-map1.svg")}
                                alt=''
                              />
                              <span>Huyện Tam Đường</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>{" "}
                  <div>
                    <div className='--warrper'>
                      <div className='--item img_hover'>
                        <a href=''>
                          <div className='--img'>
                            <Image
                              src={require("./_asset/banner.png")}
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <div className='--type'>Đèo - Núi</div>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <div className='--location '>
                              <Image
                                src={require("./_asset/icon-map1.svg")}
                                alt=''
                              />
                              <span>Huyện Tam Đường</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>{" "}
                  <div>
                    <div className='--warrper'>
                      <div className='--item img_hover'>
                        <a href=''>
                          <div className='--img'>
                            <Image
                              src={require("./_asset/banner.png")}
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <div className='--type'>Đèo - Núi</div>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <div className='--location '>
                              <Image
                                src={require("./_asset/icon-map1.svg")}
                                alt=''
                              />
                              <span>Huyện Tam Đường</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </Slider>
                {/* <div className="row">
                  <div className="--warrper">
                    <div className="--item img_hover">
                      <a href="">
                        <div className="--img">
                          <Image src={require("./_asset/banner.png")} alt="" />
                        </div>
                        <div className="--txt">
                          <div className="--type">Đèo - Núi</div>
                          <h4>Đèo Ô Quy Hồ</h4>
                          <div className="--location ">
                            <Image
                              src={require("./_asset/icon-map1.svg")}
                              alt=""
                            />
                            <span>Huyện Tam Đường</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="--item img_hover">
                      <a href="">
                        <div className="--img">
                          <Image src={require("./_asset/banner.png")} alt="" />
                        </div>
                        <div className="--txt">
                          <div className="--type">Đèo - Núi</div>
                          <h4>Đèo Ô Quy Hồ</h4>
                          <div className="--location ">
                            <Image
                              src={require("./_asset/icon-map1.svg")}
                              alt=""
                            />
                            <span>Huyện Tam Đường</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="--item img_hover">
                      <a href="">
                        <div className="--img">
                          <Image src={require("./_asset/banner.png")} alt="" />
                        </div>
                        <div className="--txt">
                          <div className="--type">Đèo - Núi</div>
                          <h4>Đèo Ô Quy Hồ</h4>
                          <div className="--location ">
                            <Image
                              src={require("./_asset/icon-map1.svg")}
                              alt=""
                            />
                            <span>Huyện Tam Đường</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="--item img_hover">
                      <a href="">
                        <div className="--img">
                          <Image src={require("./_asset/banner.png")} alt="" />
                        </div>
                        <div className="--txt">
                          <div className="--type">Đèo - Núi</div>
                          <h4>Đèo Ô Quy Hồ</h4>
                          <div className="--location ">
                            <Image
                              src={require("./_asset/icon-map1.svg")}
                              alt=""
                            />
                            <span>Huyện Tam Đường</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className='arrow_detaildiscoverLocation'></div>
            </div>
          </div>
        </div>
      </div>
    </DiscoverWarpper>
  );
};
export default DiscoverDetail;
