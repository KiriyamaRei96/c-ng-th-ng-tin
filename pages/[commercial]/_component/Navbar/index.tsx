import { Tag } from "antd";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import commercialSelector from "../../../../ReduxStore/commercial/slice";
import globalSelector from "../../../../ReduxStore/globalSlice/slice";
import { useAppDispatch, useAppSelector } from "../../../../ReduxStore/hooks";
import pointSelector from "../../../../ReduxStore/pointSlice/slice";
import OptionGroup from "./component/OptionGroup";

export interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const router = useRouter();
  const districtArr = useAppSelector(globalSelector).districtArr;

  const filter = useAppSelector(commercialSelector).filter;
  const tourType = useAppSelector(commercialSelector).tourType;
  const destinationsType = useAppSelector(commercialSelector).destinationsType;

  const restaurantType = useAppSelector(commercialSelector).restaurantType;
  const restaurantCategory =
    useAppSelector(commercialSelector).restaurantCategory;

  const hotelType = useAppSelector(commercialSelector).hotelType;
  const pointArr = useAppSelector(pointSelector).pointArr;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (pointArr.length === 0) {
      dispatch({ type: "GET_POINT" });
    }
  }, []);
  return (
    <div className="--navBar">
      {router.asPath.includes("Hotel") ? (
        <div className="--map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59025.742842815074!2d103.4046501286144!3d22.387250681156605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36d2a1867bf6f19d%3A0x34cc461c8d0001b8!2zVHAuIExhaSBDaMOidSwgTGFpIENow6J1LCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1666531776427!5m2!1svi!2s"
            width="100%"
            height="132"
            style={{ borderRadius: "3px" }}
            loading="lazy"
          ></iframe>
          <button>Chỉ đường</button>
        </div>
      ) : (
        false
      )}

      <div className="--OptionList">
        <div className="--filTag">
          <div className="--tilte d-flex">
            <h5>Bộ lọc</h5>
            <button>
              Bỏ bộ lọc <i className="fa-solid fa-x"></i>
            </button>
          </div>
          <div className="d-flex --list">
            <Tag className=" filterItem" closable>
              option 1
            </Tag>
            <Tag className=" filterItem" closable>
              option 2
            </Tag>
          </div>
        </div>
        <OptionGroup
          type="district"
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
              type={"tourType"}
              value={filter.tourType}
              title={"Loại hình"}
              optionType={"checkbox"}
              optionArray={tourType.map((item) => ({
                title: item.title,
                value: item.id,
              }))}
            />
            <OptionGroup
              type={"pointArr"}
              value={filter.pointArr}
              title={"Điểm thăm quan"}
              optionType={"checkbox"}
              optionArray={pointArr.map((item) => ({
                title: item.title,
                value: item.id,
              }))}
            />
            <OptionGroup
              type={"destinationsType"}
              value={filter.destinationsType}
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
              type={"restaurantType"}
              value={filter.restaurantType}
              title={"Loại hình ẩm thực"}
              optionType={"checkbox"}
              optionArray={restaurantType.map((item) => ({
                title: item.title,
                value: item.id,
              }))}
            />
            <OptionGroup
              type={"restaurantCategory"}
              value={filter.restaurantCategory}
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
              type={"hotelType"}
              value={filter.hotelType}
              title={"Loại hình"}
              optionType={"checkbox"}
              optionArray={hotelType.map((item) => ({
                title: item.title,
                value: item.id,
              }))}
            />
            <OptionGroup
              type="star"
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
