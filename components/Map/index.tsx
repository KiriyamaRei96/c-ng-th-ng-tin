import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Marker } from "../Marker";
import GoogleMapReact from "google-map-react";

export interface MapProps {
  arr: any;
  height: string;
}

const Map = ({ arr, height }: MapProps) => {
  const [locationArr, setLocationArr] = useState<any>([]);
  const [loader, setLoader] = useState<any>();

  const ref: any = useRef();
  const clear = (map, maps, pntArr) => {
    for (let i = 0; i < pntArr.length; i++) {
      pntArr[i].setMap(null);
    }
    setLocationArr([]);
  };
  const handleApiLoaded = (map, maps, pntArr) => {
    if (map && maps) {
      const bounds = new maps.LatLngBounds();
      var infowindow = new maps.InfoWindow();

      for (let i = 0; i < pntArr.length; i++) {
        var marker = new maps.Marker({
          position: new maps.LatLng(pntArr[i]["lat"], pntArr[i]["lng"]),
          map: map,
        });

        setLocationArr((prv) => [...prv, marker]);
        //extend the bounds to include each marker's position
        bounds.extend(marker.position);
        const contentElemnt =
          pntArr[i].vr !== ""
            ? `
    <a href='${pntArr[i].vr}' target="_blank">      
     <div
     class='marker-content d-flex'>
     <img src='${pntArr[i].featureImage?.path}'></img>
     <span>${pntArr[i].title}</span> 
     </div> 
    </a>`
            : `
    <a href='/Discover/detail~${pntArr[i].id}'>      
     <div
     class='marker-content d-flex'>
     <img src='${pntArr[i].featureImage?.path}'></img>
     <span>${pntArr[i].title}</span> 
     </div> 
    </a>`;
        var infowindow = new maps.InfoWindow({
          content: contentElemnt,
          maxWidth: 160,
        });

        infowindow.open(map, marker);

        maps.event.addListener(
          marker,
          "click",
          (function (marker, i) {
            const contentElemnt =
              pntArr[i].vr !== ""
                ? `
          <a href='${pntArr[i].vr}' target="_blank">      
           <div
           class='marker-content d-flex'>
           <img src='${pntArr[i].featureImage?.path}'></img>
           <span>${pntArr[i].title}</span> 
           </div> 
          </a>`
                : `
          <a href='/Discover/detail~${pntArr[i].id}'>      
           <div
           class='marker-content d-flex'>
           <img src='${pntArr[i].featureImage?.path}'></img>
           <span>${pntArr[i].title}</span> 
           </div> 
          </a>`;
            var infowindow = new maps.InfoWindow({
              content: contentElemnt,
              maxWidth: 160,
            });

            return function () {
              infowindow.open(map, marker);
            };
          })(marker, i)
        );
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
    handleApiLoaded(loader?.map, loader?.maps, arr);
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
        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        yesIWantToUseGoogleMapApiInternals
      ></GoogleMapReact>
    </div>
  );
};
export default Map;
