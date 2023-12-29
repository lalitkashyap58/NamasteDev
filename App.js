// App.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Make sure to import your styles

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large" alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Orders</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <div className="food-image">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4" alt="Food" />
      </div>
      <h1 className="food-heading">KFC</h1>
      <div className="details">
        <p>Rating: 4</p>
        <p>Delivery Time: 22 mins</p>
        <p>Cuisine: Fast Food</p>
      </div>
    </div>
  );
};
const RestaurantList=()=>{
    return(
        <div className="res-container">

<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>

        </div>
    )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <RestaurantList/>
    </div>
  );
};

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
