import Link from "next/link";
import React from "react";

export interface BreadCrumbProps {
  router: String | undefined;
}

const BreadCrumb = ({ router }: BreadCrumbProps) => {
  return (
    <div className="breadcrumb d-flex">
      <Link href="/">
        <span>Home</span>
      </Link>
      <i className="devider fa-solid fa-angle-right"></i>

      <span>{router.replace("/", "")}</span>
    </div>
  );
};
export default BreadCrumb;
