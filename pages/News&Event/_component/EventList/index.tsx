import { Pagination } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import globalSelector from "../../../../ReduxStore/globalSlice/slice";
import { useAppDispatch, useAppSelector } from "../../../../ReduxStore/hooks";
import newsEventsSelector from "../../../../ReduxStore/newSlice/slice";
export interface EventsListProps {
  eventsArr?: Array<any>;
}
const EventsList = ({}: EventsListProps) => {
  const eventsArr = useAppSelector(newsEventsSelector).eventsArr;
  const eventPagination = useAppSelector(newsEventsSelector).eventPagination;
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const list: any = useRef();
  const settingMap = useAppSelector(globalSelector).settingMap;
  useEffect(() => {
    dispatch({ type: "GET_EVENTS", payload: page });
  }, [page, router.locale]);
  return (
    <>
      <div ref={list} className='row'>
        {eventsArr?.map((item) => (
          <Link key={uuid()} href={`/News&Event/event/detail~${item.id}`}>
            <div className='col-md-4 eventCard'>
              <div className='--item img_hover1 '>
                <div className='--img '>
                  <img src={item.featureImage?.path} alt='' />
                </div>

                <div className='--txt'>
                  {item.tag[0] ? (
                    <span className='--tag d-flex'>{item.tag[0]}</span>
                  ) : (
                    false
                  )}

                  <h5>{item.title}</h5>
                  <div className='Info'>
                    <span className='date'>
                      <i className='fa-solid fa-calendar-days'></i>
                      {settingMap.onDay} {item.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        className='--pagination'
        itemRender={(_, type, originalElement) => {
          if (type === "prev") {
            return <i className='fa-solid fa-angles-left'></i>;
          }
          if (type === "next") {
            return <i className='fa-solid fa-angles-right'></i>;
          }
          return originalElement;
        }}
        onChange={(e) => {
          const top = list?.current?.offsetTop;
          setPage(e);
          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }}
        current={eventPagination.current}
        total={eventPagination.totalCount}
        pageSize={6}
      ></Pagination>
    </>
  );
};
export default EventsList;
