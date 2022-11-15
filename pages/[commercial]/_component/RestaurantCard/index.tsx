import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface RestaurantCardProps {
  id: number | string;
  img?: string;
  title?: string;
  address?: string;
  rate?: number;
  view?: number;
}

const RestaurantCard = ({
  id,
  img,
  title,
  address,
  rate,
  view,
}: RestaurantCardProps) => {
  return (
    <Link href={`/Restaurant/detail~${id}}`}>
      <div className='restaurant d-flex img_hover'>
        <div className='img-wrapper'>
          <div className='--img'>
            <img src={`${img}`} alt='' />
          </div>

          <div className='--top'>
            <div className='--ribbon '>
              <Image src={require("../../../../Asset/baggest.png")} alt='' />
              <span>Best recommend</span>
            </div>
            <div className='--item'>
              <i className='fa-solid fa-heart'></i>
            </div>
          </div>
        </div>
        <div className='--cotent'>
          <h5>{title}</h5>
          <div className='--andress d-flex'>
            <i className='fa-solid fa-location-dot'></i>
            <span>{address}</span>
          </div>
          <div className='ranks d-flex'>
            <div>
              <Rate disabled defaultValue={rate}></Rate>
              <span>{rate}</span>
            </div>

            <div className='views'>
              <i className='fa-solid fa-eye'></i> {view}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default RestaurantCard;
