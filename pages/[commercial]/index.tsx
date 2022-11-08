import React, { memo, useEffect } from "react";
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
import callApi from "../../Api/Axios";
import { useAppDispatch, useAppSelector } from "../../ReduxStore/hooks";
import commercialSelector, {
  clearFilter,
  setType,
} from "../../ReduxStore/commercial/slice";
import List from "./_component/List/List";

export async function getServerSideProps(context) {
  let type;
  switch (context.query.commercial) {
    case "Restaurant":
      type = "Restaurant";
      break;
    case "Tour":
      type = "Tour";

      break;
    case "Hotel":
      type = "Hotel";
      break;
  }
  const page = await callApi
    .get(`/v2/page/${type}?locale=vi`)
    .then((res) => res.data)
    .catch((err) => console.error(err));

  const banner =
    (await page?.data?.snippets?.find(
      (item) => item["snippet_name"] === "banner"
    )) || null;
  const hotMenu =
    (await page?.data?.snippets?.find(
      (item) => item["snippet_name"] === "hotMenu"
    )) || null;
  const navBar =
    (await page?.data?.snippets?.find(
      (item) => item["snippet_name"] === "navBar"
    )) || null;

  return {
    props: {
      banner,
      hotMenu,
    },
  };
}
export interface CommercialProps {
  banner: any;
  hotMenu?: any;
}
const Commercial = ({ banner, hotMenu }: CommercialProps) => {
  const router = useRouter();
  const searchArr = useAppSelector(commercialSelector).searchArr;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({ type: "GET_TYPES" });
  }, []);
  useEffect(() => {
    const listType =
      router.query.commercial === "Restaurant"
        ? "restaurant_list"
        : router.query.commercial === "Tour"
        ? "tour_list"
        : "hotel_list";
    dispatch(setType(listType));
    dispatch({
      type: "GET_SEARCH_COMMERCIAL",
      payload: {
        page: 1,
        limit: 9,
      },
    });
    dispatch(clearFilter());
  }, [router.query.commercial]);

  return (
    <CommercialWrapper>
      <div id='hotel'>
        <div className='Banner d-flex'>
          <img src={banner?.image?.path} alt=''></img>
          <div className='--Item'>
            <h1>{banner?.title}</h1>

            <BreadCrumb />
          </div>
        </div>
        <div className='pageBody'>
          <Navbar />
          <div className='--content'>
            {hotMenu ? (
              <div className='hot-menu'>
                <h2>{hotMenu.title}</h2>
                <div className='d-flex'>
                  {hotMenu?.articles?.map((item) => (
                    <div key={uuid()}>
                      <img src={item?.image?.path} alt='' />
                      <span>{item?.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              false
            )}
            <List />

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
};
export default memo(Commercial);
