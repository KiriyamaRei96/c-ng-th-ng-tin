import { Pagination } from "antd";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import callApi from "../../Api/Axios";
import BreadCrumb from "../../components/BreadCrumb";
import { iconMap1 } from "../../components/img";
import { useAppDispatch, useAppSelector } from "../../ReduxStore/hooks";
import searchSelector, { searchText } from "../../ReduxStore/search/slice";
import SearchWrapper from "./_component/styled/style";
import { v4 as uuid } from "uuid";
import useDebounce from "../../funcion/debounce";
import globalSelector from "../../ReduxStore/globalSlice/slice";
export async function getServerSideProps(context) {
  const res = await callApi
    .get(`/v2/page/Search?locale=${context.locale}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));

  const banner = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "banner"
  );

  return {
    props: {
      banner,
    },
  };
}
const Search = ({ banner }) => {
  const pagination = useAppSelector(searchSelector).pagination;
  const searchArr = useAppSelector(searchSelector).searchArr;
  const types = useAppSelector(searchSelector).types;
  const filters = useAppSelector(searchSelector).filters;
  const search = useAppSelector(searchSelector).search;

  const [filter, setFilter] = useState(filters[0]?.value);
  const [page, setPage] = useState(1);

  const [sort, setSort] = useState("");
  const [type, setType] = useState("");

  const list: any = useRef();
  const debouncedSearchTerm = useDebounce(search, 500);
  const dispatch = useAppDispatch();
  const linkMap = {
    hotel: "/Hotel/",
    restaurant: "/Restaurant/",
    tour: "/Tour/",
    news: "/News&Event/news/",
    event: "/News&Event/event/",

    point: "/Discover/",
  };
  useEffect(() => {
    const payload = {
      page,
      search,
      type,
      filter,
    };
    Object.keys(payload).forEach((key) => {
      if (key !== "search" && payload[key] === "") {
        delete payload[key];
      }
    });
    dispatch({
      type: "SEARCH",
      payload,
    });
  }, [debouncedSearchTerm, page, sort, filter, type]);
  const settingMap = useAppSelector(globalSelector).settingMap;
  return (
    <SearchWrapper>
      <div id='search'>
        <div className='Banner d-flex'>
          <img src={banner?.image?.path} alt=''></img>
          <div className='--Item'>
            <h1>{banner.title}</h1>
            <BreadCrumb />
          </div>
        </div>
        <div ref={list} className='searchContent'>
          <div className='container-fluid'>
            <h1 className='Title'>
              {pagination.totalCount} {settingMap.infoFound}
            </h1>
            <div className='filter d-flex justify-content-between align-items-center'>
              <div className='search'>
                <input
                  type='text'
                  value={search}
                  onChange={(e) => {
                    if (page !== 1) {
                      setPage(1);
                    }
                    dispatch(searchText(e.target.value));
                  }}
                  placeholder={settingMap.searchPlaceHolder2}
                />
                <i className='fa-solid fa-magnifying-glass'></i>
              </div>
              <div className='select'>
                <span>{settingMap.Sort}</span>
                <select
                  value={filter}
                  onChange={(e) => {
                    setFilter(e.target.value);
                  }}
                  name=''
                  id=''
                >
                  {filters.map((item) => (
                    <option value={item.value} key={uuid()}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='--tab d-flex'>
              {Object.keys(types).map((key) => {
                if (types[key].count > 0 && types[key].value !== "travel") {
                  return (
                    <div
                      onClick={() => setType(types[key]?.value)}
                      key={uuid()}
                      className={
                        type === types[key]?.value
                          ? "--item-tab active"
                          : "--item-tab "
                      }
                    >
                      {types[key].name} <span>({types[key].count})</span>
                    </div>
                  );
                }
              })}
            </div>
            <div className=' list_discover'>
              <div className='row'>
                {searchArr.map((item) => {
                  if (item.type !== "travel_companies") {
                    return (
                      <div key={uuid()} className='col-md-4'>
                        <div className='--item img_hover search-Card'>
                          <Link
                            href={`/${linkMap[item.type]}detail~${item.id}`}
                          >
                            <a>
                              <div className='--img'>
                                <img src={item?.featureImage?.path} alt='' />
                              </div>
                              <div className='--txt'>
                                <div className='--type'>
                                  {types[item?.type]?.name}
                                </div>
                                <h4>{item?.title}</h4>
                                <div className='--location '>
                                  {item?.address ? (
                                    <>
                                      <img src={iconMap1.default.src} alt='' />
                                      <span>{item?.address}</span>
                                    </>
                                  ) : item?.subTitle ? (
                                    <span>{item?.subTitle}</span>
                                  ) : (
                                    false
                                  )}
                                </div>
                              </div>
                            </a>
                          </Link>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
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
              pageSize={9}
            />
          </div>
        </div>
      </div>
    </SearchWrapper>
  );
};
export default Search;
