import Image from "next/image";
import * as React from "react";
import Slider from "react-slick";
import DiscoverWarpper from "../_component/Styled/style";

export interface DiscoverDetailProps {}

const DiscoverDetail = (props: DiscoverDetailProps) => {
  return (
    <DiscoverWarpper>
      <div id='detaildiscover'>
        <div className='detaildiscoverContent detailAll'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-9'>
                <div className='--left'>
                  <div className='subTitle'>Du lịch</div>
                  <h3 className='--titlepost'>
                    Cầu Kính Rồng Mây “Kỳ Quan Tiên Cảnh Của Đất Trời Lai Châu”
                  </h3>
                  <div className='--interactive d-flex align-items-center justify-content-between'>
                    <div className='--evaluate d-flex align-items-center'>
                      <div className='--star d-flex align-items-center'>
                        <span>4.75</span>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                      </div>
                      <span>84 đánh giá</span>
                    </div>
                    <div className='--sharecmt d-flex align-items-center'>
                      <a href=''>
                        <i className='fa-solid fa-share-nodes'></i>Chia sẻ
                      </a>
                      <a href=''>
                        <i className='fa-solid fa-heart'></i>Yêu thích
                      </a>
                      <button className="button_hover2 button_2">
                        Viết đánh giá
                      </button>
                    </div>
                  </div>
                  <div className="list_img">
                    <div className="--img">
                      <Image src={require("./_asset/banner.png")} alt="" />
                    </div>
                    <div className="--img">
                      <Image src={require("./_asset/banner.png")} alt="" />
                    </div>
                    <div className="--img">
                      <Image src={require("./_asset/banner.png")} alt="" />
                    </div>
                    <div className="--img">
                      <Image src={require("./_asset/banner.png")} alt="" />
                    </div>
                    <div className="--img">
                      <Image src={require("./_asset/banner.png")} alt="" />
                      <a href="">26+</a>
                    </div>
                  </div>
                  <div className='list_content'>
                    <div className='--tab'>
                      <div className='--item active'>Tổng quan</div>
                      <div className='--item'>Kế hoạch du lịch</div>
                      <div className='--item'>Địa điểm</div>
                      <div className='--item'>Nhận xét</div>
                    </div>
                    <div className='--content'>
                      <h3 className='--title mb-4'>Cầu Kính Rồng Mây</h3>
                      <article className='active'>
                        Cầu kính Rồng Mây được xem là công trình cầu kính cao
                        nhất Việt Nam tính đến thời điểm hiện tại. Công trình
                        này tọa lạc trên đỉnh đèo Ô Quy Hồ thuộc địa phận huyện
                        Tam Đường của tỉnh Lai Châu. Nơi đây còn được mệnh danh
                        là Cổng trời trên đỉnh Ô Quy Hồ.
                        <br />
                        Cầu kính Rồng Mây được xem là công trình cầu kính cao
                        nhất Việt Nam tính đến thời điểm hiện tại. Công trình
                        này tọa lạc trên đỉnh đèo Ô Quy Hồ thuộc địa phận huyện
                        Tam Đường của tỉnh Lai Châu. Nơi đây còn được mệnh danh
                        là Cổng trời trên đỉnh Ô Quy Hồ.
                        <br /> Cầu kính Rồng Mây được xem là công trình cầu kính
                        cao nhất Việt Nam tính đến thời điểm hiện tại. Công
                        trình này tọa lạc trên đỉnh đèo Ô Quy Hồ thuộc địa phận
                        huyện Tam Đường của tỉnh Lai Châu. Nơi đây còn được mệnh
                        danh là Cổng trời trên đỉnh Ô Quy Hồ.
                      </article>
                      <a className='button_2 button_hover2' href=''>
                        xem thêm
                      </a>
                    </div>
                    <div className='--card'>
                      <div className='--icon'>
                        <Image src={require("./_asset/icon-13.svg")} alt='' />
                      </div>
                      <div className='--txt'>
                        <div className='--title'>Điểm nổi bật</div>
                        <ul>
                          <li>
                            <div className='--check'>
                              <Image
                                src={require("./_asset/icon-check.svg")}
                                alt=''
                              />
                            </div>
                            <span>Cáp treo di chuyển</span>
                          </li>
                          <li>
                            <div className='--check'>
                              <Image
                                src={require("./_asset/icon-check.svg")}
                                alt=''
                              />
                            </div>
                            <span>Cáp treo di chuyển</span>
                          </li>
                          <li>
                            <div className='--check'>
                              <Image
                                src={require("./_asset/icon-check.svg")}
                                alt=''
                              />
                            </div>
                            <span>Cáp treo di chuyển</span>
                          </li>
                          <li>
                            <div className='--check'>
                              <Image
                                src={require("./_asset/icon-check.svg")}
                                alt=''
                              />
                            </div>
                            <span>Cáp treo di chuyển</span>
                          </li>

                          <li>
                            <div className='--check'>
                              <Image
                                src={require("./_asset/icon-check.svg")}
                                alt=''
                              />
                            </div>
                            <span>Cáp treo di chuyển</span>
                          </li>
                          <li>
                            <div className='--check'>
                              <Image
                                src={require("./_asset/icon-check.svg")}
                                alt=''
                              />
                            </div>
                            <span>Cáp treo di chuyển</span>
                          </li>
                        </ul>
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
                            <Image
                              src={require("./_asset/icon-map2.svg")}
                              alt=''
                            />
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
                            <Image
                              src={require("./_asset/icon-time.svg")}
                              alt=''
                            />
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
                            <Image
                              src={require("./_asset/icon-time.svg")}
                              alt=''
                            />
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
                            <Image
                              src={require("./_asset/icon-booking.svg")}
                              alt=''
                            />
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
                    <iframe
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8466441825976!2d102.23802461470257!3d2.211509298388063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1f1ccd4f2e3ed%3A0x4a2e89fc42f51eaf!2sBan%20Sin%20Ho%20Trading!5e0!3m2!1svi!2s!4v1666683463879!5m2!1svi!2s'
                      width='600'
                      height='450'
                      style={{ border: "0" }}
                      // allowfullscreen=""
                      loading='lazy'
                      // referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className='--endow'>
                    <div className='--img'>
                      <Image src={require("./_asset/image-1.png")} alt='' />
                    </div>
                    <div className='--txt'>
                      <span>Kỳ nghỉ vui vẻ</span>
                      <h2>Đặt phòng ngay</h2>
                      <div className='--des'>
                        Giảm giá 15% cho tất cả các đặt phòng
                      </div>
                    </div>
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
                          variableWidth:true,
                          slidesToScroll: 1,
                        },
                      },
                    ],
                  }}
                  className='row'
                >
                  <div>
                    <div className="--warrper">
                      <div className="--item img_hover">
                        <a href="">
                          <div className="--img">
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
                    <div className="--warrper">
                      <div className="--item img_hover">
                        <a href="">
                          <div className="--img">
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
                    <div className="--warrper">
                      <div className="--item img_hover">
                        <a href="">
                          <div className="--img">
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
                    <div className="--warrper">
                      <div className="--item img_hover">
                        <a href="">
                          <div className="--img">
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
                    <div className="--warrper">
                      <div className="--item img_hover">
                        <a href="">
                          <div className="--img">
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
