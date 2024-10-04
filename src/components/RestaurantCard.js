import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { avgRating, locality, name, cuisines } = resData.info;
  return (
    <div className="rest-card">
      <img
        className="card-img"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="res-img"
      />
      <div className="card-flex">
        <h5 className="card-rating">{avgRating} Stars</h5>
        <h5 className="card-location">{locality}</h5>
      </div>
      <h4 className="card-title">{name}</h4>
      <p className="card-cuisine">{cuisines.join(", ")}</p>
    </div>
  );
};

export default RestaurantCard;
