import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminMenuBar.css";
import { useSelector } from "react-redux";
const AdminMenuBar = () => {
  const user = useSelector((state) => state.auth);
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

              {user.role && (
                <>
                  {" "}
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
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMenuBar;
