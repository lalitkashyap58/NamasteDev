import React from "react";
import { CND_URL } from "../utils/constants";
import { UseDispatch, useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  console.log(items);
  const dispatch=useDispatch();

  const handleAddItem=(item)=>{
    dispatch(addItem(item));

  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
           
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold ">{item.card.info.name} ,</span>
              <span> Rs.{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
             
          </div>
          <div className="w-3/12 p-4">
            <img src={CND_URL+item.card.info.imageId} className="w-14 h-auto"></img>
            <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg absolute m-auto" onClick={()=>{
              //dispatch an action
              handleAddItem(item);
            }}>Add</button>
            </div>
         

        </div>

      ))}
    </div>
  );
};

export default ItemList;
