import Image from "next/image";
import React, { useEffect, useState } from "react";
import callApi from "../../Api/Axios";
import globalSelector from "../../ReduxStore/globalSlice/slice";
import { useAppDispatch, useAppSelector } from "../../ReduxStore/hooks";
import { v4 as uuid } from "uuid";
import utilitiesSelector from "../../ReduxStore/utilitieSlice/slice";
import useDebounce from "../../funcion/debounce";
import Map from "../../components/Map";
import Link from "next/link";
import { useRouter } from "next/router";
import UtilitiesWrapper from "./_component/styled/style";
export async function getServerSideProps(context) {
  // page
  const page = await callApi
    .get(`/v2/page/Utilities?locale=${context.locale}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  return {
    props: {
      page: page?.data,
    },
  };
}

const Utilities = ({ page }) => {
  const districtArr = useAppSelector(globalSelector).districtArr;
  const utilitiesType = useAppSelector(utilitiesSelector).utilitiesType;
  const searchArr = useAppSelector(utilitiesSelector).searchArr;
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("sort");
  const debouncedSearchTerm = useDebounce(search, 500);
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    if (utilitiesType.length === 0) {
      dispatch({ type: "GET_UTILITIES_TYPE" });
    }
  }, [utilitiesType, router.locale]);
  useEffect(() => {
    const payload = {
      page: 1,
      limit: 100000,
      district,
      search: debouncedSearchTerm,
      sort,
      "utilitiesType[]": type,
    };
    Object.keys(payload).forEach((key) => {
      if (key !== "search" && payload[key] === "") {
        delete payload[key];
      }
    });
    dispatch({
      type: "SEARCH_UTILITIES",
      payload,
    });
  }, [debouncedSearchTerm, district, type, sort, router.locale]);
  const settingMap = useAppSelector(globalSelector).settingMap;
  return (
    <UtilitiesWrapper>
      <div id='uti'>
        <div className='utiMap'>
          <div className='container-fluid'>
            <h1 className='Title'>{page?.title}</h1>
            <div className='filter d-flex justify-content-between'>
              <div className='search'>
                <input
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  value={search}
                  type='text'
                  placeholder={settingMap.searchPlaceHolder2}
                />
                <i className='fa-solid fa-magnifying-glass'></i>
              </div>
              <div className='--filter d-flex'>
                <div className='--item d-flex align-items-center'>
                  <span>
                    <Image src={require("../../Asset/icon-11.svg")} alt='' />
                    {settingMap.filter}
                  </span>
                  <select
                    value={district}
                    onChange={(e) => {
                      setDistrict(e.target.value);
                    }}
                    name=''
                    id=''
                  >
                    <option value=''>{settingMap.selectDistrict}</option>
                    {districtArr?.map((item) => (
                      <option key={uuid()} value={item?.id}>
                        {item?.title}
                      </option>
                    ))}
                  </select>
                  <select
                    value={type}
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                    name=''
                    id=''
                  >
                    <option value=''>{settingMap.utilitieType}</option>
                    {utilitiesType?.map((item) => (
                      <option key={uuid()} value={item?.id}>
                        {item?.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='--item d-flex align-items-center'>
                  <span>
                    <Image src={require("../../Asset/icon-11.svg")} alt='' />
                    {settingMap.Sort}
                  </span>

                  <select
                    value={sort}
                    onChange={(e) => {
                      setSort(e.target.value);
                    }}
                    name=''
                    id=''
                  >
                    <option value='o_creationDate'>
                      {settingMap.sortcreationDate}
                    </option>
                    <option value='sort'>{settingMap.sortOrder}</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='--content'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='list_utiMap'>
                    {searchArr?.map((item) => (
                      <div
                        key={uuid()}
                        className='--item d-flex align-items-center justify-content-between'
                      >
                        <div className='--txt'>
                          <h6>{item?.title}</h6>
                          <ul>
                            <li>
                              <div className='--icon'>
                                <Image
                                  src={require("../../Asset/icon-map2.svg")}
                                  alt=''
                                />
                              </div>
                              <span>{item.address}</span>
                            </li>
                            <li>
                              <div className='--icon'>
                                <Image
                                  src={require("../../Asset/icon-12.svg")}
                                  alt=''
                                />
                              </div>
                              <span>C??ch b???n 3km</span>
                            </li>
                          </ul>
                        </div>
                        <Link href={`/Utilities/detail~${item.id}`}>
                          <a className='arrow_hover'>
                            <Image
                              src={require("../../Asset/navigation.svg")}
                              alt=''
                            />
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='--map'>
                    {<Map height='450px' arr={searchArr} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UtilitiesWrapper>
  );
};
export default Utilities;
