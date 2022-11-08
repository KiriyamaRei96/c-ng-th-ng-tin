import { Tag } from "antd";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Map from "../../../../components/Map";
import commercialSelector, {
  clearFilter,
} from "../../../../ReduxStore/commercial/slice";
import globalSelector from "../../../../ReduxStore/globalSlice/slice";
import { useAppDispatch, useAppSelector } from "../../../../ReduxStore/hooks";
import pointSelector from "../../../../ReduxStore/pointSlice/slice";
import FilterBox from "./component/filterDisplay";
import FilterDisplay from "./component/filterDisplay";

import OptionGroup from "./component/OptionGroup";

export interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const router = useRouter();
  const districtArr = useAppSelector(globalSelector).districtArr;

  const filter = useAppSelector(commercialSelector).filter;
  const hotelType = useAppSelector(commercialSelector).hotelType;

  const tourType = useAppSelector(commercialSelector).tourType;
  const destinationsType = useAppSelector(commercialSelector).destinationsType;
  const searchArr = useAppSelector(commercialSelector).searchArr;
  const restaurantType = useAppSelector(commercialSelector).restaurantType;
  const restaurantCategory =
    useAppSelector(commercialSelector).restaurantCategory;
  const pointArr = useAppSelector(pointSelector).pointArr;

  const allFilter = [
    ...districtArr,
    ...pointArr,
    ...tourType,
    ...destinationsType,
    ...restaurantType,
    ...restaurantCategory,
    ...hotelType,
    ...[
      { type: "star", id: 1, title: "1 sao" },
      { type: "star", id: 2, title: "2 sao" },
      { type: "star", id: 3, title: "3 sao" },
      { type: "star", id: 4, title: "4 sao" },
      { type: "star", id: 5, title: "5 sao" },
    ],
  ];

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (pointArr.length === 0) {
      dispatch({ type: "GET_POINT" });
    }
  }, []);
  useEffect(() => {
    dispatch({
      type: "GET_SEARCH_COMMERCIAL",
      payload: {
        limit: 9,
        page: 1,
        search: "",
        order_key: "sort",
      },
    });
  }, [filter]);

  return (
    <div className='--navBar'>
      {searchArr[0]?.type === "hotel" ? (
        <div className='--map'>
          <Map height='132px' arr={searchArr} />
          <button>Chỉ đường</button>
        </div>
      ) : (
        false
      )}

      <div className='--OptionList'>
        <FilterBox allFilter={allFilter} />
        {/* <FilterDisplay /> */}
        <OptionGroup
          type='district'
          value={filter.district}
          title={"Khu vực"}
          optionType={"select"}
          optionArray={districtArr.map((item) => ({
            title: item.title,
            value: item.id,
          }))}
        />
        {router.asPath.includes("Tour") ? (
          <>
            <OptionGroup
              type={"tourType[]"}
              value={filter["tourType[]"]}
              title={"Loại hình"}
              optionType={"checkbox"}
              optionArray={tourType.map((item) => ({
                title: item.title,
                value: item.id,
              }))}
            />
            <OptionGroup
              type={"point[]"}
              value={filter["point[]"]}
              title={"Điểm thăm quan"}
              optionType={"checkbox"}
              optionArray={pointArr.map((item) => ({
                title: item.title,
                value: item.id,
              }))}
            />
            <OptionGroup
              type={"destinationsType"}
              value={filter["destinationsType"]}
              title={"Số điểm đến"}
              optionType={"radio"}
              optionArray={destinationsType.map((item) => ({
                title: item.title,
                value: item.id,
              }))}
            />
          </>
        ) : (
          false
        )}
        {router.asPath.includes("Restaurant") ? (
          <>
            <OptionGroup
              type={"restaurantType[]"}
              value={filter["restaurantType[]"]}
              title={"Loại hình ẩm thực"}
              optionType={"checkbox"}
              optionArray={restaurantType.map((item) => ({
                title: item.title,
                value: item.id,
              }))}
            />
            <OptionGroup
              type={"restaurantCategory[]"}
              value={filter["restaurantCategory[]"]}
              title={"Kiểu ẩm thực"}
              optionType={"checkbox"}
              optionArray={restaurantCategory.map((item) => ({
                title: item.title,
                value: item.id,
              }))}
            />
          </>
        ) : (
          false
        )}
        {router.asPath.includes("Hotel") ? (
          <>
            <OptionGroup
              type={"hotelType[]"}
              value={filter["hotelType[]"]}
              title={"Loại hình"}
              optionType={"checkbox"}
              optionArray={hotelType.map((item) => ({
                title: item.title,
                value: item.id,
              }))}
            />
            <OptionGroup
              type='star'
              value={filter.star}
              title={"Xếp hạng sao"}
              optionType={"stars"}
              optionArray={undefined}
            ></OptionGroup>
          </>
        ) : (
          false
        )}
      </div>
    </div>
  );
};
export default Navbar;
