import { Rate } from "antd";
import Link from "next/link";
import * as React from "react";

export interface HotelCardProps {}

const HotelCard = (props: HotelCardProps) => {
  return (
    <Link href="/Hotel/1">
      <div className="hotel d-flex">
        <div className="--warpper">
          <img
            src="https://s3-alpha-sig.figma.com/img/dfa2/36ff/d7344379c0091403f0dfbba59efcd7b4?Expires=1667779200&Signature=bzw3B4Zvhmv5GV1bSutE1o51jEJqyLoaYHj2JQ5vhEst0igvollJ3-orRBg~fc91CyfGZK83xA0iHDLOUx0OeSrnFz8erv3E~NoIEFJeCbuh8lWyTCEx4oTOkHLJl0-IF-vWWkd2ypuzXKvuapwzccuyDJ2ArjigyuKQxbC6m2E-LpZHFy5FO4Igs8mwSd-w5FnLm-Zkel5L3KQfVAo2ER9p8gwGs61U-XOPL0G9DeWxXN6b1ONd9JhpBix5AYy0lb6oTGIHcHUAy14RTXAga7I8kOCbXaXdLOKLUWS9I87AnxZZ3bwgTTkl~l1Li4vJqaKji2ra9A8ld5kcUngFNA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
          <div className="--ribbon ">
            <img
              src="https://s3-alpha-sig.figma.com/img/178b/3d37/402a5cb00f2124d2e5ebed58480f897d?Expires=1667779200&Signature=EaF5UmFPmPTBbjRMUDxjqjcwt7wO0PFyIGlspIbVceLSLZFl9dhsbVIFCEV-KM4Zq-ZrKHQY5u5SaOlHdBoC0CHV3X8U6GZxSWHp8rOssroRNu21xzLc-0p5a~cFwbC0lTImAjPXF7~k2R44sqn4IzDiVlj4920khEOBca8D~BCsjtzTj8Pmod-u8hkfmwiBDG~bXVzzkt~DngD3beAxhwcOi3l~RYCWtW-RAWO8Bqw2ZoosW-QKXuS2gWANe~Frx77BjsUNq3RV7hx5ASlOoQRbiOoBGE3rMOvJ0trXEWvddaOJEGZkxvB5dmFFFrFtcDgnizPiBIRI7RZAq~zDrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
            />
            <span>Best recommend</span>
          </div>
          <div className="--item">
            <i className="fa-solid fa-heart"></i>
          </div>
          <ul className="--dots d-flex">
            <li>
              <i className="fa-solid fa-circle"></i>
            </li>
            <li>
              <i className="fa-regular fa-circle"></i>
            </li>
            <li>
              <i className="fa-regular fa-circle"></i>
            </li>
            <li>
              <i className="fa-regular fa-circle"></i>
            </li>
          </ul>
        </div>
        <div className="--item d-flex">
          <h5>La Sinfonia del Rey Hotel & Spa</h5>
          <div className="--andress d-flex">
            <i className="fa-solid fa-location-dot"></i>
            <span>
              69, đường Điện Biên Phủ, phường Tân Phong, thành phố Lai Châu
            </span>
          </div>

          <div className="ranks d-flex">
            <div>
              <Rate disabled defaultValue={5}></Rate>
              <span>3.5</span>
            </div>

            <div className="views">
              <i className="fa-solid fa-eye"></i>
              120
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default HotelCard;
