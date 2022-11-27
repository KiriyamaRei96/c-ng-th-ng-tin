import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import globalSelector from "../../ReduxStore/globalSlice/slice";
import { useAppSelector } from "../../ReduxStore/hooks";

export interface BreadCrumbProps {}

const BreadCrumb = (prop: BreadCrumbProps) => {
  const router = useRouter();
  const settingMap = useAppSelector(globalSelector).settingMap;
  console.log(router.asPath.replace("/", ""));
  return (
    <div className="breadcrumb d-flex">
      <Link shallow href="/">
        <a>{settingMap.Home}</a>
      </Link>

      {router.asPath.split("/").length === 2 ? (
        <>
          <i className="devider fa-solid fa-angle-right"></i>
          <span>{settingMap[router.asPath.replace("/", "")]}</span>
        </>
      ) : (
        false
      )}
      {router.asPath.split("/").length > 2 ? (
        <>
          <i className="devider fa-solid fa-angle-right"></i>
          <Link shallow href={`/${router.asPath.split("/")[1]}`}>
            <a>{settingMap[router.asPath.split("/")[1]]}</a>
          </Link>
          <i className="devider fa-solid fa-angle-right"></i>
          <span>{settingMap.detail}</span>
        </>
      ) : (
        false
      )}
    </div>
  );
};
export default BreadCrumb;
