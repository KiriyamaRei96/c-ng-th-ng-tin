import { Pagination, Select } from "antd";
import React, { useState } from "react";
import HotelCard from "../HotelCard";
import RestaurantCard from "../RestaurantCard";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import TourCard from "../TourCard";
import commercialSelector from "../../../../ReduxStore/commercial/slice";
import { useAppSelector } from "../../../../ReduxStore/hooks";

export interface ListProps {}

const List = (props: ListProps) => {
  const router = useRouter();

  const searchArr = useAppSelector(commercialSelector).searchArr;
  const pagination = useAppSelector(commercialSelector).pagination;
  const [page, setPage] = useState<Number>(1);
  const [search, setSearch] = useState("");

  
  return (
    <>
      <div className='search d-flex'>
        <div className='--input'>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type='text'
            placeholder='nhập để tìm kiếm'
          />
          <i className='fa-solid fa-magnifying-glass'></i>
        </div>
        <div className='--select'>
          <span>Sắp xếp</span>
          <Select className='--item' defaultValue={"1"}>
            <Select.Option value='1'>Gần nhất</Select.Option>
          </Select>
        </div>
      </div>

      {router.asPath.includes("Tour") ? <h2>Tour nổi bật</h2> : false}
      {router.asPath.includes("Restaurant") ? <h2>Nhà hàng nổi bật</h2> : false}

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
            <HotelCard key={uuid()} />
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
          setPage(e);
        }}
        current={pagination.current}
        total={pagination.totalCount}
        pageSize={9}
      />
    </>
  );
};
export default List;
