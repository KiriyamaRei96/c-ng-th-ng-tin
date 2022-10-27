import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import CommercialWrapper from "./_component/_Style/style";
import BreadCrumb from "../../components/BreadCrumb";
import Navbar from "./_component/Navbar";
import { Pagination, Select } from "antd";
import TourCard from "./_component/TourCard";
import { v4 as uuid } from "uuid";
import HotelCard from "./_component/HotelCard";
import RestaurantCard from "./_component/RestaurantCard";
export interface HotelProps {}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commercial: "Hotel" } },
      { params: { commercial: "Tour" } },
      { params: { commercial: "Restaurant" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: {},
  };
}
export default function Hotel(props: HotelProps) {
  const router = useRouter();
  console.log(router.asPath);
  const testArr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
  return (
    <CommercialWrapper>
      <div id='hotel'>
        <div className='Banner d-flex'>
          <img
            src='https://s3-alpha-sig.figma.com/img/d8ac/63e6/03b01bdd9c92c6ccc3fe3f2d56f90502?Expires=1667779200&Signature=Rnbo00VPHCwYeRxdp3xCXeVCoWRHtSpYT2m5mHgBmB5Olf3P-5cDGXuj0mvU~j9F-BhXq9~oxYiosMBFAFvGeq~iIG0Em625jWr-MmAoQRs-gL2Ek9ncnv9~pU~cfQOlTGC1Yc7TKNf5BRteRog8tLoryJFz6q~6JVkiMwpUt9PH4M3Gx~PfWTJO0A5iwVrvaVz9QPZ2fHMuXLMIqTuaEnjIuealoaSn42v3ipIbi15H~3xOs-08OC~BC5TIfvelayGWHpCxFMBOxzpBwCWH-4lY26cLSpNk7FARDxknFh2g7-d5OASdmsuLj9FRnsy-Ge6UtRNMqNd5cY8XlaXQDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            alt=''
          ></img>
          <div className='--Item'>
            {router.asPath.includes("Tour") ? <h1>Lữ Hành</h1> : false}
            {router.asPath.includes("Hotel") ? <h1>Khách Sạn</h1> : false}
            {router.asPath.includes("Restaurant") ? <h1>Ẩm Thực</h1> : false}

            <BreadCrumb router={router.asPath} />
          </div>
        </div>
        <div className='pageBody'>
          <Navbar />
          <div className='--content'>
            {!router.asPath.includes("Restaurant") ? (
              <div className='search d-flex'>
                <div className='--input'>
                  <input type='text' placeholder='nhập để tìm kiếm' />
                  <i className='fa-solid fa-magnifying-glass'></i>
                </div>
                <div className='--select'>
                  <span>Sắp xếp</span>
                  <Select className='--item' defaultValue={"1"}>
                    <Select.Option value='1'>Gần nhất</Select.Option>
                  </Select>
                </div>
              </div>
            ) : (
              false
            )}
            {router.asPath.includes("Tour") ? <h2>Tour nổi bật</h2> : false}

            {router.asPath.includes("Tour") ? (
              <div className='--list --tour'>
                {testArr.map((i) => (
                  <TourCard key={uuid()} />
                ))}
              </div>
            ) : (
              false
            )}
            {router.asPath.includes("Hotel") ? (
              <div className='--list --Hotel'>
                {testArr.map((i) => (
                  <HotelCard key={uuid()} />
                ))}
              </div>
            ) : (
              false
            )}
            {router.asPath.includes("Restaurant") ? (
              <div className='--list --Restaurant'>
                {testArr.map((i) => (
                  <RestaurantCard key={uuid()} />
                ))}
              </div>
            ) : (
              false
            )}

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
              total={48}
              pageSize={6}
            />
          </div>
        </div>
      </div>
    </CommercialWrapper>
  );
}
