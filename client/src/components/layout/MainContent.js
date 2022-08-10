import React from "react";
import "./MainContents.css";

const MainContent = (props) => {
  return (
    <div id="main-content">
      <div className="container">
        <div className="row">{props.children}</div>
      </div>
    </div>
  );
};

export default MainContent;
