import * as React from "react";
import BookingWrapper from "../styled/style";
export interface MapModalProps {
  open?: boolean;
  setOpen: Function;
}
import Map from "../../../../components/Map";
import { useAppSelector } from "../../../../ReduxStore/hooks";
import commercialSelector from "../../../../ReduxStore/commercial/slice";

const MapModal = ({ open = false, setOpen }: MapModalProps) => {
  const searchArr = useAppSelector(commercialSelector).searchArr;

  return (
    <BookingWrapper>
      {open ? (
        <div
          onClick={() => {
            setOpen(false);
          }}
          className="map-modal"
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Map height="100%" arr={searchArr}></Map>
          </div>
        </div>
      ) : (
        false
      )}
    </BookingWrapper>
  );
};
export default MapModal;
