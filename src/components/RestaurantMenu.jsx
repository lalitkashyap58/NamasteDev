import React from 'react'
import { useEffect } from 'react'
import Shimmer from './Shimmer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Menu} from "../utils/constants.js";

const RestaurantMenu = () => {
    const [resInfo,setResInfo]=useState(null);
    const {resId} =useParams();
    console.log(resId);

   

//explain useEffect and learn about it 

    useEffect(()=>{
  fetchMenu();
  console.log("useeffect called");
    },[]);
    const fetchMenu= async ()=>{
        const data=  await fetch(Menu+resId);
        const json=await data.json();
    
        setResInfo(json.data);
        
    
    };

    if(resInfo===null)
    return (<h1>abhi load ho rhe hn</h1>);

    console.log(resInfo);
     const {name,cuisines,costForTwo}=resInfo?.cards[0]?.card?.card?.info;
     const itemCards=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
     console.log(itemCards);
    //  {itemCards.map((item, index) => (
    //   <li key={index}>{console.log(item.card.info.name)}</li>
    // ))}

    
   

  return resInfo ===null ?(<Shimmer/>):(
    <div className='menu'>
       
        <h1>{name}</h1>

        <p>{cuisines.join(", ")}-{costForTwo}</p>
        <h1>Menu</h1>
        
        
        <ul>
        {itemCards.itemCards.map((item, index) => (
  
  <li key={index}>{item?.card?.info?.name}</li>

))}


           

            <li>{costForTwo}</li>
            <li>Diet Coke</li>
        </ul>
        RestaurantMenu</div>
  )
}

export default RestaurantMenu;