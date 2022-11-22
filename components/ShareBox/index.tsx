import * as React from "react";
import globalSelector from "../../ReduxStore/globalSlice/slice";
import { useAppSelector } from "../../ReduxStore/hooks";
import { iconFB, iconGG, iconIN, iconTW } from "../img";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

export interface ShareBoxProps {}

const ShareBox = (props: ShareBoxProps) => {
  const settingMap = useAppSelector(globalSelector).settingMap;
  let url;
  if (typeof window !== "undefined") {
    url = window.location.href;
  }

  return (
    <div className="--backshare">
      <ul>
        <li> {settingMap.share}:</li>
        <li>
          <TwitterShareButton url={url}>
            <a>
              <img src={iconTW.default.src} alt="" />
            </a>
          </TwitterShareButton>
        </li>
        <li>
          <FacebookShareButton url={url}>
            <a>
              <img src={iconFB.default.src} alt="" />
            </a>
          </FacebookShareButton>
        </li>
        <li>
          <LinkedinShareButton url={url}>
            <a>
              <img src={iconIN.default.src} alt="" />
            </a>
          </LinkedinShareButton>
        </li>
      </ul>
    </div>
  );
};
export default ShareBox;
