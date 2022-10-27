import { Tag } from "antd";
import { useRouter } from "next/router";
import React from "react";
import OptionGroup from "./component/OptionGroup";

export interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const router = useRouter();
  return (
    <div className='--navBar'>
      {router.asPath.includes("Hotel") ? (
        <div className='--map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59025.742842815074!2d103.4046501286144!3d22.387250681156605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36d2a1867bf6f19d%3A0x34cc461c8d0001b8!2zVHAuIExhaSBDaMOidSwgTGFpIENow6J1LCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1666531776427!5m2!1svi!2s'
            width='100%'
            height='132'
            style={{ borderRadius: "3px" }}
            loading='lazy'
          ></iframe>
          <button>Chỉ đường</button>
        </div>
      ) : (
        false
      )}

      <div className='--OptionList'>
        <div className='--filTag'>
          <div className='--tilte d-flex'>
            <h5>Bộ lọc</h5>
            <button>
              Bỏ bộ lọc <i className='fa-solid fa-x'></i>
            </button>
          </div>
          <div className='d-flex --list'>
            <Tag className=' filterItem' closable>
              option 1
            </Tag>
            <Tag className=' filterItem' closable>
              option 2
            </Tag>
          </div>
        </div>
        <OptionGroup
          title={"Khu vực"}
          optionType={"select"}
          optionArray={[
            {
              title: "option 1",
              active: true,
            },
            {
              title: "option 2",
              active: true,
            },
            {
              title: "option 3",
              active: true,
            },
            {
              title: "option 4",
              active: true,
            },
          ]}
        />
        <OptionGroup
          title={"Loại hình"}
          optionType={"checkbox"}
          optionArray={[
            {
              title: "option 1",
              active: true,
            },
            {
              title: "option 2",
              active: true,
            },
            {
              title: "option 3",
              active: true,
            },
            {
              title: "option 4",
              active: true,
            },
          ]}
        />
        {router.asPath.includes("Hotel") ? (
          <OptionGroup
            title={"Xếp hạng sao"}
            optionType={"stars"}
            optionArray={undefined}
          ></OptionGroup>
        ) : (
          false
        )}
        <OptionGroup
          title={"Phù hợp"}
          optionType={"checkbox"}
          optionArray={[
            {
              title: "option 1",
              active: true,
            },
            {
              title: "option 2",
              active: true,
            },
            {
              title: "option 3",
              active: true,
            },
            {
              title: "option 4",
              active: true,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default Navbar;
