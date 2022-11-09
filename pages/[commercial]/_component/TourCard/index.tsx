import Link from "next/link";
import * as React from "react";

export interface TourCardProps {
  img?: String;
  tilte?: String;
  plan?: String;
  pointCategory?: String;
  id: number | string;
}

const TourCard = ({ id, img, tilte, plan, pointCategory }: TourCardProps) => {
  return (
    <Link href={`/Tour/detail~${id}`}>
      <div className='tour'>
        <div className="--img img_hover">
        <img src={`${img}`} alt='' />
        </div>
        <div className="--txt">
          <h4>{tilte}</h4>
          <span>{plan}</span>
          <div className='divider'></div>
          <div className='Info d-flex'>
            <span className='date'>
              <i className='fa-solid fa-calendar-days'></i>
              2N1Đ
            </span>
            <i className='fa-solid fa-circle divider'></i>
            <span className='view'>
              <i className='fa-solid fa-location-dot'></i>
              {pointCategory}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default TourCard;
