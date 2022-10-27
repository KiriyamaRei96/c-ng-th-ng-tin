import { Rate } from "antd";
import Link from "next/link";
import * as React from "react";

export interface RestaurantCardProps {}

const RestaurantCard = (props: RestaurantCardProps) => {
  return (
    <Link href="/Restaurant/1">
      <div className="restaurant d-flex">
        <div className="img-wrapper">
          <img
            src="https://s3-alpha-sig.figma.com/img/3c31/f251/ed1cd2a47eb07e082dc81aa3fd05f096?Expires=1667779200&Signature=dNFVDO6bDfMxTdQx7KULJqW1hk3~AXEOirFHazZxNL9khd2yeoal0x28woUVemJQnaGDZxxLLu5EcS9tPCJXdP8p8evhiEhp3Z49GcDpnskLrfkVKuqa25M01XSwkN4wbv1HtxrAcFC~C9REUPYHnzEp43UyUi47loIr~LoI~S06C2yW~eLVmVr6XYV2sSLnkbjE~cnlKjdqgnYAAqT1jE5XKTnjySuS-R1BlSEkWqEHWFMBWb6Xvpk69OauoU6FvHTTVABiXoowAfTsscVS-QoSTZeHVuqnBqtwHBBseD8gZXM9LepSsZvqjmruTGTB6VafXKLc4r9UO-~T9rhUtw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
        </div>
        <div className="--cotent">
          <h5>Nhà hàng Hoàng Nhâm (Thuộc Hoang Nham Luxury Hotel)</h5>
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
export default RestaurantCard;
