import React, { useEffect, useState } from "react";

import globe from "../../../Asset/globe.svg";
import chart from "../../../Asset/chart-simple.svg";
import { v4 as uuid } from "uuid";
import Link from "next/link";
import callApi from "../../../Api/Axios";
import Slider from "react-slick";
import FooterInfo from "./component/FooterInfo";
import FooterLink from "./component/FooterLink";
import FooterForm from "./component/FooterForm";

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
  const footerInfo = data?.snippets?.find(
    (item) => item["snippet_name"] === "footerInfo"
  );
  const footerLink = data?.snippets?.find(
    (item) => item["snippet_name"] === "footerLink"
  );
  const footerPrivacy = data?.snippets?.find(
    (item) => item["snippet_name"] === "footerPrivacy"
  );
  const footerForm = data?.snippets?.find(
    (item) => item["snippet_name"] === "footerForm"
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
          <FooterInfo footerInfo={footerInfo} />
          <FooterLink footerLink={footerLink} />
          <FooterLink footerLink={footerPrivacy} />
          <FooterForm footerForm={footerForm} />
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