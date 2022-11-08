import logo from "./news.jpg";
import "./header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="row justify-content-center">
          <Link to="/home" id="logo">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
