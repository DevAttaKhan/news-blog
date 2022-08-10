import React from "react";
import "./AdminHeader.css";
import logo from "./news.jpg";

const AdminHeader = () => {
  return (
    <div id="header-admin">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-2">
            <a href="post.php">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </div>

          <div>
            <a href="logout.php" className="admin-logout">
              atk logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
