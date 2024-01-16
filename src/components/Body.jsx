import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {


    //state variable -super powerful variable 
    const [listOfRestaurants, setListOfRestaurants]=useState([]);

    const [searchText, setSearchText]=useState("");
    const[filteredRestaurants,setFilteredRestaurants]=useState([]);

    
    useEffect(()=>{
       fetchData();
    },[])

    const fetchData=async ()=>{
     const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&page_type=DESKTOP_WEB_LISTING"
     )
    
     const json=await data.json();
    
     
   
   
 
     const restaurant=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
     console.log(restaurant);
     setFilteredRestaurants(restaurant);
     setListOfRestaurants(restaurant);
     
    
    };

//this concept is known as conditional rendering 
    


    return  (
        <div className="body">
            <div className="filter">
                 <div className="search ">
                    <input type="text " placeholder="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                       
                    }}></input>
                    <button onClick={()=>{
                        listOfRestaurants;
                        {const filterList=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText))
                            if(filterList.length!=0)
                            setFilteredRestaurants(filterList);
                    
                           
                          console.log(filterList)}
                    }}
                  
                   
                    >
                      Search
                    </button>

                 </div>

                <button className="filter-btn" onClick={()=>{
                    console.log("button clicked")
                const filteredList=   listOfRestaurants.filter(
                    (res)=>res.info.avgRating>=4.2
                   );

                    //filter logic here 
                    setFilteredRestaurants(filteredList);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-list">
                {filteredRestaurants.map((restaurant,index) => {
                    return <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  data={restaurant} /></Link>;
                })}
            </div>
        </div>
    );
};

export default Body;