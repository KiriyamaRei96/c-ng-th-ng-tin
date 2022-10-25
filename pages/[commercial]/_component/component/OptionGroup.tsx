import React, { useState } from "react";

export interface OptionGroupProps {
  tilte: String;
  optionType: String;
  optionArray: Array<any>;
}

const OptionGroup = ({ tilte, optionType, optionArray }: OptionGroupProps) => {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <div className='OptionGroup'>
      <h5>{tilte}</h5>

      <div className='--divider'></div>
      <ul>
        <li></li>

        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
export default OptionGroup;
