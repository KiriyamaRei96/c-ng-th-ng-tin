import { Pagination, Select } from "antd";
import React, { memo, useEffect, useRef, useState } from "react";
import HotelCard from "../HotelCard";
import RestaurantCard from "../RestaurantCard";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import TourCard from "../TourCard";
import commercialSelector from "../../../../ReduxStore/commercial/slice";
import { useAppDispatch, useAppSelector } from "../../../../ReduxStore/hooks";
import useDebounce from "../../../../funcion/debounce";
import globalSelector from "../../../../ReduxStore/globalSlice/slice";

const List = ({ List }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchArr = useAppSelector(commercialSelector).searchArr;
  const pagination = useAppSelector(commercialSelector).pagination;
  const filter = useAppSelector(commercialSelector).filter;

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
          <span>Sắp xếp</span>
          <Select
            onChange={(value) => {
              setSort(value);
            }}
            className='--item'
            placeholder='Sắp xếp'
          >
            <Select.Option value='o_creationDate'>Gần nhất</Select.Option>
            <Select.Option value='sort'>Theo thứ tự</Select.Option>
          </Select>
        </div>
      </div>

      {router.asPath.includes("Tour") ? <h2>{List?.title}</h2> : false}
      {router.asPath.includes("Restaurant") ? <h2>{List?.title}</h2> : false}

      {router.asPath.includes("Tour") ? (
        <div className='--list --tour'>
          {searchArr.map((i) => (
            <TourCard
              id={i.id}
              img={i.featureImage?.path}
              tilte={i.title}
              plan={i.plan ? i.plan : "Chưa có kế hoạch du lịch"}
              key={uuid()}
              pointCategory={i.destinationsType?.title}
            />
          ))}
        </div>
      ) : (
        false
      )}
      {router.asPath.includes("Hotel") ? (
        <div className='--list --Hotel'>
          {searchArr.map((i) => (
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
          ))}
        </div>
      ) : (
        false
      )}
      {router.asPath.includes("Restaurant") ? (
        <div className='--list --Restaurant'>
          {searchArr.map((i) => (
            <RestaurantCard
              title={i.title}
              address={i.address}
              img={i.featureImage?.path}
              id={i.id}
              key={uuid()}
              rate={i.star}
              view={i.viewTotal}
            />
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
