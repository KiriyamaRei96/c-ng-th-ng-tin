import Link from "next/link";
import * as React from "react";
import { v4 as uuid } from "uuid";

const FooterInfo = ({ footerInfo }) => {
  const address = footerInfo?.articles?.find(
    (item) => item.description === "address"
  );
  const email = footerInfo?.articles?.find(
    (item) => item.description === "email"
  );
  const phone = footerInfo?.articles?.find(
    (item) => item.description === "phone"
  );

  return (
    <div className="footer_info">
      <h1 className="--title">{footerInfo?.title}</h1>
      <ul>
        <li>
          <i className="fa-solid fa-location-dot"></i>
          <div className="--txt">{address?.title}</div>
        </li>
        <li>
          <i className="fa-solid fa-house-chimney"></i>
          <div className="--txt">{address?.subTitle}</div>
        </li>
        <li>
          <i className="fa-solid fa-phone-volume"></i>
          <div className="--txt">
            {phone?.link.split("/").map((number, id) => {
              if (id === 0) {
                return (
                  <a key={uuid()} href={`tel:${number}`}>
                    {number}
                  </a>
                );
              } else if (id > 0) {
                return (
                  <>
                    -
                    <a key={uuid()} href={`tel:${number}`}>
                      {number}
                    </a>
                  </>
                );
              }
            })}
          </div>
        </li>
        <li>
          <Link shallow href="/Contact">
            <a>
              <i className="fa-solid fa-envelope-open"></i>
              <div className="--txt">Email:{email?.title}</div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default FooterInfo;
