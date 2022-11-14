import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Marker } from "../Marker";
import GoogleMapReact from "google-map-react";
import { locationIcon } from "../img";
import { v4 as uuid } from "uuid";
export interface MapProps {
  arr: any;
  height: string;
}
const AnyReactComponent = ({ lat, lng, item }) => (
  <div className='Marker'>
    <div className='--item d-flex'>
      {item.vr !== "" ? (
        <a href={item.vr} target='blank'>
          <div className='marker-content d-flex'>
            <div className='--img'>
              <img src={item.featureImage?.path}></img>
            </div>
            <span>{item.title}</span>
          </div>
        </a>
      ) : (
        <a href={`/Discover/detail~${item.id}`}>
          <div className='marker-content d-flex'>
            <img src={item.featureImage?.path}></img>
            <span>{item.title}</span>
          </div>
        </a>
      )}
    </div>
    <img src={locationIcon.default.src} alt='' />
  </div>
);
const Map = ({ arr, height }: MapProps) => {
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

        //extend the bounds to include each marker's position
        bounds.extend(marker.position);
        //     const contentElemnt =
        //       pntArr[i].vr !== ""
        //         ? `
        // <a href='${pntArr[i].vr}' target="_blank">
        //  <div
        //  class='marker-content d-flex'>
        //  <img src='${pntArr[i].featureImage?.path}'></img>
        //  <span>${pntArr[i].title}</span>
        //  </div>
        // </a>`
        //         : `
        // <a href='/Discover/detail~${pntArr[i].id}'>
        //  <div
        //  class='marker-content d-flex'>
        //  <img src='${pntArr[i].featureImage?.path}'></img>
        //  <span>${pntArr[i].title}</span>
        //  </div>
        // </a>`;
        //     var infowindow = new maps.InfoWindow({
        //       content: contentElemnt,
        //       maxWidth: 160,
        //     });

        //     infowindow.open(map, marker);

        //     maps.event.addListener(
        //       marker,
        //       "click",
        //       (function (marker, i) {
        //         const contentElemnt =
        //           pntArr[i].vr !== ""
        //             ? `
        //       <a href='${pntArr[i].vr}' target="_blank">
        //        <div
        //        class='marker-content d-flex'>
        //        <img src='${pntArr[i].featureImage?.path}'></img>
        //        <span>${pntArr[i].title}</span>
        //        </div>
        //       </a>`
        //             : `
        //       <a href='/Discover/detail~${pntArr[i].id}'>
        //        <div
        //        class='marker-content d-flex'>
        //        <img src='${pntArr[i].featureImage?.path}'></img>
        //        <span>${pntArr[i].title}</span>
        //        </div>
        //       </a>`;
        //         var infowindow = new maps.InfoWindow({
        //           content: contentElemnt,
        //           maxWidth: 160,
        //         });

        //         return function () {
        //           infowindow.open(map, marker);
        //         };
        //       })(marker, i)
        //     );
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
