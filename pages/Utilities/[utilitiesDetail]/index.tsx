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
import ShareBox from "../../../components/ShareBox";
import globalSelector from "../../../ReduxStore/globalSlice/slice";
import { useAppSelector } from "../../../ReduxStore/hooks";
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
  const settingMap = useAppSelector(globalSelector).settingMap;
  return (
    <UtilitiesDetailWrapper>
      <div id="detailuti">
        <div className="detailutiContent">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9">
                <div className="--left">
                  <div className="subTitle">{settingMap.detailUtilities}</div>
                  <h1 className="Title">{data?.title}</h1>
                  <ul>
                    <li>
                      <span>{settingMap.address}</span>
                      <span>
                        <i className="fa-solid fa-location-dot"></i>
                        {data?.address}
                      </span>
                    </li>
                    <li>
                      <a href="">
                        <span>{settingMap.utilitieType}</span>
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
                  <div className="--backshare d-flex justify-content-between">
                    <a
                      onClick={(e) => {
                        router.back();
                      }}
                      className="--back"
                    >
                      <img src={iconBack.default.src} alt="" />
                      {settingMap.return}
                    </a>
                    <ShareBox />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="--right">
                  <Map height="450px" arr={[data]} />
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
