import { Pagination, Select, Skeleton } from "antd";
import React, { memo, Suspense, useEffect, useRef, useState } from "react";

import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";

import commercialSelector from "../../../../ReduxStore/commercial/slice";
import { useAppDispatch, useAppSelector } from "../../../../ReduxStore/hooks";
import useDebounce from "../../../../funcion/debounce";
import globalSelector from "../../../../ReduxStore/globalSlice/slice";
import TourCard from "../TourCard/Lazyload";
import HotelCard from "../HotelCard/Lazyload";
import RestaurantCard from "../RestaurantCard/Lazyload";

const List = ({ List }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchArr = useAppSelector(commercialSelector).searchArr;
  const pagination = useAppSelector(commercialSelector).pagination;
  const filter = useAppSelector(commercialSelector).filter;
  const listType = useAppSelector(commercialSelector).listType;
  const [page, setPage] = useState<Number>(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const debouncedSearchTerm = useDebounce(search, 500);
  const list: any = useRef();

  useEffect(() => {
    setPage(1);
    setSearch("");
    setSort("");
  }, [router.query.commercial, router.locale]);
  useEffect(() => {
    dispatch({
      type: "GET_SEARCH_COMMERCIAL",
      payload: {
        limit: 9,
        page,
        search,
        order_key: sort,
      },
    });
  }, [debouncedSearchTerm, page, sort, router.locale]);
  const settingMap = useAppSelector(globalSelector).settingMap;

  return (
    <>
      <div ref={list} className='search d-flex'>
        <div className='--input'>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type='text'
            placeholder={
              router.asPath.includes("Tour")
                ? settingMap.tourSearchPlaceholder
                : router.asPath.includes("Restaurant")
                ? settingMap.restaurantSearchPlaceholder
                : settingMap.hotelSearchPlaceholder
            }
          />
          <i className='fa-solid fa-magnifying-glass'></i>
        </div>
        <div className='--select'>
          <span>{settingMap.Sort}</span>
          <Select
            onChange={(value) => {
              setSort(value);
            }}
            className='--item'
            placeholder={settingMap.Sort}
          >
            <Select.Option value='o_creationDate'>
              {settingMap.sortcreationDate}
            </Select.Option>
            <Select.Option value='sort'>{settingMap.sortOrder}</Select.Option>
          </Select>
        </div>
      </div>

      {router.asPath.includes("Tour") ? <h2>{List?.title}</h2> : false}
      {router.asPath.includes("Restaurant") ? <h2>{List?.title}</h2> : false}

      {listType === "tour_list" ? (
        <div className='--list --tour'>
          {searchArr.map((i) => (
            <Suspense key={uuid()} fallback={<Skeleton active />}>
              <TourCard
                time={i.time}
                id={i.id}
                img={i.featureImage?.path}
                tilte={i.title}
                description={i.description ? i.description : ""}
                key={uuid()}
                pointCategory={i.destinationsType?.title}
              />
            </Suspense>
          ))}
        </div>
      ) : (
        false
      )}
      {listType === "hotel_list" ? (
        <div className='--list --Hotel'>
          {searchArr.map((i) => (
            <Suspense key={uuid()} fallback={<Skeleton active />}>
              <HotelCard
                galaley={i.galleries}
                title={i.title}
                address={i.address}
                img={i.featureImage?.path}
                id={i.id}
                key={uuid()}
                rate={i.star}
                view={i.viewTotal}
              />
            </Suspense>
          ))}
        </div>
      ) : (
        false
      )}
      {listType === "restaurant_list" ? (
        <div className='--list --Restaurant'>
          {searchArr.map((i) => (
            <Suspense key={uuid()} fallback={<Skeleton active />}>
              <RestaurantCard
                title={i.title}
                address={i.address}
                img={i.featureImage?.path}
                id={i.id}
                key={uuid()}
                rate={i.star}
                view={i.viewTotal}
              />
            </Suspense>
          ))}
        </div>
      ) : (
        false
      )}
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
    </>
  );
};
export default memo(List);
