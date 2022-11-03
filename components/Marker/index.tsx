import * as React from "react";

export interface MarkerProps {
  child: React.ReactElement;
  lat: number | string;
  lng: number | string;
}

export function Marker({ child, lat, lng }: MarkerProps) {
  return <div>{child}</div>;
}
