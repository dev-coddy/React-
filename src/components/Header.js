import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
