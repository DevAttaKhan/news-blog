import logo from "./news.jpg";
import "./header.css";
import React from "react";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="row justify-content-center">
          <a href="index.php" id="logo">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
