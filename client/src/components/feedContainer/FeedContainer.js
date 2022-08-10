import React from "react";
import "./feedContainer.css";
import Pagination from "../pagination/Pagination";
import PostContainer from "../postContainer/PostContainer";

const FeedContainer = () => {
  return (
    <div className="feed-container">
      <h2 className="page-heading">Politics </h2>

      <PostContainer />
      <PostContainer />
      <PostContainer />
      <PostContainer />

      <Pagination />
    </div>
  );
};

export default FeedContainer;
