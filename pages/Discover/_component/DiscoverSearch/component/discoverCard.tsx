import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { v4 as uuid } from "uuid";

export interface DiscoverCardListProps {
  searchArr: any;
}

const DiscoverCardList = ({ searchArr }: DiscoverCardListProps) => {
  return (
    <div className="row">
      {searchArr?.map((item) => (
        <Link key={uuid()} href={`/Discover/${item.id}`}>
          <div className="col-md-4">
            <div className="--item img_hover1">
              <a href="">
                <>
                  <div className="--img">
                    <img src={item.featureImage?.path} alt="" />
                  </div>
                  <div className="--txt">
                    <div className="--type">
                      {item.pointType[0]
                        ? item.pointType[0]?.title
                        : "Chưa phân loại"}
                    </div>
                    <h4>{item.title}</h4>
                    <div className="--location ">
                      <Image
                        src={require("../../../../../Asset/icon-map1.svg")}
                        alt=""
                      />
                      <span>{item.address}</span>
                    </div>
                  </div>
                </>
              </a>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default React.memo(DiscoverCardList);
