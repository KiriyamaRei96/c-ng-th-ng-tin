import React from "react";
import { v4 as uuid } from "uuid";
const RoomsList = ({ rooms }) => {
  console.log(rooms);
  return (
    <div className='room-list d-flex'>
      {rooms?.map((room) => (
        <div className='--item' key={uuid()}></div>
      ))}
    </div>
  );
};
export default RoomsList;
