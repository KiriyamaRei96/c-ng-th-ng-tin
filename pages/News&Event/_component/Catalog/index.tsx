import { Pagination } from "antd";
import Link from "next/link";
import { v4 as uuid } from "uuid";

import React, { memo, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../ReduxStore/hooks";
import newsEventsSelector from "../../../../ReduxStore/newSlice/slice";
import { useRouter } from "next/router";
import globalSelector from "../../../../ReduxStore/globalSlice/slice";

export interface CatalogProps {}

const Catalog = ({}: CatalogProps) => {
  const pagination = useAppSelector(newsEventsSelector).pagination;
  const searchArr = useAppSelector(newsEventsSelector).searchArr;
  const categoryArr = useAppSelector(newsEventsSelector).categoryArr;
  const router = useRouter();
  const [catalog, setCatalog] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const list: any = useRef();
  useEffect(() => {
    const payload = {
      page,
      limit: 6,
    };
    if (searchArr.length === 0) {
      dispatch({
        type: "SEARCH_NEWS",
        payload,
      });
    }
  }, [router.locale]);
  useEffect(() => {
    const payload = {
      page,
      limit: 6,
      "category[]": categoryArr.find((item) => item?.title?.trim() == catalog)
        ?.id,
    };
    if (catalog === "") {
      delete payload["category[]"];
    }

    dispatch({
      type: "SEARCH_NEWS",
      payload,
    });
  }, [catalog, page, router.locale]);
  const settingMap = useAppSelector(globalSelector).settingMap;
  return (
    <div ref={list} className='--catalog'>
      <div className='select d-flex'>
        <h4
          onClick={() => {
            setCatalog("");
          }}
          className={catalog === "" ? "active" : ""}
        >
          {settingMap.All}
        </h4>
        <h4
          onClick={() => {
            setCatalog("Tin địa phương");
          }}
          className={catalog === "Tin địa phương" ? "active" : ""}
        >
          {settingMap.localNews}
        </h4>
        <h4
          onClick={() => {
            setCatalog("Tin trong nước");
          }}
          className={catalog === "Tin trong nước" ? "active" : ""}
        >
          {settingMap.VnNews}
        </h4>
        <h4
          className={catalog === "Tin quốc tế" ? "active" : ""}
          onClick={() => {
            setCatalog("Tin quốc tế");
          }}
        >
          {settingMap.globalNews}
        </h4>
      </div>
      <div className='--list d-flex flex-wrap'>
        {searchArr?.map((item) => (
          <Link key={uuid()} href={`/News&Event/news/detail~${item.id}`}>
            <div className='--item d-flex flex-column'>
              <div className='--img img_hover'>
                <img src={item.featureImage?.path} alt='' />
              </div>
              <div className='--txt'>
                <div className='Info d-flex'>
                  <span className='type'>
                    {item.category[0] ? item.category[0]?.title : false}
                  </span>
                  <i className='fa-solid fa-circle divider'></i>
                  <span className='date'>
                    <i className='fa-solid fa-calendar-days'></i>
                    {item.date}
                  </span>
                  <i className='fa-solid fa-circle divider'></i>
                  <span className='view'>
                    <i className='fa-solid fa-eye'></i>
                    {item.viewTotal}
                  </span>
                </div>
                <h5>{item.title}</h5>
                <div className='divider'></div>
                <span>{item.description}</span>
                <div className='--more d-flex'>
                  <span>{settingMap.viewMore}</span>
                  <i className='fa-solid fa-arrow-right'></i>
                </div>
              </div>
            </div>
          </Link>
        ))}{" "}
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
        onChange={(e) => {
          const top = list?.current?.offsetTop;
          window.scrollTo({
            top,
            behavior: "smooth",
          });
          setPage(e);
        }}
        current={pagination.current}
        total={pagination.totalCount}
        pageSize={6}
      />
      ;
    </div>
  );
};
export default memo(Catalog);
