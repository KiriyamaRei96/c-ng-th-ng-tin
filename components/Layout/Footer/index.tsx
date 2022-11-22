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
import { useRouter } from "next/router";

const Footer = ({ iconSlider }) => {
  const router = useRouter();
  const [data, setData] = useState<any>();
  const [view, setView] = useState<any>();

  useEffect(() => {
    (async () => {
      const data = await callApi
        .get(`/v2/page/Footer?locale=${router.locale}`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
      setData(data.data);
    })();
    (async () => {
      const data = await callApi
        .get(`/v2/main/main`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
      setView(data?.data);
    })();
  }, [router.locale]);

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
  const footerCompany = data?.snippets?.find((item) =>
    item["snippet_name"]?.includes("footerCompany")
  );

  return (
    <footer>
      <div className="footer_Logo">
        <div className="container-fluid">
          {slider?.articles.length > 7 ? (
            <Slider
              className="list_logo"
              {...{
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                speed: 500,
                pauseOnHover: false,
                slidesToShow: 7,
                slidesToScroll: 1,
                responsive: [
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                    },
                  },
                ],
              }}
            >
              {slider?.articles.map((item) => (
                <div key={uuid()}>
                  <div className="--img">
                    <img src={item.image?.path} alt="" />
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="list_logo">
              {slider?.articles.map((item) => (
                <div key={uuid()}>
                  <div className="--img">
                    <img src={item.image?.path} alt="" />
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="list_logo d-flex"></div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="footer d-flex justify-content-between">
          <FooterInfo footerInfo={footerInfo} />
          <FooterLink footerLink={footerLink} />
          <FooterLink footerLink={footerPrivacy} />
          <FooterForm footerForm={footerForm} />
        </div>
      </div>
      <div className="footer_bot">
        <div className="container-fluid">
          <div className="--content d-flex justify-content-between">
            <div className="--left d-flex align-items-center">
              <span>{footerCompany?.title}</span>
              <div className="--link d-flex align-items-center">
                {footerCompany?.articles.map((item) => (
                  <Link href={item.link} key={uuid()}>
                    <a>{item.title}</a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="--right d-flex align-items-center">
              <div className="--item d-flex align-items-center">
                <img src={globe.src} alt="" />
                Đang online: <span>{view?.online}</span>
              </div>
              <div className="--item d-flex align-items-center">
                <img src={chart.src} alt="" />
                Tổng: <span>{view?.total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
