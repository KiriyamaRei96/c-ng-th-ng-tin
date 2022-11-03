import { useRouter } from "next/router";
import * as React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import AboutWrapper from "./_component/styled/style";
import { v4 as uuid } from "uuid";
import forest from "./_Asset/ic_forest.svg";
import forest2 from "./_Asset/ic_forest(2).svg";
import forest3 from "./_Asset/ic_forest(3).svg";
import forest4 from "./_Asset/ic_forest(4).svg";
import Slider from "react-slick";
import { DollarOutlined } from "@ant-design/icons";
import Link from "next/link";
import callApi from "../../Api/Axios";
import Image from "next/image";
export async function getServerSideProps() {
  const res = await callApi
    .get("/v2/page/about?locale=vi")
    .then((res) => res.data)
    .catch((err) => console.error(err));

  const aboutBanner = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "aboutBanner"
  );
  const aboutIntroLeft = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "aboutIntroLeft"
  );
  const aboutIntroContent = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "aboutIntroContent"
  );
  const listAboutIntro = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "listAboutIntro"
  );
  const aboutDiscover = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "aboutDiscover"
  );
  const aboutWhy = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "aboutWhy"
  );
  return {
    props: {
      aboutBanner,
      aboutIntroLeft,
      aboutIntroContent,
      listAboutIntro,
      aboutDiscover,
      aboutWhy,
    },
  };
}
export interface AboutProps {
  aboutBanner: any;
  aboutIntroLeft: any;
  aboutIntroContent: any;
  listAboutIntro: any;
  aboutDiscover: any;
  aboutWhy: any;
}
const About = ({
  aboutBanner,
  aboutIntroLeft,
  aboutIntroContent,
  listAboutIntro,
  aboutDiscover,
  aboutWhy,
}: AboutProps) => {
  console.log(aboutWhy);
  const introBanner = aboutIntroLeft.articles.find(
    (item) => item.title === "banner"
  );
  const introIcon = aboutIntroLeft.articles.find(
    (item) => item.title === "icon"
  );
  const router = useRouter();
  return (
    <AboutWrapper>
      <div id='about'>
        <div className='Banner d-flex'>
          <img src={aboutBanner.image.path} alt=''></img>
          <div className='--Item'>
            <h1>{aboutBanner.title}</h1>
            <BreadCrumb />
          </div>
        </div>
        <div className='aboutIntro'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='--left'>
                  <div className='--video'>
                    <div className='--img'>
                      <img src={introBanner.image.path} alt='' />
                    </div>
                    <a href='' className='play'>
                      <i className='fa-solid fa-play'></i>
                    </a>
                  </div>
                  <div className='--card '>
                    <div className='--icon'>
                      <img src={introIcon.image.path} alt='' />
                    </div>

                    <h4
                      dangerouslySetInnerHTML={{ __html: introIcon.content }}
                    ></h4>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='--content'>
                  <div className='subTitle'>{aboutIntroContent.subTitle}</div>
                  <h1 className='Title'>{aboutIntroContent.title}</h1>
                  <div className='--des'>{aboutIntroContent.description}</div>
                  <article
                    dangerouslySetInnerHTML={{
                      __html: aboutIntroContent.content,
                    }}
                  ></article>
                  <Link href={aboutIntroContent.link}>
                    <a className='button_2 button_hover2'>
                      Liên Hệ ngay{" "}
                      <i className='fa-solid ms-2 fa-arrow-right-long'></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='list_aboutIntro d-flex'>
              {listAboutIntro.articles.map((item) => (
                <div key={uuid()} className='--item d-flex'>
                  <div className='--icon'>
                    <img src={item.image.path} alt='' />
                  </div>
                  <div className='--txt d-flex flex-column justify-content-center'>
                    <h4>{item.title}</h4>
                    <span>{item.subTitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='aboutDiscover'>
          <div className='container-fluid'>
            <div className='subTitle text-center'>{aboutDiscover.subTitle}</div>
            <h1 className='Title text-center'>{aboutDiscover.title}</h1>
            <Slider
              {...{
                dots: true,
                infinite: true,
                speed: 800,
                slidesToShow: 4,
                slidesToScroll: 4,
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
              className='list_aboutDiscover'
            >
              {aboutDiscover.articles.map((item) => (
                <div key={uuid()}>
                  <div className='--warpper'>
                    <div className='--item'>
                      <div className='--img img_hover'>
                        <img src={item.image.path} alt='' />
                      </div>
                      <div className='--txt'>
                        <h4>{item.title}</h4>
                        <a href=''>
                          Xem chi tiết
                          <i className='fa-solid ms-2 fa-arrow-right-long'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className='aboutWhy'>
          <div className='container-fluid'>
            <div className='subTitle text-center'>{aboutWhy.subTitle}</div>
            <h1 className='Title text-center'>{aboutWhy.title}</h1>
            <div className='list_Why'>
              <div className='--item'>
                <div className='--top'>
                  <i className='fa-solid fa-coins'></i>

                  <h4>Giá tốt nhất</h4>
                </div>
                <div className='--des'>
                  Lorem Ipsum is simply a piece of dummy text, used for
                  presentation and layout for print. Lorem Ipsum has been used.
                </div>
                <div className='--number'>01</div>
              </div>
              <div className='--item'>
                <div className='--top'>
                  <i className='fa-solid fa-map-location-dot'></i>
                  <h4>Nhiều lựa chọn các chuyến tham quan</h4>
                </div>
                <div className='--des'>
                  Lorem Ipsum is simply a piece of dummy text, used for
                  presentation and layout for print. Lorem Ipsum has been used.
                </div>
                <div className='--number'>02</div>
              </div>
              <div className='--item'>
                <div className='--top'>
                  <i className='fa-solid fa-check-to-slot'></i>
                  <h4>Nhà điều hành tour đủ điều kiện</h4>
                </div>
                <div className='--des'>
                  Lorem Ipsum is simply a piece of dummy text, used for
                  presentation and layout for print. Lorem Ipsum has been used.
                </div>
                <div className='--number'>03</div>
              </div>
              <div className='--item'>
                <div className='--top'>
                  <i className='fa-solid fa-thumbs-up'></i>
                  <h4>Hướng dẫn viên chuyên nghiệp</h4>
                </div>
                <div className='--des'>
                  Lorem Ipsum is simply a piece of dummy text, used for
                  presentation and layout for print. Lorem Ipsum has been used.
                </div>
                <div className='--number'>04</div>
              </div>
              <div className='--item'>
                <div className='--top'>
                  <i className='fa-solid fa-circle-check'></i>
                  <h4>Đặt chỗ nhanh</h4>
                </div>
                <div className='--des'>
                  Lorem Ipsum is simply a piece of dummy text, used for
                  presentation and layout for print. Lorem Ipsum has been used.
                </div>
                <div className='--number'>05</div>
              </div>
              <div className='--item'>
                <div className='--top'>
                  <i className='fa-solid fa-baseball'></i>
                  <h4>Nhiều khu vui chơi</h4>
                </div>
                <div className='--des'>
                  Lorem Ipsum is simply a piece of dummy text, used for
                  presentation and layout for print. Lorem Ipsum has been used.
                </div>
                <div className='--number'>06</div>
              </div>
            </div>
          </div>
        </div>
        <div className='aboutBlock'>
          <div className='--img'>
            <img
              src='https://s3-alpha-sig.figma.com/img/a052/dbf6/8be9085bc3335501c2ae0c31e2357253?Expires=1667779200&Signature=QejIgHalLMIvyOcjjVGJjlcZ4X~6zhD2PEAjs4VjHPKtHiW6WnVycBx~1s5zU1M4CpaghtS2BwM89-2GEDtiRGC78ktXZgHFyeWpXPM-5BXI-~QJnorOpzsWrxXNwwnywwgWRFVnm5Xfy0LKI8hRZx3KQvUBY~X1-DW-q9LdLiVYxQhg2Dh8ExMSMOEwlbgnWYfEie1oGODmsf~8~p6RcB3qCT7kRf-egdEMQgaHTE~hmUVQu~piwN5WD3FmNUEMDcJNKfioMg2fnQ2LOBL1-PF-Kg2oa2-rTdFFOFtNtA9BfB44kjxKVdhqYNxxTVEWhIoYJ59~06WHOeiJLpKa3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              alt=''
            />
          </div>
          <div className='--txt'>
            <h1 className='Title'>Lai Châu núi rừng Tây Bắc</h1>
            <Link href='/Discover'>
              <a>
                Khám phá ngay
                <i className='fa-solid ms-2 fa-arrow-right-long'></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};
export default About;
