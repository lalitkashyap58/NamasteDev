// App.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css"; // Make sure to import your styles
import Header from "./components/Header";
import Body from "./components/Body";



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
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
