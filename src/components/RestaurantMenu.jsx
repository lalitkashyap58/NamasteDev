import React, { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';


const RestaurantMenu = () => {
   
    const {resId} =useParams();
    console.log(resId);
    const resInfo=useRestaurantMenu(resId);
    
   const [showIndex,setShowIndex]=useState(null);
   const[showItems,setShowItems]=useState(false);
   

//explain useEffect and learn about it 

 
  

    if(resInfo===null)
    return (<h1>abhi load ho rhe hn</h1>);

    console.log(resInfo);
     const {name,cuisines,costForTwo}=resInfo?.cards[0]?.card?.card?.info;
     const itemCards=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
     const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
     console.log(categories);

    //  {itemCards.map((item, index) => (
    //   <li key={index}>{console.log(item.card.info.name)}</li>
    // ))}

    
   

  return resInfo ===null ?(<Shimmer/>):(
    <div className='text-center'>
       
        <h1 className='font-bold my-6 text-2xl'>{name}</h1>

        <p className='font-bold text-lg'>{cuisines.join(", ")}-{costForTwo} for Two</p>
        
      {/* categoeries accordian */}
    {categories.map((category,index)=>(
<RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index===showIndex?true:false} setShowIndex={()=>{setShowIndex(index)}} setShowItems={()=>{!showItems}}/>
    ))}


        </div>
  )
}

export default RestaurantMenu;