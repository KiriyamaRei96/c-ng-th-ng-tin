import { Pagination } from "antd";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../ReduxStore/hooks";
import pointSelector from "../../../../ReduxStore/pointSlice/slice";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import Image from "next/image";
import { debounce } from "redux-saga/effects";
import useDebounce from "../../../../funcion/debounce";
export interface IdiscoverSearchProps {}

const DiscoverSearch = (props: IdiscoverSearchProps) => {
  const searchArr = useAppSelector(pointSelector).searchArr;
  const pagination = useAppSelector(pointSelector).pagination;

  const dispatch = useAppDispatch();
  const [select, setSelect] = useState<string>("net");
  const [limit, setLimit] = useState<number>(6);

  const [search, setSearch] = useState<string>("");
  const debouncedSearchTerm = useDebounce(search, 500);
  useEffect(() => {
    dispatch({
      type: "SEARCH_POINT",
      payload: {
        page: 1,
        limit,
        order: "sort",
        search,
      },
    });
  }, [debouncedSearchTerm, limit]);
  const router = useRouter();

  return (
    <div className='discoverSearch'>
      <div className='container-fluid'>
        <h1 className='Title'>Khám phá địa điểm</h1>
        <div className='filter'>
          <div className='--top d-flex justify-content-between'>
            <div className='search'>
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                value={search}
                type='text'
                placeholder='Nhập từ khóa tìm kiếm'
              />
              <i className='fa-solid fa-magnifying-glass'></i>
            </div>
            <div className='--tabtop d-flex'>
              <button
                onClick={(e) => {
                  setSelect("net");
                  setLimit(6);
                }}
                className={select === "net" ? "active" : ""}
              >
                <i className='fa-solid fa-table-cells'></i>
                Lưới
              </button>
              <button
                onClick={(e) => {
                  setSelect("list");
                  setLimit(10000);
                }}
                className={select === "list" ? "active" : ""}
              >
                <i className='fa-solid fa-bars'></i>
                List
              </button>
              <button
                onClick={(e) => {
                  setSelect("map");
                  setLimit(10000);
                }}
                className={select === "map" ? "active" : ""}
              >
                <i className='fa-solid fa-map'></i>
                Bản đồ
              </button>
            </div>
          </div>
          <div className='--bot'>
            <div className='--filter d-flex align-items-center'>
              <span>
                <i className='fa-solid fa-filter'></i>
                Bộ lọc
              </span>
              <div className='--select d-flex'>
                <div className='--item'>
                  <select name='' id=''>
                    <option value=''>Chọn huyện</option>
                  </select>
                </div>
                <div className='--item'>
                  <select name='' id=''>
                    <option value=''>Loại địa điểm </option>
                  </select>
                </div>
                <div className='--item'>
                  <select name='' id=''>
                    <option value=''>Lượt view</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='--tabbot'>
              <button className='active'>
                Tất Cả<span>(15)</span>
              </button>
              <button>
                Thiên nhiên <span>(15)</span>
              </button>
              <button>
                Di tích lịch sử <span>(15)</span>
              </button>
              <button>
                Địa điểm du lịch <span>(15)</span>
              </button>
            </div>
          </div>
        </div>

        {select === "net" ? (
          <div className='--tab1'>
            <div className='list_discoverSearch list_discover'>
              <div className='row'>
                {searchArr.map((item) => (
                  <Link key={uuid()} href={`/Discover/${item.id}`}>
                    <div className='col-md-4'>
                      <div className='--item img_hover1'>
                        <a href=''>
                          <>
                            <div className='--img'>
                              <img src={item.featureImage?.path} alt='' />
                            </div>
                            <div className='--txt'>
                              <div className='--type'>
                                {item.pointType[0]
                                  ? item.pointType[0]?.title
                                  : "Chưa phân loại"}
                              </div>
                              <h4>{item.title}</h4>
                              <div className='--location '>
                                <Image
                                  src={require("../../../../Asset/icon-map1.svg")}
                                  alt=''
                                />
                                <span>{item.address}</span>
                              </div>
                            </div>
                          </>
                        </a>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <Pagination
              className='--pagination'
              onChange={(page, size) => {
                dispatch({
                  type: "SEARCH_POINT",
                  payload: {
                    page,
                    limit: 6,
                    order: "sort",
                    search: "",
                  },
                });
              }}
              itemRender={(_, type, originalElement) => {
                if (type === "prev") {
                  return <i className='fa-solid fa-angles-left'></i>;
                }
                if (type === "next") {
                  return <i className='fa-solid fa-angles-right'></i>;
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
          <div className='--tab2'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='list_discoverSearch2'>
                  {searchArr.map((item) => (
                    <Link key={uuid()} href={`/Discover/${item.id}`}>
                      <div className='--item d-flex align-items-center'>
                        <div className='--img'>
                          <img src={item.featureImage?.path} alt='' />
                        </div>
                        <div className='--txt'>
                          <h4>{item.title}</h4>
                          <article>{item.highlights}</article>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className='col-md-6'>
                <div className='--map'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8466441825976!2d102.23802461470257!3d2.211509298388063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1f1ccd4f2e3ed%3A0x4a2e89fc42f51eaf!2sBan%20Sin%20Ho%20Trading!5e0!3m2!1svi!2s!4v1666683463879!5m2!1svi!2s'
                    width='600'
                    height='450'
                    style={{ border: "0" }}
                    // allowFullScreen=""
                    loading='lazy'
                    // referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <a href='' className='--viewall button_2 button_hover2'>
              Xem tất cả điểm tham quan
            </a>
          </div>
        ) : (
          false
        )}
        {select === "map" ? (
          <div className='--tab3'>
            <div className='--map'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8466441825976!2d102.23802461470257!3d2.211509298388063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1f1ccd4f2e3ed%3A0x4a2e89fc42f51eaf!2sBan%20Sin%20Ho%20Trading!5e0!3m2!1svi!2s!4v1666683463879!5m2!1svi!2s'
                width='600'
                height='450'
                style={{ border: "0" }}
                // allowFullScreen=""
                loading='lazy'
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
export default DiscoverSearch;
