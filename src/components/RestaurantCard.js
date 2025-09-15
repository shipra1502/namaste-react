import { CDN_URL } from "../utils/constants";

const RestaurantCard = (resData) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + resData.resData.cloudinaryImageId}
      ></img>
      <h3>{resData.resData.name}</h3>
      <h3>{resData.resData.cuisines.join(", ")}</h3>

      <h3>{"*" + resData.resData.avgRating}</h3>

      <h3>{resData.resData.sla.deliveryTime + "min"}</h3>
    </div>
  );
};

export default RestaurantCard;
