import React, { useEffect, useRef, useState } from "react";
import logo from "../../pages/_asset/logo.png";
import langlogo from "../../pages/_asset/languagevn.svg";
import Link from "next/link";
export interface AppHeaderProps {}

const AppHeader = (props: AppHeaderProps) => {
  const [change, setChange] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= 100) {
        setChange(true);
      } else {
        setChange(false);
      }
    });
  }, []);
  return (
    <header className={change ? "change" : ""}>
      <div className="container-fluid">
        <div className="header d-flex justify-content-between align-items-center">
          <div className="logo">
            <img src={logo.src} alt="" />
          </div>
          <div className="menu d-flex">
            <div className="--item-menu active">
              <Link href="/">
                <a>Trang chủ</a>
              </Link>
            </div>
            <div className="--item-menu">
              <Link href="">
                <a>Giới thiệu</a>
              </Link>
            </div>
            <div className="--item-menu">
              <Link href="">
                <a>Điểm du lịch</a>
              </Link>
            </div>
            <div className="--item-menu">
              <Link href="/Hotel">
                <a>Lưu trú</a>
              </Link>
            </div>
            <div className="--item-menu">
              <Link href="">
                <a>Lữ hành</a>
              </Link>
            </div>
            <div className="--item-menu">
              <Link href="">
                <a>Ẩm thực</a>
              </Link>
            </div>
            <div className="--item-menu">
              <Link href="">
                <a>Tin tức</a>
              </Link>
            </div>
            <div className="--item-menu">
              <Link href="">
                <a>Liên hệ</a>
              </Link>
            </div>
          </div>
          <div className="header_right d-flex align-items-center">
            <div className="search">
              <input type="text" placeholder="Tìm kiếm" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="language d-flex">
              <img src={langlogo.src} alt="" />
              <div className="select">
                <select className="form-control" name="" id="">
                  <option value="">Tiếng việt</option>
                  <option value="">English</option>
                </select>
                <i className="fa-solid fa-caret-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default AppHeader;
