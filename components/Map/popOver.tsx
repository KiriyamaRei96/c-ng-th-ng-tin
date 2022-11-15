import React, { useState } from "react";
import { locationIcon } from "../img";

const AnyReactComponent = ({ lat, lng, item, vr }) => {
  const [active, setActive] = useState(true);
  return (
    <div className="Marker">
      {active ? (
        <div className="--item d-flex">
          {item.vr !== "" && vr ? (
            <a href={item.vr} target="blank">
              <div className="marker-content d-flex">
                <div className="--img">
                  <img src={item.featureImage?.path}></img>
                </div>
                <span>{item.title}</span>
              </div>
            </a>
          ) : (
            <a href={`/Discover/detail~${item.id}`}>
              <div className="marker-content d-flex">
                <img src={item.featureImage?.path}></img>
                <span>{item.title}</span>
              </div>
            </a>
          )}
        </div>
      ) : (
        false
      )}

      <img
        onClick={() => setActive(!active)}
        src={locationIcon.default.src}
        alt=""
      />
    </div>
  );
};
export default AnyReactComponent;
