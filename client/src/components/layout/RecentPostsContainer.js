import React from "react";
import "./RecentPostsContainer.css";

const RecentPostsContainer = (props) => {
  return <div className="recent-post-container">{props.children}</div>;
};

export default RecentPostsContainer;
