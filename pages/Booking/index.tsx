import { Modal } from "antd";
import React, { useState } from "react";
import callApi from "../../Api/Axios";
import BookingCard from "../../components/BookingCard";
import BreadCrumb from "../../components/BreadCrumb";
import { mapB } from "../../components/img";
import commercialSelector from "../../ReduxStore/commercial/slice";
import globalSelector from "../../ReduxStore/globalSlice/slice";
import { useAppSelector } from "../../ReduxStore/hooks";
import List from "../[commercial]/_component/List/List";
import MapModal from "./_component/MapModal";
import BookingWrapper from "./_component/styled/style";
export async function getServerSideProps(context) {
  const res = await callApi
    .get(`/v2/page/Booking?locale=${context.locale}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));

  const banner = await res.data?.snippets?.find(
    (item) => item["snippet_name"] === "banner"
  );

  return {
    props: {
      banner,
    },
  };
}
export interface BookingProps {
  banner?: any;
}

const Booking = ({ banner }: BookingProps) => {
  const searchArr = useAppSelector(commercialSelector).searchArr;
  const settingMap = useAppSelector(globalSelector).settingMap;
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <BookingWrapper>
        <div id="booking">
          <div className="Banner d-flex">
            <img src={banner?.image?.path} alt=""></img>
            <div className="--Item">
              <h1>{banner?.title}</h1>

              <BreadCrumb />
            </div>
          </div>
          <div className="container-fluid">
            <div className="pageBody row ">
              <div className=" cardbook col-md-3 ">
                <BookingCard />
              </div>
              <div className="--content  col-md-9">
                <div className="d-flex justify-content-between --top">
                  <h2>
                    {searchArr.length} {settingMap.infoFound}{" "}
                  </h2>
                  <div className="wrapper">
                    <img src={mapB.default.src} alt="" />
                    <button
                      onClick={() => {
                        setOpen(true);
                      }}
                      className="button_hover1 button_1"
                    >
                      Hiển thị trên bản đồ
                    </button>
                  </div>
                </div>
                <List List={""} />
              </div>
            </div>
          </div>
        </div>
      </BookingWrapper>

      <MapModal setOpen={setOpen} open={open} />
    </>
  );
};
export default Booking;
