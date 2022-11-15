import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import globalSelector from "../../ReduxStore/globalSlice/slice";
import { useAppSelector } from "../../ReduxStore/hooks";

export interface BreadCrumbProps {}

const BreadCrumb = (prop: BreadCrumbProps) => {
  const router = useRouter();
  const settingMap = useAppSelector(globalSelector).settingMap;
  return (
    <div className='breadcrumb d-flex'>
      <Link href='/'>
        <a>{settingMap.Home}</a>
      </Link>

      {router.asPath.split("/").length === 2 ? (
        <>
          <i className='devider fa-solid fa-angle-right'></i>
          <span>{settingMap[router.asPath.replace("/", "")]}</span>
        </>
      ) : (
        false
      )}
      {router.asPath.split("/").length > 2 ? (
        <>
          <i className='devider fa-solid fa-angle-right'></i>
          <Link href={`/${router.asPath.split("/")[1]}`}>
            <a>{settingMap[router.asPath.split("/")[1]]}</a>
          </Link>
          <i className='devider fa-solid fa-angle-right'></i>
          <span>Chi tiết</span>
        </>
      ) : (
        false
      )}
    </div>
  );
};
export default BreadCrumb;
