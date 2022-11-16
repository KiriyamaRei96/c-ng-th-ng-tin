import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Marker } from "../Marker";
import GoogleMapReact from "google-map-react";
import { locationIcon } from "../img";
import { v4 as uuid } from "uuid";
import AnyReactComponent from "./popOver";
export interface MapProps {
  arr: any;
  height: string;
  vr?: boolean;
}

const Map = ({ vr, arr, height }: MapProps) => {
  const [locationArr, setLocationArr] = useState<any>([]);
  const [loader, setLoader] = useState<any>();

  const ref: any = useRef();

  const handleApiLoaded = (map, maps, pntArr) => {
    if (map && maps) {
      const bounds = new maps.LatLngBounds();
      var infowindow = new maps.InfoWindow();

      for (let i = 0; i < pntArr?.length; i++) {
        var marker = new maps.Marker({
          position: new maps.LatLng(pntArr[i]["lat"], pntArr[i]["lng"]),
          map: null,
        });

        bounds.extend(marker.position);
      }

      map.fitBounds(bounds);
    }
  };
  useEffect(() => {
    if (ref.current) {
      setLoader({
        map: ref.current.map_,
        maps: ref.current.maps_,
      });
    }
  }, [ref.current]);
  useLayoutEffect(() => {
    handleApiLoaded(ref.current.map_, ref.current.maps_, arr);
  }, [arr, loader]);

  return (
    <div style={{ width: "100%", height: height }}>
      <GoogleMapReact
        ref={ref}
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_KEY,
        }}
        defaultCenter={{
          lat: 21.027105947174572,
          lng: 105.8380794988938,
        }}
        defaultZoom={12}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps, arr)}
        yesIWantToUseGoogleMapApiInternals
      >
        {arr?.map((lct) => (
          <AnyReactComponent
            vr={vr}
            key={uuid()}
            lat={Number(lct.lat)}
            lng={Number(lct.lng)}
            item={lct}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};
export default Map;
