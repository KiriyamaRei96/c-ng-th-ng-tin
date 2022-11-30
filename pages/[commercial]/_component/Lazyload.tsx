import dynamic from "next/dynamic";

export const HotelCard = dynamic(() => import("./HotelCard"), {
  suspense: true,
});
export const RestaurantCard = dynamic(() => import("./RestaurantCard"), {
  suspense: true,
});
export const TourCard = dynamic(() => import("./TourCard"), {
  suspense: true,
});
