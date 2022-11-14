import { Checkbox, Radio, Rate, Select } from "antd";
import { useRouter } from "next/router";
import React, { memo, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import commercialSelector, {
  setFilter,
} from "../../../../../ReduxStore/commercial/slice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../ReduxStore/hooks";
export interface OptionGroupProps {
  title: String;
  optionType: String;
  optionArray: Array<any> | undefined;
  value: any;
  type: String;
}

const OptionGroup = ({
  title,
  optionType = undefined,
  optionArray,
  value,
  type,
}: OptionGroupProps) => {
  const [arr, setArr] = useState([]);
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (optionArray?.length > 4 && arr.length <= 4) {
      setArr(optionArray.slice(0, 4));
    } else setArr(optionArray);
  }, [optionArray, router.locale]);
  const moreHandler = () => {
    setArr(optionArray);
  };
  return (
    <div className="OptionGroup">
      <h5>{title}</h5>
      {optionType === "select" ? (
        <Select
          onChange={(value) => {
            dispatch(setFilter({ [`${type}`]: value }));
          }}
          value={value}
          className="--place"
        >
          {optionArray.map((op) => (
            <Select.Option key={op.title} value={op.value}>
              {op.title}
            </Select.Option>
          ))}
        </Select>
      ) : (
        false
      )}
      {optionType === "checkbox" ? (
        <Checkbox.Group
          onChange={(value) => {
            dispatch(setFilter({ [`${type}`]: value }));
          }}
          value={value}
          className="--group d-flex"
        >
          {arr.map((op) => (
            <Checkbox className="--item" key={uuid()} value={op.value}>
              {op.title}
            </Checkbox>
          ))}
          {optionArray.length > arr.length ? (
            <span onClick={() => moreHandler()} className="--more">
              Xem tất cả
            </span>
          ) : (
            false
          )}
        </Checkbox.Group>
      ) : (
        false
      )}
      {optionType === "radio" ? (
        <Radio.Group
          onChange={(e) => {
            dispatch(setFilter({ [`${type}`]: e.target.value }));
          }}
          value={value}
          className="--group d-flex"
        >
          {arr.map((op) => (
            <Radio className="--item" key={uuid()} value={op.value}>
              {op.title}
            </Radio>
          ))}
          {optionArray.length > arr.length ? (
            <span onClick={() => moreHandler()} className="--more">
              Xem tất cả
            </span>
          ) : (
            false
          )}
        </Radio.Group>
      ) : (
        false
      )}
      {optionType === "stars" ? (
        <Radio.Group
          onChange={(e) => {
            dispatch(setFilter({ [`${type}`]: e.target.value }));
          }}
          value={value}
          className="stars d-flex"
        >
          <Radio value={1}>
            <div className="--warpper">
              <Rate disabled defaultValue={1} />
            </div>
          </Radio>
          <Radio value={2}>
            <div className="--warpper">
              <Rate disabled defaultValue={2} />
            </div>
          </Radio>
          <Radio value={3}>
            <div className="--warpper">
              <Rate disabled defaultValue={3} />
            </div>
          </Radio>
          <Radio value={4}>
            <div className="--warpper">
              <Rate disabled defaultValue={4} />
            </div>
          </Radio>
          <Radio value={5}>
            <div className="--warpper">
              <Rate disabled defaultValue={5} />
            </div>
          </Radio>
        </Radio.Group>
      ) : (
        false
      )}
      <div className="--divider"></div>
    </div>
  );
};
export default memo(OptionGroup);
