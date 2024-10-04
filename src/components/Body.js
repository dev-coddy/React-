import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Varialbe = Super Powefull Variable
  let [resList, setrestList] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            resList = resList.filter((res) => res.info.avgRating > 4.3);
            setrestList(resList);
          }}
        >
          Top Restarurants
        </button>
        <input type="text" className="search-bar" />
      </div>
      <div className="rest-container">
        {resList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
