import React, { useEffect, useRef, useState } from "react";
import logo from "../../pages/_asset/logo.png";
import langlogo from "../../pages/_asset/languagevn.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export interface AppHeaderProps {}

const AppHeader = (props: AppHeaderProps) => {
  const [change, setChange] = useState(false);
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= 100) {
        setChange(true);
      } else {
        setChange(false);
      }
    });
  }, []);
  // console.log(router);
  return (
    <>
      {Object.keys(router.query).length === 2 ||
      router.asPath.includes("Utilities") ? (
        <header className='white'>
          <div className='container-fluid'>
            <div className='header d-flex justify-content-between align-items-center'>
              <div className='logo'>
                <Image src={require("../../Asset/logo-2.png")} alt='' />
              </div>
              <div className='menu d-flex'>
                <div
                  className={
                    router.asPath.length === 1
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href='/'>
                    <a>Trang chủ</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("About")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href='/About'>
                    <a>Giới thiệu</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Discover")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href='/Discover'>
                    <a>Điểm du lịch</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Hotel")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href='/Hotel'>
                    <a>Lưu trú</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Tour")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href='/Tour'>
                    <a>Lữ hành</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Restaurant")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href='/Restaurant'>
                    <a>Ẩm thực</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("News&Event")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href='/News&Event'>
                    <a>Tin tức</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Contact")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href='/Contact'>
                    <a>Liên hệ</a>
                  </Link>
                </div>
              </div>
              <div className='header_right d-flex align-items-center'>
                <div className='search'>
                  <input type='text' placeholder='Tìm kiếm' />
                  <i className='fa-solid fa-magnifying-glass'></i>
                </div>
                <div className='language d-flex'>
                  <Image src={require("../../Asset/languagevn.svg")} alt='' />
                  <div className='select'>
                    <select className='form-control' name='' id=''>
                      <option value=''>Tiếng việt</option>
                      <option value=''>English</option>
                    </select>
                    <i className='fa-sfa-caret-down'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        false
      )}
      {Object.keys(router.query).length < 2 &&
      !router.asPath.includes("Utilities") ? (
        <header className={change ? "change" : ""}>
          <div className='container-fluid'>
            <div className='header d-flex justify-content-between align-items-center'>
              <div className='logo'>
                <img src={logo.src} alt='' />
              </div>
              <div className='menu d-flex'>
                <div
                  className={
                    router.asPath.length === 1
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href='/'>
                    <a>Trang chủ</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("About")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href='/About'>
                    <a>Giới thiệu</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Discover")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href='/Discover'>
                    <a>Điểm du lịch</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Hotel")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href='/Hotel'>
                    <a>Lưu trú</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Tour")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href='/Tour'>
                    <a>Lữ hành</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Restaurant")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href='/Restaurant'>
                    <a>Ẩm thực</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("News&Event")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href='/News&Event'>
                    <a>Tin tức</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Contact")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href='/Contact'>
                    <a>Liên hệ</a>
                  </Link>
                </div>
              </div>
              <div className='header_right d-flex align-items-center'>
                <div className='search'>
                  <input type='text' placeholder='Tìm kiếm' />
                  <i className='fa-solid fa-magnifying-glass'></i>
                </div>
                <div className='language d-flex'>
                  <img src={langlogo.src} alt='' />
                  <div className='select'>
                    <select className='form-control' name='' id=''>
                      <option value=''>Tiếng việt</option>
                      <option value=''>English</option>
                    </select>
                    <i className='fa-solid fa-caret-down'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        false
      )}
    </>
  );
};
export default AppHeader;
