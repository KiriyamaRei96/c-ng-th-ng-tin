import React, { useEffect, useRef, useState } from "react";
import logo from "../../pages/_asset/logo.png";
import langlogo from "../../pages/_asset/languagevn.svg";
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
      <div className='container-fluid'>
        <div className='header d-flex justify-content-between align-items-center'>
          <div className='logo'>
            <img src={logo.src} alt='' />
          </div>
          <div className='menu d-flex'>
            <div className='--item-menu active'>
              <a href=''>Trang chủ</a>
            </div>
            <div className='--item-menu'>
              <a href=''>Giới thiệu</a>
            </div>
            <div className='--item-menu'>
              <a href=''>Điểm du lịch</a>
            </div>
            <div className='--item-menu'>
              <a href=''>Lưu trú</a>
            </div>
            <div className='--item-menu'>
              <a href=''>Lữ hành</a>
            </div>
            <div className='--item-menu'>
              <a href=''>Ẩm thực</a>
            </div>
            <div className='--item-menu'>
              <a href=''>Tin tức</a>
            </div>
            <div className='--item-menu'>
              <a href=''>Liên hệ</a>
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
  );
};
export default AppHeader;
