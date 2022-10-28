import React, { useLayoutEffect, useRef, useState } from "react";
import HomeWrapper from "../components/Home/styled";
import Slider from "react-slick";
import { v4 as uuid } from "uuid";
import banner from "./_asset/banner.png";
import iconMap from "./_asset/icon-map.svg";
import iconSign from "./_asset/icon-sign.svg";
import img36 from "./_asset/image 36.png";
import icon1 from "./_asset/icon-1.svg";
import icon2 from "./_asset/icon-2.svg";
import icon3 from "./_asset/icon-3.svg";
import icon4 from "./_asset/icon-4.svg";
import icon5 from "./_asset/icon-5.svg";
import icon6 from "./_asset/icon-6.svg";
import iconTime from "./_asset/icon-time.svg";
import iconMap2 from "./_asset/icon-map2.svg";
import partent from "./_asset/partent.png";
import Link from "next/link";
import HomeDiscover1 from "../components/Home/HomeDiscover1";
import Image from "next/image";
export default function Home() {
  const sliderRef: any = useRef();
  const [current, setCurrent] = useState(0);
  return (
    <HomeWrapper>
      <div id='home'>
        <div className='homeBanner'>
          <div className='--background'>
            <img src={banner.src} alt='' />
          </div>
          <div className='--txt'>
            <div className='--name'>Lai Châu</div>
            <div className='--des'>Điểm đến thiên đường</div>
            <ul>
              <li>30 Điểm khám phá</li>
              <li>1000+ Checked in</li>
            </ul>
            <Link href='/News&Event/News/1'>
              <a>
                Tìm hiểu thêm
                <i className='fa-sharp fa-solid fa-arrow-right'></i>
              </a>
            </Link>
          </div>
          <div className='container-fluid'>
            <div className='filter'>
              <div className='form-group'>
                <div className='--icon'>
                  <img src={iconMap.src} alt='' />
                </div>
                <div className='--txtform'>
                  <label htmlFor=''>Điểm đến</label>
                  <input type='text' placeholder='Ví dụ: Ô Quy Hồ' />
                </div>
              </div>
              <div className='form-group'>
                <div className='--icon'>
                  <img src={iconSign.src} alt='' />
                </div>
                <div className='--txtform'>
                  <label htmlFor=''>Thời gian</label>
                  <select name='' id=''>
                    <option value=''>Chọn thời gian</option>
                    <option value=''>abc</option>
                    <option value=''>xyz</option>
                  </select>
                </div>
              </div>
              <div className='form-group'>
                <div className='--icon'>
                  <img src={iconMap.src} alt='' />
                </div>
                <div className='--txtform'>
                  <label htmlFor=''>Loại hình</label>
                  <select name='' id=''>
                    <option value=''>Chọn loại hình</option>
                    <option value=''>abc</option>
                    <option value=''>xyz</option>
                  </select>
                </div>
              </div>
              <div className='form-group'>
                <button className='button_1 button_hover1'>Khám phá</button>
              </div>
            </div>
          </div>
          <div className='social'>
            <a className='arrow_hover' href=''>
              <i className='fa-brands fa-facebook-f'></i>
            </a>
            <a className='arrow_hover' href=''>
              <i className='fa-solid fa-envelope'></i>
            </a>
            <a className='arrow_hover' href=''>
              <i className='fa-solid fa-phone'></i>
            </a>
          </div>
        </div>
        <div className='homeIntro'>
          <div className='container-fluid'>
            <div className='--content'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='--left'>
                    <img src={img36.src} alt='' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='--right'>
                    <div className='subTitle'>KHám phá Lai Châu</div>
                    <h1 className='Title'>Sự hùng vĩ của núi rừng Tây Bắc</h1>
                    <div className='--des'>
                      Lai Châu là tỉnh biên giới phía Tây Bắc của Tổ quốc, cách
                      Thủ đô Hà Nội 385 km về phía Đông Nam. Nơi đây vừa hoang
                      sơ, đầy thử thách lại có hẳn một thiên đường chạm tới mây
                      trời cực ấn tượng.{" "}
                    </div>
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
                    <Link href='/Discover'>
                      <a className='button_2 button_hover2' href=''>
                        Xem tất cả{" "}
                        <i className='fa-sharp ms-2 fa-solid fa-arrow-right-long'></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='list_homeIntro d-flex flex-wrap'>
              <div className='--item d-flex flex-column align-items-center'>
                <div className='--icon'>
                  <img src={icon1.src} alt='' />
                </div>
                <div className='--txt'>
                  <h4>Thiên nhiên hùng vĩ</h4>
                  <article>
                    Acclaimed purveyors of some of the worlds best cruises, we
                    specialize in axhilarating expeditions to remote corners of
                    the earth.
                  </article>
                </div>
              </div>
              <div className='--item d-flex flex-column align-items-center'>
                <div className='--icon'>
                  <img src={icon2.src} alt='' />
                </div>
                <div className='--txt'>
                  <h4>Trải nghiệm đáng nhớ</h4>
                  <article>
                    Acclaimed purveyors of some of the worlds best cruises, we
                    specialize in axhilarating expeditions to remote corners of
                    the earth.
                  </article>
                </div>
              </div>
              <div className='--item d-flex flex-column align-items-center'>
                <div className='--icon'>
                  <img src={icon3.src} alt='' />
                </div>
                <div className='--txt'>
                  <h4>Khách sạn, nhà nghỉ</h4>
                  <article>
                    Acclaimed purveyors of some of the worlds best cruises, we
                    specialize in axhilarating expeditions to remote corners of
                    the earth.
                  </article>
                </div>
              </div>
              <div className='--item d-flex flex-column align-items-center'>
                <div className='--icon'>
                  <img src={icon4.src} alt='' />
                </div>
                <div className='--txt'>
                  <h4>Món ăn đặc trưng</h4>
                  <article>
                    Acclaimed purveyors of some of the worlds best cruises, we
                    specialize in axhilarating expeditions to remote corners of
                    the earth.
                  </article>
                </div>
              </div>
              <div className='--item d-flex flex-column align-items-center'>
                <div className='--icon'>
                  <img src={icon5.src} alt='' />
                </div>
                <div className='--txt'>
                  <h4>Núi rừng, hang động</h4>
                  <article>
                    Acclaimed purveyors of some of the worlds best cruises, we
                    specialize in axhilarating expeditions to remote corners of
                    the earth.
                  </article>
                </div>
              </div>
              <div className='--item d-flex flex-column align-items-center'>
                <div className='--icon'>
                  <img src={icon6.src} alt='' />
                </div>
                <div className='--txt'>
                  <h4>Cắm trại </h4>
                  <article>
                    Acclaimed purveyors of some of the worlds best cruises, we
                    specialize in axhilarating expeditions to remote corners of
                    the earth.
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='homeDiscover'>
          <div className='container-fluid'>
            <div className='subTitle text-center'>KHám phá Lai Châu</div>
            <h1 className='Title text-center'>Khám phá điểm đến nổi bật</h1>
          </div>
          <div className='container-fluid pe-0'>
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
              className='list_homeDiscover'
            >
              <div>
                <div className='--item'>
                  <div className='--img'>
                    <img src={banner.src} alt='' />
                  </div>
                  <div className='--txt'>
                    <div className='--subtitle'>Đèo - Núi</div>
                    <h4 className='--name'>Đèo Ô Quy Hồ</h4>
                    <div className='--bot d-flex justify-content-between align-items-end'>
                      <div className='--des'>
                        <div className='--location d-flex align-items-center'>
                          <div className='--icon me-2'>
                            <Image
                              src={require("./_asset/icon-map1.svg")}
                              alt=''
                            />
                          </div>
                          Huyện Tam Đường, Tỉnh Lai Châu
                        </div>
                        <article>
                          Đây là một trong những cung đường đèo hiểm trở bậc
                          nhất của núi rừng Tây Bắc. Giữ kỷ lục về độ dài lên
                          tới gần 50 km, dài hơn đèo Pha Đin (32 km, nằm ở ranh
                          giới Sơn La và Điện Biên) hay đèo Khau Phạ (40 km,
                          thuộc Yên Bái)
                        </article>
                      </div>
                      <Link href='/Discover/1' key={uuid()}>
                        <a className='--viewdetail button_hover1' href=''>
                          <i className='fa-solid fa-arrow-right'></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='--item'>
                  <div className='--img'>
                    <img src={banner.src} alt='' />
                  </div>
                  <div className='--txt'>
                    <div className='--subtitle'>Đèo - Núi</div>
                    <h4 className='--name'>Đèo Ô Quy Hồ</h4>
                    <div className='--bot d-flex justify-content-between align-items-end'>
                      <div className='--des'>
                        <div className='--location d-flex align-items-center'>
                          <div className='--icon me-2'>
                            <Image
                              src={require("./_asset/icon-map1.svg")}
                              alt=''
                            />
                          </div>
                          Huyện Tam Đường, Tỉnh Lai Châu
                        </div>
                        <article>
                          Đây là một trong những cung đường đèo hiểm trở bậc
                          nhất của núi rừng Tây Bắc. Giữ kỷ lục về độ dài lên
                          tới gần 50 km, dài hơn đèo Pha Đin (32 km, nằm ở ranh
                          giới Sơn La và Điện Biên) hay đèo Khau Phạ (40 km,
                          thuộc Yên Bái)
                        </article>
                      </div>
                      <Link href='/Discover/1' key={uuid()}>
                        <a className='--viewdetail button_hover1' href=''>
                          <i className='fa-solid fa-arrow-right'></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='--item'>
                  <div className='--img'>
                    <img src={banner.src} alt='' />
                  </div>
                  <div className='--txt'>
                    <div className='--subtitle'>Đèo - Núi</div>
                    <h4 className='--name'>Đèo Ô Quy Hồ</h4>
                    <div className='--bot d-flex justify-content-between align-items-end'>
                      <div className='--des'>
                        <div className='--location d-flex align-items-center'>
                          <div className='--icon me-2'>
                            <Image
                              src={require("./_asset/icon-map1.svg")}
                              alt=''
                            />
                          </div>
                          Huyện Tam Đường, Tỉnh Lai Châu
                        </div>
                        <article>
                          Đây là một trong những cung đường đèo hiểm trở bậc
                          nhất của núi rừng Tây Bắc. Giữ kỷ lục về độ dài lên
                          tới gần 50 km, dài hơn đèo Pha Đin (32 km, nằm ở ranh
                          giới Sơn La và Điện Biên) hay đèo Khau Phạ (40 km,
                          thuộc Yên Bái)
                        </article>
                      </div>
                      <Link href='/Discover/1' key={uuid()}>
                        <a className='--viewdetail button_hover1' href=''>
                          <i className='fa-solid fa-arrow-right'></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='--item'>
                  <div className='--img'>
                    <img src={banner.src} alt='' />
                  </div>
                  <div className='--txt'>
                    <div className='--subtitle'>Đèo - Núi</div>
                    <h4 className='--name'>Đèo Ô Quy Hồ</h4>
                    <div className='--bot d-flex justify-content-between align-items-end'>
                      <div className='--des'>
                        <div className='--location d-flex align-items-center'>
                          <div className='--icon me-2'>
                            <Image
                              src={require("./_asset/icon-map1.svg")}
                              alt=''
                            />
                          </div>
                          Huyện Tam Đường, Tỉnh Lai Châu
                        </div>
                        <article>
                          Đây là một trong những cung đường đèo hiểm trở bậc
                          nhất của núi rừng Tây Bắc. Giữ kỷ lục về độ dài lên
                          tới gần 50 km, dài hơn đèo Pha Đin (32 km, nằm ở ranh
                          giới Sơn La và Điện Biên) hay đèo Khau Phạ (40 km,
                          thuộc Yên Bái)
                        </article>
                      </div>
                      <Link href='/Discover/1' key={uuid()}>
                        <a className='--viewdetail button_hover1' href=''>
                          <i className='fa-solid fa-arrow-right'></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='--item'>
                  <div className='--img'>
                    <img src={banner.src} alt='' />
                  </div>
                  <div className='--txt'>
                    <div className='--subtitle'>Đèo - Núi</div>
                    <h4 className='--name'>Đèo Ô Quy Hồ</h4>
                    <div className='--bot d-flex justify-content-between align-items-end'>
                      <div className='--des'>
                        <div className='--location d-flex align-items-center'>
                          <div className='--icon me-2'>
                            <Image
                              src={require("./_asset/icon-map1.svg")}
                              alt=''
                            />
                          </div>
                          Huyện Tam Đường, Tỉnh Lai Châu
                        </div>
                        <article>
                          Đây là một trong những cung đường đèo hiểm trở bậc
                          nhất của núi rừng Tây Bắc. Giữ kỷ lục về độ dài lên
                          tới gần 50 km, dài hơn đèo Pha Đin (32 km, nằm ở ranh
                          giới Sơn La và Điện Biên) hay đèo Khau Phạ (40 km,
                          thuộc Yên Bái)
                        </article>
                      </div>
                      <Link href='/Discover/1' key={uuid()}>
                        <a className='--viewdetail button_hover1' href=''>
                          <i className='fa-solid fa-arrow-right'></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <a href='' className='--viewall button_2 button_hover2'>
            Xem tất cả <i className='fa-solid ms-2 fa-arrow-right-long'></i>
          </a>
        </div>
        <div className='homeMap'>
          <div className='subTitle text-center'>Du lịch Lai Châu</div>
          <h1 className='Title text-center'>Khám phá Tour360</h1>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59025.742842815074!2d103.4046501286144!3d22.387250681156605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36d2a1867bf6f19d%3A0x34cc461c8d0001b8!2zVHAuIExhaSBDaMOidSwgTGFpIENow6J1LCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1666531776427!5m2!1svi!2s'
            width='600'
            height='450'
            style={{ border: "0" }}
            loading='lazy'
          ></iframe>
        </div>
        <div className='homeNews'>
          <div className='subTitle text-center'>Điểm nhấn nổi bật</div>
          <h1 className='Title text-center'>Tin tức & sự kiện</h1>
          <div className='--content d-flex'>
            <div className='--left'>
              <div className='--img'>
                <img src={banner.src} alt='' />
              </div>
              <div className='--txt'>
                <div className='--cate'>Sự kiện nổi bật</div>
                <div className='--subtitle'>Hội thảo phát triển</div>
                <a href=''>
                  <h1>
                    <p>Du lịch cộng đồng</p>
                    <p>Gắn với Metaverse</p>
                  </h1>
                </a>
                <div className='--time d-flex align-items-center'>
                  <div className='--icon'>
                    <img src='./_asset/icon-time.svg' alt='' />
                  </div>
                  Từ ngày 18 - 20/10/2022
                </div>
                <div className='--location d-flex align-items-center'>
                  <div className='--icon'>
                    <Image src={require("./_asset/icon-map1.svg")} alt='' />
                  </div>
                  Bản Lao Chải, xã Khun Há, huyện Tam Đường, tỉnh Lai Châu
                </div>
                <Link href='/News&Event'>
                  <a className='--viewdetail'>
                    Tìm hiểu thêm
                    <i className='fa-solid ms-2 fa-arrow-right-long'></i>
                  </a>
                </Link>
              </div>
            </div>
            <div className='--right'>
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
                  fade: true,
                  beforeChange: (c, n) => {
                    setCurrent(n);
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
                className='list_homeNews'
              >
                <div key={uuid()} className='--item'>
                  <Link href='/News&Event/News/1'>
                    <div className='--itemNews d-flex'>
                      <div className='--img img_hover'>
                        <a href=''>
                          <img src={banner.src} alt='' />
                        </a>
                      </div>
                      <div className='--txt d-flex flex-column justify-content-between'>
                        <div className='--top'>
                          <div className='--cate'>Tin Địa Phương</div>
                          <a href=''>
                            <h6>
                              Cầu kính Rồng Mây “Kỳ quan tiên cảnh của đất trời
                              Lai Châu”
                            </h6>
                          </a>
                        </div>
                        <div className='--bot d-flex'>
                          <div className='--time d-flex align-items-center'>
                            <div className='--icon'>
                              <img src='./_asset/icon-time.svg' alt='' />
                            </div>
                            <span>01/09/2022</span>
                          </div>
                          <div className='--view d-flex align-items-center'>
                            <img src='./_asset/icon-eye.svg' alt='' /> 268
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href='/News&Event/News/1'>
                    <div className='--itemNews d-flex'>
                      <div className='--img img_hover'>
                        <a href=''>
                          <img src={banner.src} alt='' />
                        </a>
                      </div>
                      <div className='--txt d-flex flex-column justify-content-between'>
                        <div className='--top'>
                          <div className='--cate'>Tin Địa Phương</div>
                          <a href=''>
                            <h6>
                              Cầu kính Rồng Mây “Kỳ quan tiên cảnh của đất trời
                              Lai Châu”
                            </h6>
                          </a>
                        </div>
                        <div className='--bot d-flex'>
                          <div className='--time d-flex align-items-center'>
                            <div className='--icon'>
                              <img src='./_asset/icon-time.svg' alt='' />
                            </div>
                            <span>01/09/2022</span>
                          </div>
                          <div className='--view d-flex align-items-center'>
                            <img src='./_asset/icon-eye.svg' alt='' /> 268
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href='/News&Event/News/1'>
                    <div className='--itemNews d-flex'>
                      <div className='--img img_hover'>
                        <a href=''>
                          <img src={banner.src} alt='' />
                        </a>
                      </div>
                      <div className='--txt d-flex flex-column justify-content-between'>
                        <div className='--top'>
                          <div className='--cate'>Tin Địa Phương</div>
                          <a href=''>
                            <h6>
                              Cầu kính Rồng Mây “Kỳ quan tiên cảnh của đất trời
                              Lai Châu”
                            </h6>
                          </a>
                        </div>
                        <div className='--bot d-flex'>
                          <div className='--time d-flex align-items-center'>
                            <div className='--icon'>
                              <img src='./_asset/icon-time.svg' alt='' />
                            </div>
                            <span>01/09/2022</span>
                          </div>
                          <div className='--view d-flex align-items-center'>
                            <img src='./_asset/icon-eye.svg' alt='' /> 268
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div key={uuid()} className='--item'>
                  <Link href='/News&Event/News/1'>
                    <div className='--itemNews d-flex'>
                      <div className='--img img_hover'>
                        <a href=''>
                          <img src={banner.src} alt='' />
                        </a>
                      </div>
                      <div className='--txt d-flex flex-column justify-content-between'>
                        <div className='--top'>
                          <div className='--cate'>Tin Địa Phương</div>
                          <a href=''>
                            <h6>
                              Cầu kính Rồng Mây “Kỳ quan tiên cảnh của đất trời
                              Lai Châu”
                            </h6>
                          </a>
                        </div>
                        <div className='--bot d-flex'>
                          <div className='--time d-flex align-items-center'>
                            <div className='--icon'>
                              <img src='./_asset/icon-time.svg' alt='' />
                            </div>
                            <span>01/09/2022</span>
                          </div>
                          <div className='--view d-flex align-items-center'>
                            <img src='./_asset/icon-eye.svg' alt='' /> 268
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href='/News&Event/News/1'>
                    <div className='--itemNews d-flex'>
                      <div className='--img img_hover'>
                        <a href=''>
                          <img src={banner.src} alt='' />
                        </a>
                      </div>
                      <div className='--txt d-flex flex-column justify-content-between'>
                        <div className='--top'>
                          <div className='--cate'>Tin Địa Phương</div>
                          <a href=''>
                            <h6>
                              Cầu kính Rồng Mây “Kỳ quan tiên cảnh của đất trời
                              Lai Châu”
                            </h6>
                          </a>
                        </div>
                        <div className='--bot d-flex'>
                          <div className='--time d-flex align-items-center'>
                            <div className='--icon'>
                              <img src='./_asset/icon-time.svg' alt='' />
                            </div>
                            <span>01/09/2022</span>
                          </div>
                          <div className='--view d-flex align-items-center'>
                            <img src='./_asset/icon-eye.svg' alt='' /> 268
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href='/News&Event/News/1'>
                    <div className='--itemNews d-flex'>
                      <div className='--img img_hover'>
                        <a href=''>
                          <img src={banner.src} alt='' />
                        </a>
                      </div>
                      <div className='--txt d-flex flex-column justify-content-between'>
                        <div className='--top'>
                          <div className='--cate'>Tin Địa Phương</div>
                          <a href=''>
                            <h6>
                              Cầu kính Rồng Mây “Kỳ quan tiên cảnh của đất trời
                              Lai Châu”
                            </h6>
                          </a>
                        </div>
                        <div className='--bot d-flex'>
                          <div className='--time d-flex align-items-center'>
                            <div className='--icon'>
                              <img src='./_asset/icon-time.svg' alt='' />
                            </div>
                            <span>01/09/2022</span>
                          </div>
                          <div className='--view d-flex align-items-center'>
                            <img src='./_asset/icon-eye.svg' alt='' /> 268
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>{" "}
                <div key={uuid()} className='--item'>
                  <Link href='/News&Event/News/1'>
                    <div className='--itemNews d-flex'>
                      <div className='--img img_hover'>
                        <a href=''>
                          <img src={banner.src} alt='' />
                        </a>
                      </div>
                      <div className='--txt d-flex flex-column justify-content-between'>
                        <div className='--top'>
                          <div className='--cate'>Tin Địa Phương</div>
                          <a href=''>
                            <h6>
                              Cầu kính Rồng Mây “Kỳ quan tiên cảnh của đất trời
                              Lai Châu”
                            </h6>
                          </a>
                        </div>
                        <div className='--bot d-flex'>
                          <div className='--time d-flex align-items-center'>
                            <div className='--icon'>
                              <img src='./_asset/icon-time.svg' alt='' />
                            </div>
                            <span>01/09/2022</span>
                          </div>
                          <div className='--view d-flex align-items-center'>
                            <img src='./_asset/icon-eye.svg' alt='' /> 268
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href='/News&Event/News/1'>
                    <div className='--itemNews d-flex'>
                      <div className='--img img_hover'>
                        <a href=''>
                          <img src={banner.src} alt='' />
                        </a>
                      </div>
                      <div className='--txt d-flex flex-column justify-content-between'>
                        <div className='--top'>
                          <div className='--cate'>Tin Địa Phương</div>
                          <a href=''>
                            <h6>
                              Cầu kính Rồng Mây “Kỳ quan tiên cảnh của đất trời
                              Lai Châu”
                            </h6>
                          </a>
                        </div>
                        <div className='--bot d-flex'>
                          <div className='--time d-flex align-items-center'>
                            <div className='--icon'>
                              <img src='./_asset/icon-time.svg' alt='' />
                            </div>
                            <span>01/09/2022</span>
                          </div>
                          <div className='--view d-flex align-items-center'>
                            <img src='./_asset/icon-eye.svg' alt='' /> 268
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href='/News&Event/News/1'>
                    <div className='--itemNews d-flex'>
                      <div className='--img img_hover'>
                        <a href=''>
                          <img src={banner.src} alt='' />
                        </a>
                      </div>
                      <div className='--txt d-flex flex-column justify-content-between'>
                        <div className='--top'>
                          <div className='--cate'>Tin Địa Phương</div>
                          <a href=''>
                            <h6>
                              Cầu kính Rồng Mây “Kỳ quan tiên cảnh của đất trời
                              Lai Châu”
                            </h6>
                          </a>
                        </div>
                        <div className='--bot d-flex'>
                          <div className='--time d-flex align-items-center'>
                            <div className='--icon'>
                              <img src='./_asset/icon-time.svg' alt='' />
                            </div>
                            <span>01/09/2022</span>
                          </div>
                          <div className='--view d-flex align-items-center'>
                            <img src='./_asset/icon-eye.svg' alt='' /> 268
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </Slider>
              <div className='--botnews'>
                <ul className='slick-dots'>
                  <li className={current === 0 ? "slick-active" : ""}>
                    <button
                      onClick={() => {
                        if (sliderRef?.current) {
                          sliderRef?.current?.slickGoTo(0);
                        }
                      }}
                    >
                      1
                    </button>
                  </li>
                  <li className={current === 1 ? "slick-active" : ""}>
                    <button
                      onClick={() => {
                        if (sliderRef?.current) {
                          sliderRef?.current?.slickGoTo(1);
                        }
                      }}
                    >
                      2
                    </button>
                  </li>
                  <li className={current === 2 ? "slick-active" : ""}>
                    <button
                      onClick={() => {
                        if (sliderRef?.current) {
                          sliderRef?.current?.slickGoTo(2);
                        }
                      }}
                    >
                      3
                    </button>
                  </li>
                </ul>
                <a href='' className='--viewall'>
                  Xem tất cả{" "}
                  <i className='fa-solid ms-2 fa-arrow-right-long'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='homeDiscover1'>
          <div className='container-fluid'>
            <div className='subTitle text-center'>KHám phá Lai Châu</div>
            <h1 className='Title text-center'>
              Lịch trình thú vị không thể bỏ lỡ
            </h1>
            <div className='slider_homeDiscover1'>
              <div className='list_homeDiscover1'>
                <HomeDiscover1
                  banner={banner}
                  iconTime={iconTime}
                  iconMap2={iconMap2}
                ></HomeDiscover1>
              </div>
              <div className='arrow_homeDiscover1'></div>
            </div>
          </div>
          <div className='partent'>
            <img src={partent.src} alt='' />
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
}
