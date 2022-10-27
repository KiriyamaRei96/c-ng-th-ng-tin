import * as React from "react";

export interface TourCardProps {}

const TourCard = (props: TourCardProps) => {
  return (
    <div className='tour'>
      <img
        src='https://s3-alpha-sig.figma.com/img/4240/6d23/5929410165f69cffef9df49d39f6d165?Expires=1667779200&Signature=DK5EvCM9TWgrO7RMyyBy6ltzu3AIblUQ0WYHsAEkluiNQtExRRRwpRMZ0bEmq-nBbRHxptpEZH7LwQNogIwBNIMGmVab2kXvdmIfPbKuoAJD95HDbArLS1D5IUCoJUbLKm2ipvhKbbsSGaAD93Ru5EqFrOrEO6xSculexI1m1QmS~kLvedHott6IeiSe2u9rYE4OABPbF6j8PmEJrAC6pLmuO7vib1BgByxsfEJyWjBt2kaMsMAlGkUDHLdDsjRGmcT4e-sCk54LZDU61SZIaTQNu81-haX9KObkxPkEKugJSOu5szCczdUT8a8KK8jH6uswG0KP3WrpyXi8sTkqUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        alt=''
      />
      <div>
        <h4>Du lịch đèo Quy Hồ - Động Phu Cáp</h4>
        <span>
          Thời gian : 4 ngày 3 đêm
          <br /> Phương tiện: Đi về bằng xe
          <br />- Khởi hành: thứ 5 và thứ 7 hàng tuần - Tham quan không gian...
        </span>
        <div className='divider'></div>
        <div className='Info d-flex'>
          <span className='date'>
            <i className='fa-solid fa-calendar-days'></i>
            2N1Đ
          </span>
          <i className='fa-solid fa-circle divider'></i>
          <span className='view'>
            <i className='fa-solid fa-location-dot'></i>3 Điểm đến
          </span>
        </div>
      </div>
    </div>
  );
};
export default TourCard;
