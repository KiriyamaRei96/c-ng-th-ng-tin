import { Tag } from "antd";
import React from "react";
import commercialSelector, {
  clearFilter,
  setFilter,
} from "../../../../../ReduxStore/commercial/slice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../ReduxStore/hooks";
import { v4 as uuid } from "uuid";
export interface FilterDisplayProps {
  allFilter: Array<any>;
}

export const FilterBox = ({ allFilter }: FilterDisplayProps) => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(commercialSelector).filter;
  const idArr = [];
  Object.keys(filter).forEach((key) => {
    if (Array.isArray(filter[key])) {
      idArr.push(...filter[key].flat());
    } else idArr.push(filter[key]);
  });

  const clear = () => dispatch(clearFilter());
  return (
    <div className='--filTag'>
      <div className='--tilte d-flex'>
        <h5>Bộ lọc</h5>
        <button onClick={clear}>
          Bỏ bộ lọc <i className='fa-solid fa-x'></i>
        </button>
      </div>
      <div className='d-flex --list'>
        {allFilter.map((item) => {
          if (idArr.includes(item.id)) {
            return (
              <Tag
                onClose={(e) => {
                  const output = {};
                  Object.keys(filter).forEach((key) => {
                    if (Array.isArray(filter[key])) {
                      output[key] = filter[key].filter((i) => i !== item.id);
                    } else output[key] = "";
                  });
                  dispatch(setFilter(output));
                  console.log(output);
                }}
                key={uuid()}
                className=' filterItem'
                closable
              >
                {item.title.length < 10
                  ? item.title
                  : `${item.title.slice(0, 10)}...`}
              </Tag>
            );
          }
        })}
      </div>
    </div>
  );
};
