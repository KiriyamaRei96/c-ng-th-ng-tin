import { Pagination } from "antd";
import Link from "next/link";
import { v4 as uuid } from "uuid";

import React, { memo, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../ReduxStore/hooks";
import newsEventsSelector from "../../../../ReduxStore/newSlice/slice";

export interface CatalogProps {}

const Catalog = ({}: CatalogProps) => {
  const pagination = useAppSelector(newsEventsSelector).pagination;
  const searchArr = useAppSelector(newsEventsSelector).searchArr;
  const categoryArr = useAppSelector(newsEventsSelector).categoryArr;

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
  }, []);
  useEffect(() => {
    const payload = {
      page,
      limit: 6,
      "category[]": categoryArr.find((item) => item.title.trim() == catalog)
        ?.id,
    };
    if (catalog === "") {
      delete payload["category[]"];
    }

    dispatch({
      type: "SEARCH_NEWS",
      payload,
    });
  }, [catalog, page]);
  return (
    <div ref={list} className="--catalog">
      <div className="select d-flex">
        <h4
          onClick={() => {
            setCatalog("");
          }}
          className={catalog === "" ? "active" : ""}
        >
          Tin địa phương
        </h4>
        <h4
          onClick={() => {
            setCatalog("Tin trong nước");
          }}
          className={catalog === "Tin trong nước" ? "active" : ""}
        >
          Tin trong nước
        </h4>
        <h4
          className={catalog === "Tin quốc tế" ? "active" : ""}
          onClick={() => {
            setCatalog("Tin quốc tế");
          }}
        >
          Tin quốc tế
        </h4>
      </div>
      <div className="--list">
        {searchArr?.map((item) => (
          <Link key={uuid()} href={`/News&Event/news/detail~${item.id}`}>
            <div>
              <img src={item.featureImage?.path} alt="" />
              <div className="Info d-flex">
                <span className="type">
                  {item.category[0]
                    ? item.category[0]?.title
                    : "Chưa phân loại"}
                </span>
                <i className="fa-solid fa-circle divider"></i>
                <span className="date">
                  <i className="fa-solid fa-calendar-days"></i>
                  {item.date}
                </span>
                <i className="fa-solid fa-circle divider"></i>
                <span className="view">
                  <i className="fa-solid fa-eye"></i>
                  268
                </span>
              </div>
              <h5>{item.title}</h5>
              <div className="divider"></div>
              <span>{item.description}</span>
              <div className="--more d-flex">
                <span>Xem thêm</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </Link>
        ))}{" "}
      </div>
      <Pagination
        className="--pagination"
        itemRender={(_, type, originalElement) => {
          if (type === "prev") {
            return <i className="fa-solid fa-angles-left"></i>;
          }
          if (type === "next") {
            return <i className="fa-solid fa-angles-right"></i>;
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