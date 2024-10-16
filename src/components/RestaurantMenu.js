import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  let [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    locality,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
    areaName,
  } = resInfo.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="container">
      <h1 className="rest-name">{name}</h1>
      <div className="menu-container">
        <h3>
          ⭐ {avgRating}({totalRatingsString}) . {costForTwoMessage}
        </h3>
        <h5 className="cuisines">{cuisines.join(", ")}</h5>
        <h4>
          {areaName} - {locality}
        </h4>
      </div>
      <h1 className="rest-recommended">Recommended</h1>
      {itemCards.map((item) => (
        <div className="recommemded-container" key={item.card.info.id}>
          <div className="recommended-item">
            <h3 className="item-name">{item.card.info.name}</h3>
            <h4 className="item-rate">Rs {item.card.info.price / 100}</h4>
            <h5 className="item-rating">
              ⭐ {item.card.info.ratings.aggregatedRating.rating}
            </h5>
            <p className="item-desc">{item.card.info.description}</p>
            <div className="border-bottom"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
