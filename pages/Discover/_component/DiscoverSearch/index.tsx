import { Pagination } from "antd";
import Link from "next/link";
import React, { useState } from "react";

export interface IdiscoverSearchProps {}

const DiscoverSearch = (props: IdiscoverSearchProps) => {
  const [select, setSelect] = useState<string>("net");

  return (
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
                              <img src='' alt='' />
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
                              <img src='' alt='' />
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
                              <img src='' alt='' />
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
                              <img src='' alt='' />
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
                              <img src='' alt='' />
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
                              <img src='' alt='' />
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
                          Tây Bắc biết đến như một chặng đường mang nhiều cảm
                          xúc, với đặc điểm là núi non hiểm trở thì những con
                          đường đèo chính
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
                          Tây Bắc biết đến như một chặng đường mang nhiều cảm
                          xúc, với đặc điểm là núi non hiểm trở thì những con
                          đường đèo chính
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
                          Tây Bắc biết đến như một chặng đường mang nhiều cảm
                          xúc, với đặc điểm là núi non hiểm trở thì những con
                          đường đèo chính
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
                          Tây Bắc biết đến như một chặng đường mang nhiều cảm
                          xúc, với đặc điểm là núi non hiểm trở thì những con
                          đường đèo chính
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
                          Tây Bắc biết đến như một chặng đường mang nhiều cảm
                          xúc, với đặc điểm là núi non hiểm trở thì những con
                          đường đèo chính
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
                          Tây Bắc biết đến như một chặng đường mang nhiều cảm
                          xúc, với đặc điểm là núi non hiểm trở thì những con
                          đường đèo chính
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
                          Tây Bắc biết đến như một chặng đường mang nhiều cảm
                          xúc, với đặc điểm là núi non hiểm trở thì những con
                          đường đèo chính
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
                          Tây Bắc biết đến như một chặng đường mang nhiều cảm
                          xúc, với đặc điểm là núi non hiểm trở thì những con
                          đường đèo chính
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
                          Tây Bắc biết đến như một chặng đường mang nhiều cảm
                          xúc, với đặc điểm là núi non hiểm trở thì những con
                          đường đèo chính
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
  );
};
export default DiscoverSearch;
