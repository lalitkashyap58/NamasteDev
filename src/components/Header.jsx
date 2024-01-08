import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
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
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
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