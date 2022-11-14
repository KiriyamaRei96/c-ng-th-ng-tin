import React from "react";
import { v4 as uuid } from "uuid";
const RoomsList = ({ rooms }) => {
  console.log(rooms);
  return (
    <div className='inforoom'>
      <div className='--item d-flex'>
        <div className='--img img_hover'>
          <img src={rooms?.galleries[0]?.path} alt='' />
        </div>
        <div className='--txt'>
          <div className='--top d-flex justify-content-between'>
            <h6>{rooms?.tilte}</h6>
            <div className='--price'>{rooms?.price}</div>
          </div>
          <article
            dangerouslySetInnerHTML={{ __html: rooms?.content }}
          ></article>
        </div>
      </div>
    </div>
  );
};
export default RoomsList;
