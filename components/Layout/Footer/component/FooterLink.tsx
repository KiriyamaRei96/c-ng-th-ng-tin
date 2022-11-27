import Link from "next/link";
import React from "react";
import { v4 as uuid } from "uuid";
const FooterLink = ({ footerLink }) => {
  return (
    <div className="footer_link footer_link1">
      <h4 className="--title">{footerLink?.title}</h4>
      <ul>
        {footerLink?.articles?.map((item) => (
          <li key={uuid()}>
            <Link shallow href={item?.link}>
              <a>
                <i className="fa-solid fa-angle-right"></i>
                {item?.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterLink;
