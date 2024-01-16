import { useEffect } from "react";
import { Menu } from "./constants";
import { useState } from "react";


const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu= async ()=>{
        const data=  await fetch(Menu+resId);
        const json=await data.json();
    
        setResInfo(json.data);
        
    
    };


return resInfo;
}
export default useRestaurantMenu;
