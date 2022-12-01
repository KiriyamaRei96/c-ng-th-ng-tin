import dynamic from "next/dynamic";

const RestaurantCard = dynamic(() => import("./"), {
  suspense: true,
});
export default RestaurantCard;
