import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0035068&lng=77.5890953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (onlineStatus === false) {
    return (
      <div className="h-screen w-screen bg-gradient-to-r from-gray-200 to-blue-200 flex justify-center items-start">
        <div className="p-8 w-1/2 mt-16 shadow-xl bg-gray-50 flex flex-col items-center text-center rounded-2xl">
          {/* Icon */}
          <h1 className="text-6xl mb-4 animate-pulse">🔴</h1>

          {/* Heading */}
          <h2 className="text-3xl font-bold mb-4 text-red-600">
            You are offline!
          </h2>

          {/* Description */}
          <h3 className="mb-6 text-gray-600">
            Please check your internet connection. Try refreshing the page once
            you are back online.
          </h3>

          {/* Retry Button */}
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gradient-to-r from-gray-200 to-blue-200">
      <div className="flex">
        <div className="p-4 m-4">
          <input
            type="text"
            className="border border-solid border-gray-100 rounded-lg py-2 bg-white placeholder:text-center focus:border-gray-300 outline-none"
            value={searchText}
            placeholder="Search Restaurant"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100  hover:bg-green-200 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(filteredList);
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-centers m-4 p-4">
          <button
            className="px-4 py-2 m-4 bg-gray-100  hover:bg-gray-200 rounded-lg cursor-pointer"
            onClick={() => {
              const restaurant = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(restaurant);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
