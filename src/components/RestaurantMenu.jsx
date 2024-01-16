import React from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

import useRestaurantMenu from '../utils/useRestaurantMenu';


const RestaurantMenu = () => {
   
    const {resId} =useParams();
    console.log(resId);
    const resInfo=useRestaurantMenu(resId);
    
    console.log(resInfo);

   

//explain useEffect and learn about it 

 
  

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