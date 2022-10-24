import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HotelWrapper } from "./_Style/style";
import BreadCrumb from "../../components/BreadCrumb";
export interface HotelProps {}

export default function Hotel(props: HotelProps) {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <HotelWrapper>
      <div id="hotel">
        <div className="Banner d-flex">
          <img
            src="https://s3-alpha-sig.figma.com/img/d8ac/63e6/03b01bdd9c92c6ccc3fe3f2d56f90502?Expires=1667779200&Signature=Rnbo00VPHCwYeRxdp3xCXeVCoWRHtSpYT2m5mHgBmB5Olf3P-5cDGXuj0mvU~j9F-BhXq9~oxYiosMBFAFvGeq~iIG0Em625jWr-MmAoQRs-gL2Ek9ncnv9~pU~cfQOlTGC1Yc7TKNf5BRteRog8tLoryJFz6q~6JVkiMwpUt9PH4M3Gx~PfWTJO0A5iwVrvaVz9QPZ2fHMuXLMIqTuaEnjIuealoaSn42v3ipIbi15H~3xOs-08OC~BC5TIfvelayGWHpCxFMBOxzpBwCWH-4lY26cLSpNk7FARDxknFh2g7-d5OASdmsuLj9FRnsy-Ge6UtRNMqNd5cY8XlaXQDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          ></img>
          <div className="--Item">
            <h1>Khách sạn</h1>
            <BreadCrumb router={router.asPath} />
          </div>
        </div>
        <div className="pageBody">
          <div className="--navBar"></div>
          <div className="--content"></div>
        </div>
      </div>
    </HotelWrapper>
  );
}
