import RestaurantCard from "./RestaurantCard";
import RestaurantList from "../utils/mockData";
import { useState,useEffect } from "react";
const Body = () => {


    //state variable -super powerful variable 
    const [listOfRestaurants, setListOfRestaurants]=useState(RestaurantList);
    
    return (
        <div className="body">
            <div className="search">
                <button className="filter-btn" onClick={()=>{
                    console.log("button clicked")
                const filteredList=   listOfRestaurants.filter(
                    (res)=>res.info.avgRating>=4.6
                   );

                    //filter logic here 
                     setListOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-list">
                {listOfRestaurants.map((restaurant,index) => {
                    console.log(restaurant);
                    return <RestaurantCard key={restaurant.info.id} data={restaurant} />;
                })}
            </div>
        </div>
    );
};

export default Body;