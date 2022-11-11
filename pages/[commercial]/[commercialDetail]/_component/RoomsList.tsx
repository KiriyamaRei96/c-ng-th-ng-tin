import React from "react";
import { v4 as uuid } from "uuid";
const RoomsList = ({ rooms }) => {
  console.log(rooms);
  return (
    <div className='inforoom'>
      <div className='--item d-flex'>
        <div className='--img img_hover'>
          <img src='../img/banner.png' alt='' />
        </div>
        <div className='--txt'>
          <div className='--top d-flex justify-content-between'>
            <h6>Phòng Deluxe Giường Đôi</h6>
            <div className='--price'>868.000 VND</div>
          </div>
          <article>
            Thông tin phòng Giường Đôi - 2 người 2 khác Tiện nghi trong phòng:
            Trang bị đầy đủ tiện nghi: nước suối, trà, cà phê miễn phí, truyền
            hình cáp, Wi-Fi miễn phí, điện thoại IDD, máy lạnh, tủ quần áo, mini
            bar, máy sấy tóc, ấm đun nước điện, vòi hoa sen, móc treo, khăn tắm,
            phòng vệ sinh với vòi hoa sen đi bộ...
          </article>
        </div>
      </div>
    </div>
  );
};
export default RoomsList;
