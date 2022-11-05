import Link from "next/link";
import * as React from "react";
import { v4 as uuid } from "uuid";

export interface DiscoverItemProps {
  searchArr: any;
}

const DiscoverItem = ({ searchArr }: DiscoverItemProps) => {
  return (
    <div className="list_discoverSearch2">
      {searchArr?.map((item) => (
        <Link key={uuid()} href={`/Discover/${item.id}`}>
          <div className="--item d-flex align-items-center">
            <div className="--img">
              <img src={item.featureImage?.path} alt="" />
            </div>
            <div className="--txt">
              <h4>{item.title}</h4>
              <article>{item.highlights}</article>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default React.memo(DiscoverItem);
