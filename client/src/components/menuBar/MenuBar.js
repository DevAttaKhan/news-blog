import React from "react";
import { v4 as uuid } from "uuid";
import { NavLink } from "react-router-dom";
import "./menuBar.css";

const category = [
  {
    id: uuid(),
    name: "Politics",
  },
  {
    id: uuid(),
    name: "Entertainments",
  },
  {
    id: uuid(),
    name: "Sports",
  },
  {
    id: uuid(),
    name: "Health",
  },
];

const MenuBar = () => {
  return (
    <div id="menu-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="menu">
              {category.map((el) => (
                <li key={el.id}>
                  <NavLink
                    className={(isActive) => (isActive ? "selected" : "")}
                    to={el.id}
                  >
                    {el.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
