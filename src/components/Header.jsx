import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [login,setLogin]=useState("login");

  const changeStatus=()=>{
    if(login=="login")
setLogin("logout")
 else
 setLogin("login");
  }
    return (

      
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL} alt="Logo" />
        </div>
        <div className="nav-items">
          <ul>
            
            <li>
             <Link to="/">
             Home
             </Link>
            </li>
            <li>

            <Link to="/contactus">
            Contact Us
             </Link>
             </li>
            <li>
            <Link to="/about">
            About Us
             </Link>
             </li>
            <li>Orders</li>
            <button className="login-btn" onClick={()=>{
              changeStatus();
            }}>{login}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;