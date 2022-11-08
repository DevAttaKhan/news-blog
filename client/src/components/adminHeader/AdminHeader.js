import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./AdminHeader.css";
import logo from "./news.jpg";
const AdminHeader = () => {
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === "undefined") {
      localStorage.setItem("token", user.token);
    }
  }, [user]);

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
            <button>{user.username}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
