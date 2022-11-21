import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import callApi from "../../../Api/Axios";
import BreadCrumb from "../../../components/BreadCrumb";
import { useAppDispatch, useAppSelector } from "../../../ReduxStore/hooks";
import newsEventsSelector from "../../../ReduxStore/newSlice/slice";
import NewsDetailWarpper from "./_component/style/styled";
import { v4 as uuid } from "uuid";
import {
  iconBack,
  iconFB,
  iconGG,
  iconIN,
  iconTW,
} from "../../../components/img";
import globalSelector from "../../../ReduxStore/globalSlice/slice";

export async function getServerSideProps(context) {
  const id = context.query?.index?.replace("detail~", "");

  const res = await callApi
    .get(`/v2/news_detail/${id}?locale=${context.locale}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  const data = res.data;
  const page = await callApi
    .get(`/v2/page/News?locale=${context.locale}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  const newsBanner = await page.data?.snippets?.find(
    (item) => item["snippet_name"] === "newsBanner"
  );
  return {
    props: { data, newsBanner },
  };
}
export interface NewsDetailProps {
  data: any;
  newsBanner: any;
}

const NewsDetail = ({ data, newsBanner }: NewsDetailProps) => {
  const router = useRouter();
  const newsArr = useAppSelector(newsEventsSelector).newsArr;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (newsArr.length === 0) {
      dispatch({ type: "GET_NEWS" });
    }
  }, [newsArr, router.locale]);
  const otherNews = newsArr.filter((item) => item.id !== data.id);
  const settingMap = useAppSelector(globalSelector).settingMap;
  return (
    <NewsDetailWarpper>
      <div id='detailnews'>
        <div className='Banner d-flex'>
          <img src={newsBanner.image?.path} alt=''></img>
          <div className='--Item'>
            <h1>{newsBanner.title}</h1>
            <BreadCrumb />
          </div>
        </div>
        <div className='detailnewsContent'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-9'>
                <div className='--left'>
                  <div className='subTitle'>{newsBanner.subTitle}</div>
                  <h2 className='--title'>{data.title}</h2>
                  <div className='--note d-flex'>
                    <div className='--item'>
                      <a href=''>
                        <span>32 {settingMap.comment}</span>
                      </a>
                    </div>
                    <div className='--item'>
                      <span>84 {settingMap.ratting}</span>
                    </div>
                    <div className='--item'>
                      <i className='fa-regular fa-calendar'></i>
                      <span>{data.date}</span>
                    </div>
                    <div className='--item'>
                      <i className='fa-regular fa-eye'></i>
                      <span>{data.viewTotal}</span>
                    </div>
                  </div>
                  <div className='--des'>{data.description}</div>
                  <article
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  ></article>

                  <div className='--backshare d-flex justify-content-between'>
                    <a onClick={() => router.back()} className='--back'>
                      <img src={iconBack.default.src} alt='' />{" "}
                      {settingMap.return}
                    </a>

                    <ul>
                      <li> {settingMap.share}:</li>
                      <li>
                        <a href=''>
                          <img src={iconTW.default.src} alt='' />
                        </a>
                      </li>
                      <li>
                        <a href=''>
                          <img src={iconFB.default.src} alt='' />
                        </a>
                      </li>
                      <li>
                        <a href=''>
                          <img src={iconIN.default.src} alt='' />
                        </a>
                      </li>
                      <li>
                        <a href=''>
                          <img src={iconGG.default.src} alt='' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='--right'>
                  <h3 className='--titlenews'>Bài viết khác</h3>
                  <div className='othernews'>
                    {otherNews.map((item) => (
                      <div key={uuid()} className='--item '>
                        <div className='--img img_hover'>
                          <Link href={`/News&Event/news/detail~${item.id}`}>
                            <a>
                              <img src={item.featureImage?.path} alt='' />
                            </a>
                          </Link>
                        </div>
                        <h5>
                          <Link href={`/News&Event/news/detail~${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NewsDetailWarpper>
  );
};
export default NewsDetail;
