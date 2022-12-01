import dynamic from "next/dynamic";

const HotelCard = dynamic(() => import("./"), {
  suspense: true,
});
export default HotelCard;
