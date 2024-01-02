import { CND_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { name, cloudinaryImageId ,avgRating} = props?.data.info;
    console.log(name);
    return (
        <div className="res-card">
            <div className="food-image">
                <img src={CND_URL + cloudinaryImageId} alt="Food" />
            </div>
            <h1 className="food-heading">{name}</h1>
            <div className="details">
                <p>{avgRating}</p>
                <p>Delivery : Available</p>
                <p>Cuisine: Fast Food</p>
            </div>
        </div>
    );
};
export default RestaurantCard;