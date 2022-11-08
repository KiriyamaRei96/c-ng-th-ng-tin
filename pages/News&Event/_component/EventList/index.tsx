import { Pagination } from "antd";
import Link from "next/link";
import * as React from "react";
import { v4 as uuid } from "uuid";
import { useAppSelector } from "../../../../ReduxStore/hooks";
import newsEventsSelector from "../../../../ReduxStore/newSlice/slice";
export interface EventsListProps {
  eventsArr?: Array<any>;
}
const EventsList = ({}: EventsListProps) => {
  const eventsArr = useAppSelector(newsEventsSelector).eventsArr;
  return (
    <div className="row">
      {eventsArr.map((item) => (
        <Link key={uuid()} href={`/News&Event/event/detail~${item.id}`}>
          <div className="col-md-4">
            <div className="--item ">
              <img src={item.featureImage?.path} alt="" />
              <div>
                <span className="--tag d-flex">
                  {item.tag[0] ? item.tag[0] : "Chưa phân loại"}
                </span>
                <h5>{item.title}</h5>
                <div className="Info">
                  <span className="date">
                    <i className="fa-solid fa-calendar-days"></i>
                    Diễn ra ngày {item.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
      <Pagination
        className="--pagination"
        itemRender={(_, type, originalElement) => {
          if (type === "prev") {
            return <i className="fa-solid fa-angles-left"></i>;
          }
          if (type === "next") {
            return <i className="fa-solid fa-angles-right"></i>;
          }
          return originalElement;
        }}
        // onChange={(e) => {
        //   const top = list?.current?.offsetTop;
        //   window.scrollTo({
        //     top,
        //     behavior: "smooth",
        //   });
        //   setPage(e);
        // }}
        // current={pagination.current}
        // total={pagination.totalCount}
        pageSize={6}
      ></Pagination>
    </div>
  );
};
export default EventsList;
