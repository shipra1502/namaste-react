import { CDN_URL } from "../utils/constants";

const RestaurantCard = (resData) => {
  return (
    <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={CDN_URL + resData?.resData?.cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-xl">{resData?.resData?.name}</h3>
      <h3>{resData?.resData?.cuisines.join(", ")}</h3>

      <h3>{"*" + resData?.resData?.avgRating}</h3>

      <h3>{resData?.resData?.sla?.deliveryTime + "min"}</h3>
    </div>
  );
};

//Higher Order Component
//input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg m-2 p-2">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
