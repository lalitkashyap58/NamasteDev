import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({data,showItems,setShowIndex,setShowItems}) => {
  
    console.log(data);
    const handleClick=()=>{
      if(showItems==true)
      {
        setShowItems(!showItems);
      }else
      setShowIndex();
      
    }
    
  return (
    <div>
        <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4  '>
            <div className='flex-justify-between cursor-pointer' onClick={handleClick}>
     <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
        </div>
       
        {/* Accordian  body */}
       {showItems&&<ItemList items={data.itemCards}/>} 
        </div>
         </div>
  )
}

export default RestaurantCategory