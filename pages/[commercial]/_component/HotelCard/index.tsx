import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { v4 as uuid } from "uuid";
export interface HotelCardProps {
  id: number | string;
  img?: string;
  title?: string;
  address?: string;
  rate?: number;
  galaley?: Array<any>;
}

const HotelCard = ({
  id,
  galaley,
  img,
  address,
  rate,
  title,
}: HotelCardProps) => {
  const [current, setCurrent] = useState<number>(0);
  const slider: any = useRef();
  return (
    <div className='hotel d-flex'>
      <div className='--warpper'>
        {galaley?.length > 2 ? (
          <Slider
            ref={slider}
            {...{
              arrows: false,
              slidesToScroll: 1,
              slidesToShow: 1,
              infinite: true,
              afterChange(currentSlide) {
                setCurrent(currentSlide);
              },
            }}
          >
            {galaley.map((item) => (
              <div style={{ width: "100%" }} key={uuid()}>
                <div>
                  <img src={item.path} alt='' />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <img src={`${img}`} alt='' />
        )}
        <div className='--ribbon '>
          <Image src={require("../../../../Asset/baggest.png")} alt='' />
          <span>Best recommend</span>
        </div>
        <div className='--heart'>
          <i className='fa-solid fa-heart'></i>
        </div>
        <ul className='--dots d-flex'>
          {galaley?.map((item, id) => {
            return current === id ? (
              <li
                onClick={() => {
                  slider.current?.slickGoTo(id);
                }}
                key={uuid()}
              >
                <i className='fa-solid fa-circle'></i>
              </li>
            ) : (
              <li
                onClick={() => {
                  slider.current?.slickGoTo(id);
                }}
                key={uuid()}
              >
                <i className='fa-regular fa-circle'></i>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='--item d-flex'>
        <Link href={`/Hotel/detail~${id}`}>
          <h5>{title}</h5>
        </Link>

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
            <i className='fa-solid fa-eye'></i>
            120
          </div>
        </div>
      </div>
    </div>
  );
};
export default HotelCard;
