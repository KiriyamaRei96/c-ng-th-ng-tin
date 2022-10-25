import * as React from "react";

import { useRouter } from "next/router";
import Link from "next/link";

export interface HotelDetailProps {}

export default function HotelDetail(props: HotelDetailProps) {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <Link href='/Hotel'>
        <a>Hotel</a>
      </Link>
      hotel {router.query.hotelDetail}
    </div>
  );
}
