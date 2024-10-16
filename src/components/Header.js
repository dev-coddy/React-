import { LOGO_URL } from "../utils/constant";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
=======
import { useState } from "react";
>>>>>>> 4ebfe58646d0b29d3bd776549b5c5c4961da9cfc

const Header = () => {
  let [btnName, setBtnName] = useState("Login");

<<<<<<< HEAD
  console.log("header rendered");

  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);

=======
>>>>>>> 4ebfe58646d0b29d3bd776549b5c5c4961da9cfc
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          <li>
            <Link className="link-style" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-style" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link-style" to="/contact">
              Contact
            </Link>
          </li>
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
