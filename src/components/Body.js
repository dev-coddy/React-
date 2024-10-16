import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// Body Component :
const Body = () => {
  let [resList, setrestList] = useState([]); // Full Restaurants
  let [filterList, setFilterList] = useState([]); // Filtered Restaurants
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0175845&lng=76.9674075&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      console.log(json);
      setrestList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  // Conditional Rendering
  if (!Array.isArray(resList) || resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let topPicks = resList.filter((res) => res.info.avgRating > 4.3);
            setFilterList(topPicks);
          }}
        >
          Top Picks
        </button>
        <div className="search">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              let filteredList = resList.filter((restaurant) => {
                return restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterList(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="rest-container">
        {filterList.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"restaurants/" + restaurant.info.id}
              className="link-style"
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
