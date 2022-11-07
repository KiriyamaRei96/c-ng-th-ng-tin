import { Rate } from "antd";
import Link from "next/link";
import * as React from "react";

export interface HotelCardProps {
  id: number | string;
  img?: string;
  title?: string;
  address?: string;
  rate?: number;
}

const HotelCard = ({ id, img, address, rate, title }: HotelCardProps) => {
  return (
    <Link href={`/Hotel/detail~${id}`}>
      <div className='hotel d-flex'>
        <div className='--warpper'>
          <img src={`${img}`} alt='' />
          <div className='--ribbon '>
            <img
              src='https://s3-alpha-sig.figma.com/img/178b/3d37/402a5cb00f2124d2e5ebed58480f897d?Expires=1667779200&Signature=EaF5UmFPmPTBbjRMUDxjqjcwt7wO0PFyIGlspIbVceLSLZFl9dhsbVIFCEV-KM4Zq-ZrKHQY5u5SaOlHdBoC0CHV3X8U6GZxSWHp8rOssroRNu21xzLc-0p5a~cFwbC0lTImAjPXF7~k2R44sqn4IzDiVlj4920khEOBca8D~BCsjtzTj8Pmod-u8hkfmwiBDG~bXVzzkt~DngD3beAxhwcOi3l~RYCWtW-RAWO8Bqw2ZoosW-QKXuS2gWANe~Frx77BjsUNq3RV7hx5ASlOoQRbiOoBGE3rMOvJ0trXEWvddaOJEGZkxvB5dmFFFrFtcDgnizPiBIRI7RZAq~zDrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              alt=''
            />
            <span>Best recommend</span>
          </div>
          <div className='--item'>
            <i className='fa-solid fa-heart'></i>
          </div>
          <ul className='--dots d-flex'>
            <li>
              <i className='fa-solid fa-circle'></i>
            </li>
            <li>
              <i className='fa-regular fa-circle'></i>
            </li>
            <li>
              <i className='fa-regular fa-circle'></i>
            </li>
            <li>
              <i className='fa-regular fa-circle'></i>
            </li>
          </ul>
        </div>
        <div className='--item d-flex'>
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
              <i className='fa-solid fa-eye'></i>
              120
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default HotelCard;
