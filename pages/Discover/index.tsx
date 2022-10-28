import { Pagination } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import DiscoverWarpper from "./_component/Styled/style";

export interface DiscoverProps {}

const Discover = (props: DiscoverProps) => {
  const [select, setSelect] = useState("net");
  return (
    <DiscoverWarpper>
      <div id='discover'>
        <div className='discoverBanner'>
          <div className='--background'>
            <img
              src='https://s3-alpha-sig.figma.com/img/b2d5/8670/37e43631946185e7b89c4bf47404977a?Expires=1667779200&Signature=KrdvG7JuU74QJPLIbhR5VO3xskM9l9pF4lcrW63r3wX7HnUW~OiM3MitWkKLgY3R1bAlDBMwxm3p8ax5OmN44u0Qy14lQc~38WOfdzfO8K132vdLM56BB-yguaSsoGYYs~IcTY3-iYheA9DDyev1fwlZ9cOi9vChgb7h5PFthH-NtlzaOctc3FFk8FpN9Oh5I~SP94sPWEOP1aAqz5dF7ER5t37eqLcsvclj30uuSePC-UG0Uj8zEJAB-JptEX~RKrcBmYuqo0IqkJULiwUf1ccST73K3CPGCviRvqAjtBNKi7159rpnZvCmrXCFTQT0LYSUeTnbOcnE1VnmgEEWqA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              alt=''
            />
          </div>
          <div className='container-fluid'>
            <div className='--content'>
              <div className='--top'>
                <div className='--title'>
                  <span>ĐIỂM ĐẾN TIÊU BIỂU</span>
                  <h1 className='Title mt-3'>Địa Điểm Thăm Quan Du Lịch</h1>
                </div>
              </div>
              <div className='--bot d-flex justify-content-between align-items-end'>
                <a href=''>
                  <i className='fa-sharp fa-solid fa-arrow-down-long'></i>Xem
                  tất cả
                </a>
                <div className='--txt'>
                  <article>
                    Là vùng lãnh thổ với nhiều dãy núi và cao nguyên, phía Đông
                    khu vực này là dãy núi Hoàng Liên Sơn, phía Tây là dãy núi
                    Sông Mã có độ cao 1.800m. Giữa hai dãy núi đồ sộ trên là
                    phần đất thuộc vùng núi thấp tương đối rộng lớn và lưu vực
                    sông Đà
                  </article>
                  <div className='--page d-flex justify-content-between'>
                    <div className='--number d-flex align-items-center'>
                      <span>01</span>
                      <div className='line'></div>
                      <span>08</span>
                    </div>
                    <div className='--arrow'>
                      <i className='fa-solid prevarrow fa-arrow-left-long'></i>
                      <i className='fa-solid nextarrow fa-arrow-right-long'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='discoverBlock'>
          <div className='container-fluid'>
            <div className='--title'>
              <div className='subTitle'>KHám phá Lai Châu</div>
              <h1 className='Title'>Khám phá điểm Tham quan nổi bật</h1>
            </div>
            <div className='slider_discoverBlock'>
              <div className='list_discoverBlock list_discover'>
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
                  <Link href='/Discover/1'>
                    <div className='--wrapper'>
                      <div className='--item img_hover'>
                        <a href=''>
                          <div className='--img'>
                            <img
                              src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <div className='--type'>Đèo - Núi</div>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <div className='--location '>
                              <img src='../img/icon-map1.svg' alt='' />
                              <span>Huyện Tam Đường</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </Link>
                  <Link href='/Discover/1'>
                    <div className='--wrapper'>
                      <div className='--item img_hover'>
                        <a href=''>
                          <div className='--img'>
                            <img
                              src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <div className='--type'>Đèo - Núi</div>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <div className='--location '>
                              <img src='../img/icon-map1.svg' alt='' />
                              <span>Huyện Tam Đường</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </Link>{" "}
                  <Link href='/Discover/1'>
                    <div className='--wrapper'>
                      <div className='--item img_hover'>
                        <a href=''>
                          <div className='--img'>
                            <img
                              src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <div className='--type'>Đèo - Núi</div>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <div className='--location '>
                              <img src='../img/icon-map1.svg' alt='' />
                              <span>Huyện Tam Đường</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </Link>{" "}
                  <Link href='/Discover/1'>
                    <div className='--wrapper'>
                      <div className='--item img_hover'>
                        <a href=''>
                          <div className='--img'>
                            <img
                              src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <div className='--type'>Đèo - Núi</div>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <div className='--location '>
                              <img src='../img/icon-map1.svg' alt='' />
                              <span>Huyện Tam Đường</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </Link>{" "}
                  <Link href='/Discover/1'>
                    <div className='--wrapper'>
                      <div className='--item img_hover'>
                        <a href=''>
                          <div className='--img'>
                            <img
                              src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <div className='--type'>Đèo - Núi</div>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <div className='--location '>
                              <img src='../img/icon-map1.svg' alt='' />
                              <span>Huyện Tam Đường</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </Link>{" "}
                  <Link href='/Discover/1'>
                    <div className='--wrapper'>
                      <div className='--item img_hover'>
                        <a href=''>
                          <div className='--img'>
                            <img
                              src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <div className='--type'>Đèo - Núi</div>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <div className='--location '>
                              <img src='../img/icon-map1.svg' alt='' />
                              <span>Huyện Tam Đường</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </Link>
                </Slider>
              </div>
              <div className='arrow_discoverBlock'></div>
            </div>
          </div>
        </div>
        <div className='discoverBlock1'>
          <div className='row '>
            <div className='col-md-5'>
              <div className='--left'>
                <img
                  src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                  alt=''
                />
              </div>
            </div>
            <div className='col-md-7'>
              <div className='--right'>
                <div className='--title'>
                  <div className='subTitle'>KHám phá Lai Châu</div>
                  <h1 className='Title'>
                    Khám phá địa điểm vui
                    <br /> chơi nổi bật
                  </h1>
                </div>
                <div className='list_discoverBlock1 list_discover'>
                  <Slider
                    {...{
                      dots: true,
                      infinite: true,
                      speed: 800,
                      slidesToShow: 3,
                      slidesToScroll: 1,
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
                    className='row'
                  >
                    <Link href='/Discover/1'>
                      <div className='--wrapper'>
                        <div className='--item img_hover1'>
                          <a href=''>
                            <div className='--img'>
                              <img
                                src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                                alt=''
                              />
                            </div>
                            <div className='--txt'>
                              <div className='--type'>Đèo - Núi</div>
                              <h4>Đèo Ô Quy Hồ</h4>
                              <div className='--location '>
                                <img src='../img/icon-map1.svg' alt='' />
                                <span>Huyện Tam Đường</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </Link>{" "}
                    <Link href='/Discover/1'>
                      <div className='--wrapper'>
                        <div className='--item img_hover1'>
                          <a href=''>
                            <div className='--img'>
                              <img
                                src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                                alt=''
                              />
                            </div>
                            <div className='--txt'>
                              <div className='--type'>Đèo - Núi</div>
                              <h4>Đèo Ô Quy Hồ</h4>
                              <div className='--location '>
                                <img src='../img/icon-map1.svg' alt='' />
                                <span>Huyện Tam Đường</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </Link>{" "}
                    <Link href='/Discover/1'>
                      <div className='--wrapper'>
                        <div className='--item img_hover1'>
                          <a href=''>
                            <div className='--img'>
                              <img
                                src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                                alt=''
                              />
                            </div>
                            <div className='--txt'>
                              <div className='--type'>Đèo - Núi</div>
                              <h4>Đèo Ô Quy Hồ</h4>
                              <div className='--location '>
                                <img src='../img/icon-map1.svg' alt='' />
                                <span>Huyện Tam Đường</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </Link>{" "}
                    <Link href='/Discover/1'>
                      <div className='--wrapper'>
                        <div className='--item img_hover1'>
                          <a href=''>
                            <div className='--img'>
                              <img
                                src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                                alt=''
                              />
                            </div>
                            <div className='--txt'>
                              <div className='--type'>Đèo - Núi</div>
                              <h4>Đèo Ô Quy Hồ</h4>
                              <div className='--location '>
                                <img src='../img/icon-map1.svg' alt='' />
                                <span>Huyện Tam Đường</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </Link>{" "}
                    <Link href='/Discover/1'>
                      <div className='--wrapper'>
                        <div className='--item img_hover1'>
                          <a href=''>
                            <div className='--img'>
                              <img
                                src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                                alt=''
                              />
                            </div>
                            <div className='--txt'>
                              <div className='--type'>Đèo - Núi</div>
                              <h4>Đèo Ô Quy Hồ</h4>
                              <div className='--location '>
                                <img src='../img/icon-map1.svg' alt='' />
                                <span>Huyện Tam Đường</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </Link>{" "}
                    <Link href='/Discover/1'>
                      <div className='--wrapper'>
                        <div className='--item img_hover1'>
                          <a href=''>
                            <div className='--img'>
                              <img
                                src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                                alt=''
                              />
                            </div>
                            <div className='--txt'>
                              <div className='--type'>Đèo - Núi</div>
                              <h4>Đèo Ô Quy Hồ</h4>
                              <div className='--location '>
                                <img src='../img/icon-map1.svg' alt='' />
                                <span>Huyện Tam Đường</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </Link>{" "}
                    <Link href='/Discover/1'>
                      <div className='--wrapper'>
                        <div className='--item img_hover1'>
                          <a href=''>
                            <div className='--img'>
                              <img
                                src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                                alt=''
                              />
                            </div>
                            <div className='--txt'>
                              <div className='--type'>Đèo - Núi</div>
                              <h4>Đèo Ô Quy Hồ</h4>
                              <div className='--location '>
                                <img src='../img/icon-map1.svg' alt='' />
                                <span>Huyện Tam Đường</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </Link>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='discoverSearch'>
          <div className='container-fluid'>
            <h1 className='Title'>Khám phá địa điểm</h1>
            <div className='filter'>
              <div className='--top d-flex justify-content-between'>
                <div className='search'>
                  <input type='text' placeholder='Nhập từ khóa tìm kiếm' />
                  <i className='fa-solid fa-magnifying-glass'></i>
                </div>
                <div className='--tabtop d-flex'>
                  <button
                    onClick={(e) => setSelect("net")}
                    className={select === "net" ? "active" : ""}
                  >
                    <i className='fa-solid fa-table-cells'></i>
                    Lưới
                  </button>
                  <button
                    onClick={(e) => setSelect("list")}
                    className={select === "list" ? "active" : ""}
                  >
                    <i className='fa-solid fa-bars'></i>
                    List
                  </button>
                  <button
                    onClick={(e) => setSelect("map")}
                    className={select === "map" ? "active" : ""}
                  >
                    <i className='fa-solid fa-map'></i>
                    Bản đồ
                  </button>
                </div>
              </div>
              <div className='--bot'>
                <div className='--filter d-flex align-items-center'>
                  <span>
                    <i className='fa-solid fa-filter'></i>
                    Bộ lọc
                  </span>
                  <div className='--select d-flex'>
                    <div className='--item'>
                      <select name='' id=''>
                        <option value=''>Chọn huyện</option>
                      </select>
                    </div>
                    <div className='--item'>
                      <select name='' id=''>
                        <option value=''>Loại địa điểm </option>
                      </select>
                    </div>
                    <div className='--item'>
                      <select name='' id=''>
                        <option value=''>Lượt view</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='--tabbot'>
                  <button className='active'>
                    Tất Cả<span>(15)</span>
                  </button>
                  <button>
                    Thiên nhiên <span>(15)</span>
                  </button>
                  <button>
                    Di tích lịch sử <span>(15)</span>
                  </button>
                  <button>
                    Địa điểm du lịch <span>(15)</span>
                  </button>
                </div>
              </div>
            </div>

            {select === "net" ? (
              <div className='--tab1'>
                <div className='list_discoverSearch list_discover'>
                  <div className='row'>
                    <Link href='/Discover/1'>
                      <div className='col-md-4'>
                        <div className='--item img_hover1'>
                          <a href=''>
                            <>
                              <div className='--img'>
                                <img
                                  src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                                  alt=''
                                />
                              </div>
                              <div className='--txt'>
                                <div className='--type'>Đèo - Núi</div>
                                <h4>Đèo Ô Quy Hồ</h4>
                                <div className='--location '>
                                  <img src='../img/icon-map1.svg' alt='' />
                                  <span>Huyện Tam Đường</span>
                                </div>
                              </div>
                            </>
                          </a>
                        </div>
                      </div>
                    </Link>
                    <Link href='/Discover/1'>
                      <div className='col-md-4'>
                        <div className='--item img_hover1'>
                          <a href=''>
                            <>
                              <div className='--img'>
                                <img
                                  src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                                  alt=''
                                />
                              </div>
                              <div className='--txt'>
                                <div className='--type'>Đèo - Núi</div>
                                <h4>Đèo Ô Quy Hồ</h4>
                                <div className='--location '>
                                  <img src='../img/icon-map1.svg' alt='' />
                                  <span>Huyện Tam Đường</span>
                                </div>
                              </div>
                            </>
                          </a>
                        </div>
                      </div>
                    </Link>
                    <Link href='/Discover/1'>
                      <div className='col-md-4'>
                        <div className='--item img_hover1'>
                          <a href=''>
                            <>
                              <div className='--img'>
                                <img
                                  src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                                  alt=''
                                />
                              </div>
                              <div className='--txt'>
                                <div className='--type'>Đèo - Núi</div>
                                <h4>Đèo Ô Quy Hồ</h4>
                                <div className='--location '>
                                  <img src='../img/icon-map1.svg' alt='' />
                                  <span>Huyện Tam Đường</span>
                                </div>
                              </div>
                            </>
                          </a>
                        </div>
                      </div>
                    </Link>
                    <Link href='/Discover/1'>
                      <div className='col-md-4'>
                        <div className='--item img_hover1'>
                          <a href=''>
                            <>
                              <div className='--img'>
                                <img
                                  src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                                  alt=''
                                />
                              </div>
                              <div className='--txt'>
                                <div className='--type'>Đèo - Núi</div>
                                <h4>Đèo Ô Quy Hồ</h4>
                                <div className='--location '>
                                  <img src='../img/icon-map1.svg' alt='' />
                                  <span>Huyện Tam Đường</span>
                                </div>
                              </div>
                            </>
                          </a>
                        </div>
                      </div>
                    </Link>
                    <Link href='/Discover/1'>
                      <div className='col-md-4'>
                        <div className='--item img_hover1'>
                          <a href=''>
                            <>
                              <div className='--img'>
                                <img
                                  src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                                  alt=''
                                />
                              </div>
                              <div className='--txt'>
                                <div className='--type'>Đèo - Núi</div>
                                <h4>Đèo Ô Quy Hồ</h4>
                                <div className='--location '>
                                  <img src='../img/icon-map1.svg' alt='' />
                                  <span>Huyện Tam Đường</span>
                                </div>
                              </div>
                            </>
                          </a>
                        </div>
                      </div>
                    </Link>
                    <Link href='/Discover/1'>
                      <div className='col-md-4'>
                        <div className='--item img_hover1'>
                          <a href=''>
                            <>
                              <div className='--img'>
                                <img
                                  src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                                  alt=''
                                />
                              </div>
                              <div className='--txt'>
                                <div className='--type'>Đèo - Núi</div>
                                <h4>Đèo Ô Quy Hồ</h4>
                                <div className='--location '>
                                  <img src='../img/icon-map1.svg' alt='' />
                                  <span>Huyện Tam Đường</span>
                                </div>
                              </div>
                            </>
                          </a>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <Pagination
                  className='--pagination'
                  itemRender={(_, type, originalElement) => {
                    if (type === "prev") {
                      return <i className='fa-solid fa-angles-left'></i>;
                    }
                    if (type === "next") {
                      return <i className='fa-solid fa-angles-right'></i>;
                    }
                    return originalElement;
                  }}
                  total={48}
                  pageSize={6}
                />
              </div>
            ) : (
              false
            )}
            {select === "list" ? (
              <div className='--tab2'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='list_discoverSearch2'>
                      <Link href='/Discover/1'>
                        <div className='--item d-flex align-items-center'>
                          <div className='--img'>
                            <img
                              src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <article>
                              Tây Bắc biết đến như một chặng đường mang nhiều
                              cảm xúc, với đặc điểm là núi non hiểm trở thì
                              những con đường đèo chính
                            </article>
                          </div>
                        </div>
                      </Link>
                      <Link href='/Discover/1'>
                        <div className='--item d-flex align-items-center'>
                          <div className='--img'>
                            <img
                              src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <article>
                              Tây Bắc biết đến như một chặng đường mang nhiều
                              cảm xúc, với đặc điểm là núi non hiểm trở thì
                              những con đường đèo chính
                            </article>
                          </div>
                        </div>
                      </Link>{" "}
                      <Link href='/Discover/1'>
                        <div className='--item d-flex align-items-center'>
                          <div className='--img'>
                            <img
                              src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <article>
                              Tây Bắc biết đến như một chặng đường mang nhiều
                              cảm xúc, với đặc điểm là núi non hiểm trở thì
                              những con đường đèo chính
                            </article>
                          </div>
                        </div>
                      </Link>{" "}
                      <Link href='/Discover/1'>
                        <div className='--item d-flex align-items-center'>
                          <div className='--img'>
                            <img
                              src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <article>
                              Tây Bắc biết đến như một chặng đường mang nhiều
                              cảm xúc, với đặc điểm là núi non hiểm trở thì
                              những con đường đèo chính
                            </article>
                          </div>
                        </div>
                      </Link>{" "}
                      <Link href='/Discover/1'>
                        <div className='--item d-flex align-items-center'>
                          <div className='--img'>
                            <img
                              src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <article>
                              Tây Bắc biết đến như một chặng đường mang nhiều
                              cảm xúc, với đặc điểm là núi non hiểm trở thì
                              những con đường đèo chính
                            </article>
                          </div>
                        </div>
                      </Link>{" "}
                      <Link href='/Discover/1'>
                        <div className='--item d-flex align-items-center'>
                          <div className='--img'>
                            <img
                              src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <article>
                              Tây Bắc biết đến như một chặng đường mang nhiều
                              cảm xúc, với đặc điểm là núi non hiểm trở thì
                              những con đường đèo chính
                            </article>
                          </div>
                        </div>
                      </Link>{" "}
                      <Link href='/Discover/1'>
                        <div className='--item d-flex align-items-center'>
                          <div className='--img'>
                            <img
                              src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <article>
                              Tây Bắc biết đến như một chặng đường mang nhiều
                              cảm xúc, với đặc điểm là núi non hiểm trở thì
                              những con đường đèo chính
                            </article>
                          </div>
                        </div>
                      </Link>{" "}
                      <Link href='/Discover/1'>
                        <div className='--item d-flex align-items-center'>
                          <div className='--img'>
                            <img
                              src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <article>
                              Tây Bắc biết đến như một chặng đường mang nhiều
                              cảm xúc, với đặc điểm là núi non hiểm trở thì
                              những con đường đèo chính
                            </article>
                          </div>
                        </div>
                      </Link>{" "}
                      <Link href='/Discover/1'>
                        <div className='--item d-flex align-items-center'>
                          <div className='--img'>
                            <img
                              src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                              alt=''
                            />
                          </div>
                          <div className='--txt'>
                            <h4>Đèo Ô Quy Hồ</h4>
                            <article>
                              Tây Bắc biết đến như một chặng đường mang nhiều
                              cảm xúc, với đặc điểm là núi non hiểm trở thì
                              những con đường đèo chính
                            </article>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='--map'>
                      <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8466441825976!2d102.23802461470257!3d2.211509298388063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1f1ccd4f2e3ed%3A0x4a2e89fc42f51eaf!2sBan%20Sin%20Ho%20Trading!5e0!3m2!1svi!2s!4v1666683463879!5m2!1svi!2s'
                        width='600'
                        height='450'
                        style={{ border: "0" }}
                        // allowFullScreen=""
                        loading='lazy'
                        // referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <a href='' className='--viewall button_2 button_hover2'>
                  Xem tất cả điểm tham quan
                </a>
              </div>
            ) : (
              false
            )}
            {select === "map" ? (
              <div className='--tab3'>
                <div className='--map'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8466441825976!2d102.23802461470257!3d2.211509298388063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1f1ccd4f2e3ed%3A0x4a2e89fc42f51eaf!2sBan%20Sin%20Ho%20Trading!5e0!3m2!1svi!2s!4v1666683463879!5m2!1svi!2s'
                    width='600'
                    height='450'
                    style={{ border: "0" }}
                    // allowFullScreen=""
                    loading='lazy'
                    // referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            ) : (
              false
            )}
          </div>
        </div>
        <div className='discoverVideo'>
          <div className='--img'>
            <img
              src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              alt=''
            />
          </div>
          <div className='--txt d-flex flex-column align-items-center'>
            <h1 className='Title'>Lai Châu núi rừng Tây Bắc</h1>
            <a href='' className='play'>
              <i className='fa-solid fa-play'></i>
            </a>
          </div>
        </div>
      </div>
    </DiscoverWarpper>
  );
};
export default Discover;
