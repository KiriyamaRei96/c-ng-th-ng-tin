import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export interface HotelProps {}

export default function Hotel(props: HotelProps) {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <Link href='/'>
        <a>home</a>
      </Link>
      Hotel
      <ul>
        <li>
          <Link href='/Hotel/detail1'>
            <a>detail 1</a>
          </Link>
        </li>
        <li>
          <Link href='/Hotel/detail2'>
            <a>detail 2 </a>
          </Link>
        </li>
        <li>
          <Link href='/Hotel/detail3'>
            <a>detail 3</a>
          </Link>
        </li>
        <li>
          <Link href='/Hotel/detail4'>
            <a>detail 4</a>
          </Link>
        </li>
        <li>
          <Link href='/Hotel/detail5'>
            <a>detail 5</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
