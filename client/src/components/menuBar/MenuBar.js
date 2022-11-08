import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./menuBar.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../store/actions/index";

// const category = [
//   {
//     id: uuid(),
//     name: "Politics",
//   },
//   {
//     id: uuid(),
//     name: "Entertainments",
//   },
//   {
//     id: uuid(),
//     name: "Sports",
//   },
//   {
//     id: uuid(),
//     name: "Health",
//   },
// ];

const MenuBar = () => {
  const dispatch = useDispatch();
  const navItems = useSelector(({ category }) => category.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <div id="menu-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="menu">
              {navItems.map((el) => (
                <li key={el._id}>
                  <NavLink
                    className={(isActive) => (isActive ? "selected" : "")}
                    to={`/home/${el.category_name}`}
                  >
                    {el.category_name}
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
