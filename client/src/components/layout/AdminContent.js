import React from "react";
import "./AdminContent.css";

const AdminContent = (props) => {
  return (
    <div id="admin-content">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h1 className="admin-heading">{props.title}</h1>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
