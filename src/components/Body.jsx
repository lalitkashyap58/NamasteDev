import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {


    //state variable -super powerful variable 
    const [listOfRestaurants, setListOfRestaurants]=useState([]);

    const [searchText, setSearchText]=useState("");
    const[filteredRestaurants,setFilteredRestaurants]=useState([]);

    
    useEffect(()=>{
       fetchData();
    },[])

    const fetchData=async ()=>{
     const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6224262&lng=77.0434934&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
     )
    
     const json=await data.json();
    
     
   
   
 
     const restaurant=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
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
                    return <RestaurantCard key={restaurant.info.id} data={restaurant} />;
                })}
            </div>
        </div>
    );
};

export default Body;