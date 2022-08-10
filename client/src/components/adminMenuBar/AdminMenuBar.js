import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminMenuBar.css";

const AdminMenuBar = () => {
  return (
    <div id="admin-menubar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="admin-menu">
              <li>
                <NavLink activeClassName="selected" to="/admin/allposts">
                  Post
                </NavLink>
              </li>

              <li>
                <NavLink activeClassName="selected" to="/admin/category">
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/admin/users">
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMenuBar;
