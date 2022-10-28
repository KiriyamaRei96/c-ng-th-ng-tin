import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import CommercialWrapper from "./_component/_Style/style";
import BreadCrumb from "../../components/BreadCrumb";
import Navbar from "./_component/Navbar";
import { Pagination, Select } from "antd";
import TourCard from "./_component/TourCard";
import { v4 as uuid } from "uuid";
import HotelCard from "./_component/HotelCard";
import RestaurantCard from "./_component/RestaurantCard";
import Slider from "react-slick";
export interface HotelProps {}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { commercial: "Hotel" } },
//       { params: { commercial: "Tour" } },
//       { params: { commercial: "Restaurant" } },
//     ],
//     fallback: false, // can also be true or 'blocking'
//   };
// }
// export async function getStaticProps(context) {
//   return {
//     // Passed to the page component as props
//     props: {},
//   };
// }
export default function Hotel(props: HotelProps) {
  const router = useRouter();
  console.log(router.asPath);
  const testArr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
  return (
    <CommercialWrapper>
      <div id='hotel'>
        <div className='Banner d-flex'>
          <img
            src='https://s3-alpha-sig.figma.com/img/d8ac/63e6/03b01bdd9c92c6ccc3fe3f2d56f90502?Expires=1667779200&Signature=Rnbo00VPHCwYeRxdp3xCXeVCoWRHtSpYT2m5mHgBmB5Olf3P-5cDGXuj0mvU~j9F-BhXq9~oxYiosMBFAFvGeq~iIG0Em625jWr-MmAoQRs-gL2Ek9ncnv9~pU~cfQOlTGC1Yc7TKNf5BRteRog8tLoryJFz6q~6JVkiMwpUt9PH4M3Gx~PfWTJO0A5iwVrvaVz9QPZ2fHMuXLMIqTuaEnjIuealoaSn42v3ipIbi15H~3xOs-08OC~BC5TIfvelayGWHpCxFMBOxzpBwCWH-4lY26cLSpNk7FARDxknFh2g7-d5OASdmsuLj9FRnsy-Ge6UtRNMqNd5cY8XlaXQDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            alt=''
          ></img>
          <div className='--Item'>
            {router.asPath.includes("Tour") ? <h1>Lữ Hành</h1> : false}
            {router.asPath.includes("Hotel") ? <h1>Lưu Trú</h1> : false}
            {router.asPath.includes("Restaurant") ? <h1>Ẩm Thực</h1> : false}

            <BreadCrumb />
          </div>
        </div>
        <div className='pageBody'>
          <Navbar />
          <div className='--content'>
            {router.asPath.includes("Restaurant") ? (
              <div className='hot-menu'>
                <h2>Món ăn nổi bật</h2>
                <div className='d-flex'>
                  <div>
                    <img
                      src='https://s3-alpha-sig.figma.com/img/fd5e/89a0/5d7f7dfbb4c51cca38c7ec1b7ccff056?Expires=1667779200&Signature=OULLwAAGKVAus5nivdwhH8LQtiu0RxmSP~pCDEEoS5E4gCF05OGNRrvarJAYYm01vaZLMd-IYSyVQylupitAKFXD1AIJ1PYWCjv3XBydJY2BFAcaX4jgiuEGOCbBZEcow6FC~Rn9RggPWdb2hvZPjTQQ12WeIeelSFy5wV4xtaeVQKLopkDxthC9-Fsk9eUnX66ILUdANP2wNXD--JVLjg062cq9GePG1wi2Ys4Wd9Tcy5A3Ka3ne~tHpo~Pn-Y3aK0LY-sQEQFwWmzcnNVLohUcRGv9BLtMnEqpI4CwaW-mUwClsHeBKaHEOe9l9zS0tmbI7BSBvR2ZtXLyLrD0jQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                      alt=''
                    />
                    <span>Món nhật</span>
                  </div>
                  <div>
                    <img
                      src='https://s3-alpha-sig.figma.com/img/fd5e/89a0/5d7f7dfbb4c51cca38c7ec1b7ccff056?Expires=1667779200&Signature=OULLwAAGKVAus5nivdwhH8LQtiu0RxmSP~pCDEEoS5E4gCF05OGNRrvarJAYYm01vaZLMd-IYSyVQylupitAKFXD1AIJ1PYWCjv3XBydJY2BFAcaX4jgiuEGOCbBZEcow6FC~Rn9RggPWdb2hvZPjTQQ12WeIeelSFy5wV4xtaeVQKLopkDxthC9-Fsk9eUnX66ILUdANP2wNXD--JVLjg062cq9GePG1wi2Ys4Wd9Tcy5A3Ka3ne~tHpo~Pn-Y3aK0LY-sQEQFwWmzcnNVLohUcRGv9BLtMnEqpI4CwaW-mUwClsHeBKaHEOe9l9zS0tmbI7BSBvR2ZtXLyLrD0jQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                      alt=''
                    />
                    <span>Món nhật</span>
                  </div>
                  <div>
                    <img
                      src='https://s3-alpha-sig.figma.com/img/fd5e/89a0/5d7f7dfbb4c51cca38c7ec1b7ccff056?Expires=1667779200&Signature=OULLwAAGKVAus5nivdwhH8LQtiu0RxmSP~pCDEEoS5E4gCF05OGNRrvarJAYYm01vaZLMd-IYSyVQylupitAKFXD1AIJ1PYWCjv3XBydJY2BFAcaX4jgiuEGOCbBZEcow6FC~Rn9RggPWdb2hvZPjTQQ12WeIeelSFy5wV4xtaeVQKLopkDxthC9-Fsk9eUnX66ILUdANP2wNXD--JVLjg062cq9GePG1wi2Ys4Wd9Tcy5A3Ka3ne~tHpo~Pn-Y3aK0LY-sQEQFwWmzcnNVLohUcRGv9BLtMnEqpI4CwaW-mUwClsHeBKaHEOe9l9zS0tmbI7BSBvR2ZtXLyLrD0jQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                      alt=''
                    />
                    <span>Món nhật</span>
                  </div>
                  <div>
                    <img
                      src='https://s3-alpha-sig.figma.com/img/fd5e/89a0/5d7f7dfbb4c51cca38c7ec1b7ccff056?Expires=1667779200&Signature=OULLwAAGKVAus5nivdwhH8LQtiu0RxmSP~pCDEEoS5E4gCF05OGNRrvarJAYYm01vaZLMd-IYSyVQylupitAKFXD1AIJ1PYWCjv3XBydJY2BFAcaX4jgiuEGOCbBZEcow6FC~Rn9RggPWdb2hvZPjTQQ12WeIeelSFy5wV4xtaeVQKLopkDxthC9-Fsk9eUnX66ILUdANP2wNXD--JVLjg062cq9GePG1wi2Ys4Wd9Tcy5A3Ka3ne~tHpo~Pn-Y3aK0LY-sQEQFwWmzcnNVLohUcRGv9BLtMnEqpI4CwaW-mUwClsHeBKaHEOe9l9zS0tmbI7BSBvR2ZtXLyLrD0jQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                      alt=''
                    />
                    <span>Món nhật</span>
                  </div>
                  <div>
                    <img
                      src='https://s3-alpha-sig.figma.com/img/fd5e/89a0/5d7f7dfbb4c51cca38c7ec1b7ccff056?Expires=1667779200&Signature=OULLwAAGKVAus5nivdwhH8LQtiu0RxmSP~pCDEEoS5E4gCF05OGNRrvarJAYYm01vaZLMd-IYSyVQylupitAKFXD1AIJ1PYWCjv3XBydJY2BFAcaX4jgiuEGOCbBZEcow6FC~Rn9RggPWdb2hvZPjTQQ12WeIeelSFy5wV4xtaeVQKLopkDxthC9-Fsk9eUnX66ILUdANP2wNXD--JVLjg062cq9GePG1wi2Ys4Wd9Tcy5A3Ka3ne~tHpo~Pn-Y3aK0LY-sQEQFwWmzcnNVLohUcRGv9BLtMnEqpI4CwaW-mUwClsHeBKaHEOe9l9zS0tmbI7BSBvR2ZtXLyLrD0jQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                      alt=''
                    />
                    <span>Món nhật</span>
                  </div>
                </div>
              </div>
            ) : (
              false
            )}
            <div className='search d-flex'>
              <div className='--input'>
                <input type='text' placeholder='nhập để tìm kiếm' />
                <i className='fa-solid fa-magnifying-glass'></i>
              </div>
              <div className='--select'>
                <span>Sắp xếp</span>
                <Select className='--item' defaultValue={"1"}>
                  <Select.Option value='1'>Gần nhất</Select.Option>
                </Select>
              </div>
            </div>

            {router.asPath.includes("Tour") ? <h2>Tour nổi bật</h2> : false}
            {router.asPath.includes("Restaurant") ? (
              <h2>Nhà hàng nổi bật</h2>
            ) : (
              false
            )}

            {router.asPath.includes("Tour") ? (
              <div className='--list --tour'>
                {testArr.map((i) => (
                  <TourCard key={uuid()} />
                ))}
              </div>
            ) : (
              false
            )}
            {router.asPath.includes("Hotel") ? (
              <div className='--list --Hotel'>
                {testArr.map((i) => (
                  <HotelCard key={uuid()} />
                ))}
              </div>
            ) : (
              false
            )}
            {router.asPath.includes("Restaurant") ? (
              <div className='--list --Restaurant'>
                {testArr.map((i) => (
                  <RestaurantCard key={uuid()} />
                ))}
              </div>
            ) : (
              false
            )}

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
            {router.asPath.includes("Tour") ? (
              <div className='tour-sliderWarpper'>
                <h3>Món ăn nổi bật</h3>
                <Slider
                  {...{
                    className: "TourSlider",
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
                  }}
                >
                  <div className='--warpper'>
                    <TourCard key={uuid()} />
                  </div>
                  <div className='--warpper'>
                    <TourCard key={uuid()} />
                  </div>
                  <div className='--warpper'>
                    <TourCard key={uuid()} />
                  </div>
                  <div className='--warpper'>
                    <TourCard key={uuid()} />
                  </div>
                  <div className='--warpper'>
                    <TourCard key={uuid()} />
                  </div>
                  <div className='--warpper'>
                    <TourCard key={uuid()} />
                  </div>
                </Slider>
              </div>
            ) : (
              false
            )}
            {router.asPath.includes("Hotel") ? (
              <div className='Hotel-sliderWarpper'>
                <h3>Các điểm đến ưa chuộng</h3>
                <Slider
                  {...{
                    className: "HotelSlider",
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: false,
                  }}
                >
                  <div className='--warpper'>
                    <div className='placeCard d-flex'>
                      <img
                        src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                        alt=''
                      />
                      <h4>Bạch Mộc Lương Tử</h4>
                      <span>
                        Đỉnh Bạch Mộc Lương Tử thuộc địa phận xã Sin Suối Hồ,
                        huyện Phong Thổ. Với độ cao 3.045m so với mực nước biển,
                        Bạch Mộc Lương Tử là một trong năm ngọn núi cao nhất
                      </span>
                      <Link href='/Discover/1'>Tìm hiểu thêm</Link>
                    </div>
                  </div>{" "}
                  <div className='--warpper'>
                    <div className='placeCard d-flex'>
                      <img
                        src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                        alt=''
                      />
                      <h4>Bạch Mộc Lương Tử</h4>
                      <span>
                        Đỉnh Bạch Mộc Lương Tử thuộc địa phận xã Sin Suối Hồ,
                        huyện Phong Thổ. Với độ cao 3.045m so với mực nước biển,
                        Bạch Mộc Lương Tử là một trong năm ngọn núi cao nhất
                      </span>
                      <Link href='/Discover/1'>Tìm hiểu thêm</Link>
                    </div>
                  </div>{" "}
                  <div className='--warpper'>
                    <div className='placeCard d-flex'>
                      <img
                        src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                        alt=''
                      />
                      <h4>Bạch Mộc Lương Tử</h4>
                      <span>
                        Đỉnh Bạch Mộc Lương Tử thuộc địa phận xã Sin Suối Hồ,
                        huyện Phong Thổ. Với độ cao 3.045m so với mực nước biển,
                        Bạch Mộc Lương Tử là một trong năm ngọn núi cao nhất
                      </span>
                      <Link href='/Discover/1'>Tìm hiểu thêm</Link>
                    </div>
                  </div>{" "}
                  <div className='--warpper'>
                    <div className='placeCard d-flex'>
                      <img
                        src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                        alt=''
                      />
                      <h4>Bạch Mộc Lương Tử</h4>
                      <span>
                        Đỉnh Bạch Mộc Lương Tử thuộc địa phận xã Sin Suối Hồ,
                        huyện Phong Thổ. Với độ cao 3.045m so với mực nước biển,
                        Bạch Mộc Lương Tử là một trong năm ngọn núi cao nhất
                      </span>
                      <Link href='/Discover/1'>Tìm hiểu thêm</Link>
                    </div>
                  </div>{" "}
                  <div className='--warpper'>
                    <div className='placeCard d-flex'>
                      <img
                        src='https://s3-alpha-sig.figma.com/img/3ea9/7bc7/7bea6167027c880272921aea3b476602?Expires=1667779200&Signature=Kw~u8tpZjZH~EaPL2xmG003mmJ3bCkCMJQcCJ86Rer48khtBQl7-N1zRBwTZRtB44QD-IT2pvm1NvzGrK29rigfGlyukWH2OGkQqxPfztMooHPxEfCjNjEBC67yJf4~G4firV2FGPTBYo1DkcpQafrN6VtP5QjTy-MIgo9c1-DYEeTT4lNSwjmBZ8IOqvoawMthD0HYmgNbCfoI7Z5Wdp8Ux8FPAlT2tTh-HexRZVAoiQf3WFN7Yis9ecKNH4Y1NIyBfbP6ITisI89lRF-3TIAcCiyqfPwQy~CCV1-YO1ekD9lKlh9aBw0o8JjEQrh6FFyRv1JZTnHt~lKfgo5qyeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                        alt=''
                      />
                      <h4>Bạch Mộc Lương Tử</h4>
                      <span>
                        Đỉnh Bạch Mộc Lương Tử thuộc địa phận xã Sin Suối Hồ,
                        huyện Phong Thổ. Với độ cao 3.045m so với mực nước biển,
                        Bạch Mộc Lương Tử là một trong năm ngọn núi cao nhất
                      </span>
                      <Link href='/Discover/1'>Tìm hiểu thêm</Link>
                    </div>
                  </div>
                </Slider>
              </div>
            ) : (
              false
            )}
          </div>
        </div>
      </div>
    </CommercialWrapper>
  );
}
