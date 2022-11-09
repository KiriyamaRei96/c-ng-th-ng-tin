import React, { useEffect, useState } from "react";

import logo1 from "../../pages/_asset/logo-partner1.png";

import logo2 from "../../pages/_asset/logo-partner2.png";

import logo3 from "../../pages/_asset/logo-partner3.png";
import globe from "../../pages/_asset/globe.svg";
import chart from "../../pages/_asset/chart-simple.svg";
import { v4 as uuid } from "uuid";
import Link from "next/link";
import callApi from "../../Api/Axios";
import Slider from "react-slick";
export async function getServerSideProps(context) {
  const res = await callApi
    .get("/v2/page/Footer?locale=vi")
    .then((res) => res.data)
    .catch((err) => console.error(err));

  const iconSlider =
    (await res.data?.snippets?.find(
      (item) => item["snippet_name"] === "iconSlider"
    )) || null;

  return {
    props: {
      iconSlider,
    },
  };
}

const Footer = ({ iconSlider }) => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    (async () => {
      const data = await callApi
        .get("/v2/page/Footer?locale=vi")
        .then((res) => res.data)
        .catch((err) => console.error(err));
      setData(data.data);
    })();
  }, []);
  const slider = data?.snippets?.find(
    (item) => item["snippet_name"] === "iconSlider"
  );

  return (
    <footer>
      <div className='footer_Logo'>
        <div className='container-fluid'>
          <Slider
            className='list_logo'
            {...{
              arrows: false,
              dots: false,
              infinite: true,
              autoplay: true,
              speed: 500,

              slidesToShow: 4,
            }}
          >
            {slider?.articles.map((item) => (
              <div key={uuid()}>
                <div className='--img'>
                  <img src={item.image?.path} alt='' />
                </div>
              </div>
            ))}
          </Slider>
          <div className='list_logo d-flex'></div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='footer d-flex justify-content-between'>
          <div className='footer_info'>
            <h1 className='--title'>Cổng thông tin Du lịch Lai Châu</h1>
            <ul>
              <li>
                <i className='fa-solid fa-location-dot'></i>
                <div className='--txt'>
                  SỞ VĂN HÓA THỂ THAO VÀ DU LỊCH TỈNH LAI CHÂU
                </div>
              </li>
              <li>
                <i className='fa-solid fa-house-chimney'></i>
                <div className='--txt'>
                  Phòng Quản lý Du lịch - Tầng 6, Nhà D, Khu Trung tâm hành
                  chính chính trị tỉnh Lai Châu, P. Tân Phong, Tp.Lai Châu, tỉnh
                  Lai Châu
                </div>
              </li>
              <li>
                <i className='fa-solid fa-phone-volume'></i>
                <div className='--txt'>
                  <a href='tel:0213.3877727'>0213.3877727</a>-
                  <a href='tel:0946.814.586'> 0946.814.586</a>
                </div>
              </li>
              <li>
                <a href=''>
                  <i className='fa-solid fa-envelope-open'></i>
                  <div className='--txt'>
                    Email: pqldl.sovhttdl@laichau.gov.vn
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className='footer_link footer_link1'>
            <h4 className='--title'>Về Lai Châu</h4>
            <ul>
              <li>
                <Link href='/'>
                  <a>
                    <i className='fa-solid fa-angle-right'></i>Trang chủ
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/About'>
                  <a>
                    <i className='fa-solid fa-angle-right'></i>Về chúng tôi
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/Discover'>
                  <a>
                    <i className='fa-solid fa-angle-right'></i>Địa điểm tham
                    gian
                  </a>
                </Link>
              </li>
              <li>
                <Link href='http://localhost:3000/Tour'>
                  <a>
                    <i className='fa-solid fa-angle-right'></i>Tour du lịch
                  </a>
                </Link>
              </li>
              <li>
                <Link href=''>
                  <a>
                    <i className='fa-solid fa-angle-right'></i>Video & ảnh
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/Hotel'>
                  <a>
                    <i className='fa-solid fa-angle-right'></i>Lưu trú
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/Utilities'>
                  <a>
                    <i className='fa-solid fa-angle-right'></i>Tiện ích
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer_link footer_link2'>
            <h4 className='--title'>Pháp lý và Hỗ trợ</h4>
            <ul>
              <li>
                <a href=''>
                  <i className='fa-solid fa-angle-right'></i>Điều khoản và chính
                  sách
                </a>
              </li>
              <li>
                <a href=''>
                  <i className='fa-solid fa-angle-right'></i>Bảo mật thông tin
                  khách hàng
                </a>
              </li>
              <li>
                <a href=''>
                  <i className='fa-solid fa-angle-right'></i>Bảo vệ thông tin
                  khách hàng
                </a>
              </li>
              <li>
                <a href=''>
                  <i className='fa-solid fa-angle-right'></i>Giải quyết khiếu
                  nại
                </a>
              </li>
              <li>
                <a href=''>
                  <i className='fa-solid fa-angle-right'></i>Câu hỏi thường gặp
                </a>
              </li>
            </ul>
          </div>
          <div className='footer_form'>
            <h4 className='--title'>Đăng ký nhận tin</h4>
            <div className='--des'>
              Nhập thông tin của bạn để nhận thông tin du lịch mới nhất từ chúng
              tôi
            </div>
            <div className='--email'>
              <input type='text' placeholder='email' />
              <button>
                <i className='fa-solid fa-arrow-right-long'></i>
              </button>
            </div>
            <div className='--follow'>
              <span>Kết nối:</span>
              <ul>
                <li>
                  <a href=''>
                    <i className='fa-brands fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a href=''>
                    <i className='fa-brands fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href=''>
                    <i className='fa-brands fa-instagram'></i>
                  </a>
                </li>
                <li>
                  <a href=''>
                    <i className='fa-brands fa-google'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer_bot'>
        <div className='container-fluid'>
          <div className='--content d-flex justify-content-between'>
            <div className='--left d-flex align-items-center'>
              <span>@Du Lịch Lai Châu 2022 by Starfruit</span>
              <div className='--link d-flex align-items-center'>
                <a href=''>Privacy Cookies Policy</a>
                <a href=''>Terms and Conditions</a>
              </div>
            </div>
            <div className='--right d-flex align-items-center'>
              <div className='--item d-flex align-items-center'>
                <img src={globe.src} alt='' />
                Đang online: <span>18</span>
              </div>
              <div className='--item d-flex align-items-center'>
                <img src={chart.src} alt='' />
                Tổng: <span>9886</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
