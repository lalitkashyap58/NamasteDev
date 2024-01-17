import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [login, setLogin] = useState("login");
  const { loggedInUser } = useContext(UserContext);

  //selector-subscrining to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const changeStatus = () => {
    if (login == "login") setLogin("logout");
    else setLogin("login");
  };
  return (
    <div className="header">
      <div className="logo">
        <Link>
          <img src={LOGO_URL} alt="Logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <Link to="/cart">
            <li className="px-4 font-bold text-xl ">
              Cart {cartItems.length} ( Items){" "}
            </li>
          </Link>
          <button
            className="login-btn"
            onClick={() => {
              changeStatus();
            }}
          >
            {login}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
