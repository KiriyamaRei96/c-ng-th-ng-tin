import dynamic from "next/dynamic";

const TourCard = dynamic(() => import("./"), {
  suspense: true,
});
export default TourCard;
