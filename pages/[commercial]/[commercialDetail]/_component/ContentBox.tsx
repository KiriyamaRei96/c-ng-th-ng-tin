import React, { useState } from "react";
import globalSelector from "../../../../ReduxStore/globalSlice/slice";
import { useAppSelector } from "../../../../ReduxStore/hooks";

const ContentBox = ({ title, content }) => {
  const [active, setActive] = useState(false);
  const settingMap = useAppSelector(globalSelector).settingMap;
  return (
    <div className='--content'>
      <h3 className='--title mb-4'>{title}</h3>
      <article
        dangerouslySetInnerHTML={{ __html: content }}
        className={active ? "active" : ""}
      ></article>
      <a
        onClick={() => {
          setActive(true);
        }}
        className={
          active ? "button_2 button_hover2 d-none" : "button_2 button_hover2"
        }
      >
        {settingMap.viewMore}
      </a>
    </div>
  );
};
export default ContentBox;
