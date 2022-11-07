import * as React from "react";
import { Marker } from "../Marker";
import GoogleMapReact from "google-map-react";

export interface MapProps {
  arr: any;
  height: string;
}

const Map = ({ arr, height }: MapProps) => {
  const handleApiLoaded = (map, maps) => {
    const bounds = new maps.LatLngBounds();
    var infowindow = new maps.InfoWindow();
    for (let i = 0; i < arr.length; i++) {
      var marker = new maps.Marker({
        position: new maps.LatLng(arr[i]["lat"], arr[i]["lng"]),
        map: map,
      });

      //extend the bounds to include each marker's position
      bounds.extend(marker.position);

      maps.event.addListener(
        marker,
        "click",
        (function (marker, i) {
          return function () {
            const contentElemnt = ` <div
            class='marker-content d-flex'>
            <img src='${arr[i].featureImage.path}'></img>
                <span>${arr[i].title}</span> 
              </div>`;
            var infowindow = new maps.InfoWindow({
              content: contentElemnt,
              maxWidth: 160,
            });
            infowindow.open(map, marker);
          };
        })(marker, i)
      );
    }
    map.fitBounds(bounds);
  };
  return (
    <div style={{ width: "100%", height: height }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_KEY,
        }}
        defaultCenter={{
          lat: 21.027105947174572,
          lng: 105.8380794988938,
        }}
        defaultZoom={12}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        yesIWantToUseGoogleMapApiInternals
      ></GoogleMapReact>
    </div>
  );
};
export default Map;
