import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  return (
    <div className="bg-gradient-to-r from-gray-200 to-blue-200 min-h-screen p-6">
      {/* Restaurant Info */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-6 text-center ">
        <h1 className="text-4xl font-bold mb-2">{name}</h1>
        <h3 className="text-gray-600 text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </h3>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemCards.map((item) => (
          <div
            key={item.card.info.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
          >
            <h4 className="font-semibold text-lg mb-2">
              {item.card.info.name}
            </h4>
            <p className="text-gray-500 mb-2">
              Rs.{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
            {item.card.info.description && (
              <p className="text-gray-400 text-sm">
                {item.card.info.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
