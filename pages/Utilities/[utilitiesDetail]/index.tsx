import { useRouter } from "next/router";
import React, { useReducer } from "react";
import callApi from "../../../Api/Axios";
import BreadCrumb from "../../../components/BreadCrumb";
import {
  iconBack,
  iconFB,
  iconGG,
  iconIN,
  iconTW,
} from "../../../components/img";
import Map from "../../../components/Map";
import UtilitiesDetailWrapper from "./_component/styled/style";
export async function getServerSideProps(context) {
  const id = context.query?.utilitiesDetail?.replace("detail~", "");

  const res = await callApi
    .get(`/v2/utilities_detail/${id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  const data = await res.data;

  return {
    props: { data },
  };
}

const UtilitiesDetail = ({ data }) => {
  const router = useRouter();
  return (
    <UtilitiesDetailWrapper>
      <div id='detailuti'>
        <div className='detailutiContent'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-9'>
                <div className='--left'>
                  <div className='subTitle'>Chi tiết Sự kiện</div>
                  <h1 className='Title'>{data?.title}</h1>
                  <ul>
                    <li>
                      <span>Địa chỉ</span>
                      <span>
                        <i className='fa-solid fa-location-dot'></i>
                        {data?.address}
                      </span>
                    </li>
                    <li>
                      <a href=''>
                        <span>Loại tiện ích</span>
                        <span>{data?.utilitiesType[0]?.title}</span>
                      </a>
                    </li>
                    {/* <li>
                      <a href=''>
                        <span>Hotline</span>
                        <span>
                          <i className='fa-solid fa-phone'></i>0213.3877.727
                        </span>
                      </a>
                    </li> */}
                  </ul>
                  <article
                    dangerouslySetInnerHTML={{ __html: data?.content }}
                  ></article>
                  <div className='--backshare d-flex justify-content-between'>
                    <a
                      onClick={(e) => {
                        router.back();
                      }}
                      className='--back'
                    >
                      <img src={iconBack.default.src} alt='' /> Quay lại
                    </a>
                    <ul>
                      <li>Chia sẻ:</li>
                      <li>
                        <a href=''>
                          <img src={iconTW.default.src} alt='' />
                        </a>
                      </li>
                      <li>
                        <a href=''>
                          <img src={iconFB.default.src} alt='' />
                        </a>
                      </li>
                      <li>
                        <a href=''>
                          <img src={iconIN.default.src} alt='' />
                        </a>
                      </li>
                      <li>
                        <a href=''>
                          <img src={iconGG.default.src} alt='' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='--right'>
                  <Map height='450px' arr={[data]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UtilitiesDetailWrapper>
  );
};
export default UtilitiesDetail;
