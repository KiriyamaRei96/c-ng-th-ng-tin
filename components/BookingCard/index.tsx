import React, { useEffect, useState } from "react";
import globalSelector from "../../ReduxStore/globalSlice/slice";
import { useAppSelector } from "../../ReduxStore/hooks";
import { v4 as uuid } from "uuid";
import { DatePicker } from "antd";
import moment from "moment";
export interface BookingCardProps {}

const BookingCard = (props: BookingCardProps) => {
  const districtArr = useAppSelector(globalSelector).districtArr;
  const [location, setLocation] = useState<string>("");
  const [date, setDate] = useState<any>(moment().format("YYYY-MM-DD"));

  return (
    <div className="--schedule ">
      <h3>Đặt chuyến đi của bạn</h3>
      <div className="--tab d-flex ">
        <div className="--item active">Khách sạn</div>
        <div className="--item">Thuê xe</div>
        <div className="--item">Xe Buýt</div>
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="">Điểm đến: </label>
          <div className="--select">
            <div className="--icon">
              <i className="potision fa-solid fa-location-dot"></i>
            </div>
            <select
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              className="form-control"
              value={location}
              name=""
              id=""
            >
              <option key={uuid()} value="">
                Chọn địa điểm
              </option>
              {districtArr.map((item) => (
                <option key={uuid()} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
            <i className="fa-sharp fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="">Check - in: </label>
          <div className="--select">
            <div className="--icon">
              <i className=" potision fa-regular fa-calendar"></i>
            </div>

            <input
              type="date"
              value={date}
              placeholder="Chọn thời gian nhận phòng"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className="form-control"
              name=""
              id=""
            ></input>
            <i className="fa-sharp fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="">With:</label>
          <div className="--select">
            <div className="--icon">
              <i className=" potision fa-regular fa-calendar"></i>
            </div>
            <select className="form-control" name="" id="">
              <option value="">1 đêm</option>
              <option value="">2 đêm</option>
              <option value="">3 đêm</option>
              <option value="">4 đêm</option>
              <option value="">5 đêm</option>
            </select>
            <i className="fa-sharp fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="">Điểm đến: </label>
          <div className="--select">
            <div className="--icon">
              <i className="potision fa-regular fa-pen-to-square"></i>
            </div>
            <select className="form-control" name="" id="">
              <option value="">Booking.com</option>
            </select>
            <i className="fa-sharp fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <button className="button_1 button_hover1">
        <i className="fa-sharp fa-solid fa-magnifying-glass"></i> Tìm kiếm
      </button>
    </div>
  );
};
export default BookingCard;
