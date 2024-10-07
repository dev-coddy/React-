import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

// Body Component :
const Body = () => {
  let [resList, setrestList] = useState([]); // Full Restaurants
  let [filterList, setFilterList] = useState([]); // Filtered Restaurants
  let [serachText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0796991&lng=76.9997393&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setrestList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            deepak = resList.filter((res) => res.info.avgRating > 4.3);
            setFilterList(deepak);
          }}
        >
          Top Picks
        </button>
        <div className="search">
          <input
            type="text"
            className="search-bar"
            value={serachText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              let filterList = resList.filter((restaurant) => {
                return restaurant.info.name
                  .toLowerCase()
                  .includes(serachText.toLowerCase());
              });
              setFilterList(filterList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="rest-container">
        {filterList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
