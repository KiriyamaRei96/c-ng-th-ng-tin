import React from "react";

export interface LeftProps {
  article: any;
}

const Left = ({ article }: LeftProps) => {
  const Hotline = article?.find((item) => item.description === "Hotline");
  const Email = article?.find((item) => item.description === "Email");
  const Address = article?.find((item) => item.description === "Address");

  return (
    <div className='--left'>
      <ul>
        <li>
          <h4 className='--title'>{Address.title}</h4>
          <span>
            <i className='fa-solid fa-location-dot'></i>
            {Address.subTitle}
          </span>
        </li>
        <li>
          <span>{Email.title}</span>
          <a href=''>
            <i className='fa-solid fa-envelope'></i>
            {Email.subTitle}
          </a>
        </li>
        <li>
          <span>{Hotline.title}</span>
          <a href=''>
            <i className='fa-solid fa-phone'></i>
            {Hotline.subTitle}
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Left;
