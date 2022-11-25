import { useRouter } from "next/router";
import * as React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import AboutWrapper from "./_component/styled/style";
import { v4 as uuid } from "uuid";

import Slider from "react-slick";

import Link from "next/link";
import callApi from "../../Api/Axios";
import Fancybox from "../../components/fancybox";
import pad from "../../funcion/pad";
import { useAppSelector } from "../../ReduxStore/hooks";
import globalSelector from "../../ReduxStore/globalSlice/slice";

export async function getServerSideProps(context) {
  const res = await callApi
    .get(`/v2/page/about?locale=${context.locale}`)
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
  const aboutBlock = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "aboutBlock"
  );
  return {
    props: {
      aboutBanner,
      aboutIntroLeft,
      aboutIntroContent,
      listAboutIntro,
      aboutDiscover,
      aboutWhy,
      aboutBlock,
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
  aboutBlock: any;
}
const About = ({
  aboutBanner,
  aboutIntroLeft,
  aboutIntroContent,
  listAboutIntro,
  aboutDiscover,
  aboutWhy,
  aboutBlock,
}: AboutProps) => {
  const introBanner = aboutIntroLeft.articles.find(
    (item) => item.title === "banner"
  );
  const introIcon = aboutIntroLeft.articles.find(
    (item) => item.title === "icon"
  );
  const settingMap = useAppSelector(globalSelector).settingMap;
  return (
    <AboutWrapper>
      <div id='about'>
        <div className='Banner d-flex'>
          <img src={aboutBanner?.image.path} alt=''></img>
          <div className='--Item'>
            <h1>{aboutBanner?.title}</h1>
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
                      <img src={introBanner?.image.path} alt='' />
                    </div>
                    <Fancybox options={{ infinite: false }}>
                      <a
                        data-fancybox='iframe'
                        data-src={aboutIntroLeft.link}
                        className='play'
                      >
                        <i className='fa-solid fa-play'></i>
                      </a>
                    </Fancybox>
                  </div>
                  <div className='--card '>
                    <div className='--icon'>
                      <img src={introIcon?.image.path} alt='' />
                    </div>

                    <h4
                      dangerouslySetInnerHTML={{ __html: introIcon?.content }}
                    ></h4>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='--content'>
                  <div className='subTitle'>{aboutIntroContent?.subTitle}</div>
                  <h1 className='Title'>{aboutIntroContent?.title}</h1>
                  <div className='--des'>{aboutIntroContent?.description}</div>
                  <article
                    dangerouslySetInnerHTML={{
                      __html: aboutIntroContent?.content,
                    }}
                  ></article>
                  <Link href={aboutIntroContent?.link}>
                    <a className='button_2 button_hover2'>
                      Liên Hệ ngay{" "}
                      <i className='fa-solid ms-2 fa-arrow-right-long'></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='list_aboutIntro d-flex'>
              {listAboutIntro?.articles.map((item) => (
                <div key={uuid()} className='--item d-flex'>
                  <div className='--icon'>
                    <img src={item?.image?.path} alt='' />
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
        {aboutDiscover?.articles?.length >= 0 ? (
          <div className='aboutDiscover'>
            <div className='container-fluid'>
              <div className='subTitle text-center'>
                {aboutDiscover?.subTitle}
              </div>
              <h1 className='Title text-center'>{aboutDiscover?.title}</h1>
              {aboutDiscover?.articles?.length >= 4 ? (
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
                        breakpoint: 1279,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1,
                        },
                      },
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
                  {aboutDiscover?.articles.map((item) => (
                    <div key={uuid()}>
                      <div className='--warpper'>
                        <div className='--item'>
                          <div className='--img img_hover'>
                            <img src={item?.image?.path} alt='' />
                          </div>
                          <div className='--txt'>
                            <h4>{item?.title}</h4>
                            <Link href={item?.link}>
                              <a>
                                {settingMap.viewDetail}
                                <i className='fa-solid ms-2 fa-arrow-right-long'></i>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className='list_aboutDiscover d-flex'>
                  {aboutDiscover?.articles.map((item) => (
                    <div key={uuid()}>
                      <div className='--warpper'>
                        <div className='--item'>
                          <div className='--img img_hover'>
                            <img src={item?.image?.path} alt='' />
                          </div>
                          <div className='--txt'>
                            <h4>{item?.title}</h4>
                            <Link href={item?.link}>
                              <a>
                                {settingMap.viewDetail}
                                <i className='fa-solid ms-2 fa-arrow-right-long'></i>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          false
        )}

        <div className='aboutWhy'>
          <div className='container-fluid'>
            <div className='subTitle text-center'>{aboutWhy?.subTitle}</div>
            <h1 className='Title text-center'>{aboutWhy?.title}</h1>
            <div className='list_Why'>
              {aboutWhy?.articles?.map((item, id) => (
                <div key={uuid()} className='--item'>
                  <div className='--top'>
                    <img src={item?.image?.path} alt='' />

                    <h4>{item?.title}</h4>
                  </div>
                  <div className='--des'>{item?.description}</div>
                  <div className='--number'>{pad(id + 1)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='aboutBlock'>
          <div className='--img'>
            <img src={aboutBlock?.image?.path} alt='' />
          </div>
          <div className='--txt'>
            <h1 className='Title'>{aboutBlock?.title}</h1>
            <Link href={aboutBlock?.link}>
              <a>
                {settingMap.FindOut}
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
