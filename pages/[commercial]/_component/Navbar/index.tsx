import React from "react";
import OptionGroup from "../component/OptionGroup";

export interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <div className='--navBar'>
      <div className='--searchWraper'>
        <div className='d-flex'>
          <span>Tìm kiếm</span>
          <span className='--divider'></span>
          <div className='d-flex'>
            <input placeholder='Nhập từ khóa...' type='text' />
            <button>
              <i className='fa-solid fa-magnifying-glass'></i>
            </button>
          </div>
        </div>
      </div>
      <div className='--OptionList'>
        <OptionGroup
          tilte={"Khu vực"}
          optionType={"select"}
          optionArray={[
            {
              tile: "option 1",
              active: true,
            },
            {
              tile: "option 1",
              active: true,
            },
          ]}
        />
        <OptionGroup
          tilte={"Loại hình"}
          optionType={"checkbox"}
          optionArray={[]}
        />
        <OptionGroup
          tilte={"Phù hợp"}
          optionType={"checkbox"}
          optionArray={[]}
        />
      </div>
    </div>
  );
};
export default Navbar;
