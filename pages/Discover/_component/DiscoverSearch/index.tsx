import { Pagination } from "antd";
import Link from "next/link";
import React, { memo, useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../ReduxStore/hooks";
import pointSelector from "../../../../ReduxStore/pointSlice/slice";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";

import useDebounce from "../../../../funcion/debounce";
import DiscoverCardList from "./component/discoverCard";
import globalSelector from "../../../../ReduxStore/globalSlice/slice";
import DiscoverItem from "./component/DiscoverItem";
export interface IdiscoverSearchProps {}

const DiscoverSearch = (props: IdiscoverSearchProps) => {
  const searchArr = useAppSelector(pointSelector).searchArr;
  const pointTypeArr = useAppSelector(pointSelector).pointType;

  const pagination = useAppSelector(pointSelector).pagination;
  const districtArr = useAppSelector(globalSelector).districtArr;

  const dispatch = useAppDispatch();
  const [select, setSelect] = useState<string>("net");
  const [limit, setLimit] = useState<number>(6);
  const [district, setDistrict] = useState<number | string>("");
  const [pointType, setPointType] = useState<number | string>("");

  const [search, setSearch] = useState<string>("");
  const debouncedSearchTerm = useDebounce(search, 500);
  function getResultByPoint(searchArr) {
    const outPut = {};
    searchArr.forEach((item) => {
      item.pointType.forEach((pt) => {
        if (!outPut[pt.title]) {
          outPut[pt.title] = {
            id: pt.id,
            count: 1,
          };
        }
        if (outPut[pt.title]) {
          outPut[pt.title].count += 1;
        }
      });
    });

    return outPut;
  }
  useEffect(() => {
    const payload = {
      page: 1,
      limit,

      search,
      district,
      "pointType[]": pointType,
    };
    Object.keys(payload).forEach((key) => {
      if (key !== "search" && payload[key] === "") {
        delete payload[key];
      }
    });
    dispatch({
      type: "SEARCH_POINT",
      payload,
    });
    if (pointTypeArr.length === 0) {
      dispatch({
        type: "GET_POINT_TYPE",
      });
    }
  }, [debouncedSearchTerm, limit, district, pointType]);
  const router = useRouter();

  return (
    <div className="discoverSearch">
      <div className="container-fluid">
        <h1 className="Title">Khám phá địa điểm</h1>
        <div className="filter">
          <div className="--top d-flex justify-content-between">
            <div className="search">
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                value={search}
                type="text"
                placeholder="Nhập từ khóa tìm kiếm"
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="--tabtop d-flex">
              <button
                onClick={(e) => {
                  setSelect("net");
                  setLimit(6);
                }}
                className={select === "net" ? "active" : ""}
              >
                <i className="fa-solid fa-table-cells"></i>
                Lưới
              </button>
              <button
                onClick={(e) => {
                  setSelect("list");
                  setLimit(10000);
                }}
                className={select === "list" ? "active" : ""}
              >
                <i className="fa-solid fa-bars"></i>
                List
              </button>
              <button
                onClick={(e) => {
                  setSelect("map");
                  setLimit(10000);
                }}
                className={select === "map" ? "active" : ""}
              >
                <i className="fa-solid fa-map"></i>
                Bản đồ
              </button>
            </div>
          </div>
          <div className="--bot">
            <div className="--filter d-flex align-items-center">
              <span>
                <i className="fa-solid fa-filter"></i>
                Bộ lọc
              </span>
              <div className="--select d-flex">
                <div className="--item">
                  <select
                    value={district}
                    onChange={(e) => {
                      setDistrict(e.target.value);
                    }}
                  >
                    <option value="" selected>
                      Chọn quận huyện
                    </option>
                    {districtArr.map((item) => (
                      <option key={uuid()} value={item.id}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="--item">
                  <select
                    value={pointType}
                    onChange={(e) => {
                      setPointType(e.target.value);
                    }}
                  >
                    <option value="" selected>
                      Chọn loại địa điểm
                    </option>
                    {pointTypeArr.map((item) => (
                      <option key={uuid()} value={item.id}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="--item">
                  <select name="" id="">
                    <option value="">Lượt view</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="--tabbot">
              <button className="active">
                Tất Cả<span>({pagination?.totalCount})</span>
              </button>
              {/* {Object.keys(getResultByPoint(searchArr)).map((item) => (
                <button key={uuid()}>
                  {item} <span>(15)</span>
                </button>
              ))} */}
            </div>
          </div>
        </div>

        {select === "net" ? (
          <div className="--tab1">
            <div className="list_discoverSearch list_discover">
              <DiscoverCardList searchArr={searchArr} />
            </div>
            <Pagination
              className="--pagination"
              onChange={(page, size) => {
                dispatch({
                  type: "SEARCH_POINT",
                  payload: {
                    page,
                    limit: 6,

                    search,
                  },
                });
              }}
              itemRender={(_, type, originalElement) => {
                if (type === "prev") {
                  return <i className="fa-solid fa-angles-left"></i>;
                }
                if (type === "next") {
                  return <i className="fa-solid fa-angles-right"></i>;
                }
                return originalElement;
              }}
              total={pagination?.totalCount}
              pageSize={6}
              current={pagination?.current}
            />
          </div>
        ) : (
          false
        )}
        {select === "list" ? (
          <div className="--tab2">
            <div className="row">
              <div className="col-md-6">
                <DiscoverItem searchArr={searchArr} />
              </div>
              <div className="col-md-6">
                <div className="--map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8466441825976!2d102.23802461470257!3d2.211509298388063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1f1ccd4f2e3ed%3A0x4a2e89fc42f51eaf!2sBan%20Sin%20Ho%20Trading!5e0!3m2!1svi!2s!4v1666683463879!5m2!1svi!2s"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    // allowFullScreen=""
                    loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <a href="" className="--viewall button_2 button_hover2">
              Xem tất cả điểm tham quan
            </a>
          </div>
        ) : (
          false
        )}
        {select === "map" ? (
          <div className="--tab3">
            <div className="--map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8466441825976!2d102.23802461470257!3d2.211509298388063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1f1ccd4f2e3ed%3A0x4a2e89fc42f51eaf!2sBan%20Sin%20Ho%20Trading!5e0!3m2!1svi!2s!4v1666683463879!5m2!1svi!2s"
                width="600"
                height="450"
                style={{ border: "0" }}
                // allowFullScreen=""
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        ) : (
          false
        )}
      </div>
    </div>
  );
};
export default memo(DiscoverSearch);
