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
import FilterBox from "./_Component/FilterDisplay";
// import FilterDisplay from "./component/filterDisplay";

import OptionGroup from "./_Component/OptionGroup";

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
    dispatch({ type: "GET_POINT" });
  }, [router.locale]);
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
  }, [filter, router.locale]);
  const settingMap = useAppSelector(globalSelector).settingMap;
  return (
    <div className='--navBar'>
      {searchArr[0]?.type === "hotel" ? (
        <div className='--map'>
          <Map height='132px' arr={searchArr} />
          {/* <button>Chỉ đường</button> */}
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
          title={settingMap.District}
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
              title={settingMap.tourType}
              optionType={"checkbox"}
              optionArray={tourType.map((item) => ({
                title: item.title,
                value: item.id,
              }))}
            />
            <OptionGroup
              type={"point[]"}
              value={filter["point[]"]}
              title={settingMap.point}
              optionType={"checkbox"}
              optionArray={pointArr.map((item) => ({
                title: item.title,
                value: item.id,
              }))}
            />
            <OptionGroup
              type={"destinationsType"}
              value={filter["destinationsType"]}
              title={settingMap.destinationsType}
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
              title={settingMap.restaurantType}
              optionType={"checkbox"}
              optionArray={restaurantType.map((item) => ({
                title: item.title,
                value: item.id,
              }))}
            />
            <OptionGroup
              type={"restaurantCategory[]"}
              value={filter["restaurantCategory[]"]}
              title={settingMap.restaurantCategory}
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
              title={settingMap.hotelType}
              optionType={"checkbox"}
              optionArray={hotelType.map((item) => ({
                title: item.title,
                value: item.id,
              }))}
            />
            <OptionGroup
              type='star'
              value={filter.star}
              title={settingMap.star}
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
