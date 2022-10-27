import { Checkbox, Radio, Rate, Select } from "antd";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
export interface OptionGroupProps {
  title: String;
  optionType: String;
  optionArray: Array<any> | undefined;
}

const OptionGroup = ({
  title,
  optionType = undefined,
  optionArray,
}: OptionGroupProps) => {
  const [active, setActive] = useState(false);

  return (
    <div className='OptionGroup'>
      <h5>{title}</h5>
      {optionType === "select" ? (
        <Select className='--place' placeholder='Chọn khu'>
          {optionArray.map((op) => (
            <Select.Option key={op.title} value={op.title}>
              {op.title}
            </Select.Option>
          ))}
        </Select>
      ) : (
        false
      )}
      {optionType === "checkbox" ? (
        <Checkbox.Group className='--group d-flex'>
          {optionArray.map((op) => (
            <Checkbox className='--item' key={uuid()} value={op.title}>
              {op.title}
            </Checkbox>
          ))}
        </Checkbox.Group>
      ) : (
        false
      )}
      {optionType === "stars" ? (
        <Radio.Group className='stars d-flex'>
          <Radio value={1}>
            <div className='--warpper'>
              <Rate disabled defaultValue={1} /> <span>(1)</span>
            </div>
          </Radio>
          <Radio value={2}>
            <div className='--warpper'>
              <Rate disabled defaultValue={2} /> <span>(1)</span>
            </div>
          </Radio>
          <Radio value={3}>
            <div className='--warpper'>
              <Rate disabled defaultValue={3} /> <span>(1)</span>
            </div>
          </Radio>
          <Radio value={4}>
            <div className='--warpper'>
              <Rate disabled defaultValue={4} /> <span>(1)</span>
            </div>
          </Radio>
          <Radio value={5}>
            <div className='--warpper'>
              <Rate disabled defaultValue={5} /> <span>(1)</span>
            </div>
          </Radio>
        </Radio.Group>
      ) : (
        false
      )}
      <div className='--divider'></div>
    </div>
  );
};
export default OptionGroup;
