// App.jsx

import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../index.css"; // Make sure to import your styles
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter ,RouterProvider,Outlet } from "react-router-dom";
import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";//provider is like a bridge between react redux and redux toolkit
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.jsx";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo">
//         <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large" alt="Logo" />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>Contact Us</li>
//           <li>About Us</li>
//           <li>Orders</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const RestaurantCard = (props) => {
    
//     console.log(data);
//     const {name,cloudinaryImageId}=props?.info;
//     console.log(name);
//   return (
//     <div className="res-card">
//       <div className="food-image">
//         <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="Food" />
//       </div>
//       <h1 className="food-heading">{name}</h1>
//       <div className="details">
//         <p>Rating: 4</p>
//         <p>Delivery Time: 22 mins</p>
//         <p>Cuisine: Fast Food</p>
//       </div>
//     </div>
//   );
// };

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="res-list">
      
//        {
//         RestaurantList.map((restaurant)=>{
//             console.log(restaurant);
//             <RestaurantCard data={restaurant}/>
//         })
//        }

    
       
      


//       </div>
//     </div>
//   );
// };



const RestaurantCard = (props) => {
    const { name, cloudinaryImageId ,avgRating} = props?.data.info;
    console.log(name);
    return (
        <div className="res-card">
            <div className="food-image">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="Food" />
            </div>
            <h1 className="food-heading">{name}</h1>
            <div className="details">
                <p>{avgRating}</p>
                <p>Delivery Time: 22 mins</p>
                <p>Cuisine: Fast Food</p>
            </div>
        </div>
    );
};

// const Body = () => {
//     return (
//         <div className="body">
//             <div className="search">Search</div>
//             <div className="res-list">
//                 {RestaurantList.map((restaurant,index) => {
//                     console.log(restaurant);
//                     return <RestaurantCard key={restaurant.info.id} data={restaurant} />;
//                 })}
//             </div>
//         </div>
//     );
// };

const AppLayout = () => {

  //authentication
  const [userName,setUserName]=useState();

  useEffect(()=>{
    //Make an Api call and send username and password
    const data={
      name:"Lalit Kashyap"
    }
    setUserName(data.name);

  },[]);

  
  return (
    <Provider store={appStore}>

    <UserContext.Provider value={{loggedInUser:userName}}>

    <>
      <Header />
      <Outlet/>
         
      
    </>
    </UserContext.Provider>
    </Provider>


  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },{
        path:"/contactus",
        element:<Contact/>
      },{
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      },{
        path:"/cart",
        element:<Cart/>
      }
    ],

    errorElement:<Error/>
  },
 
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
