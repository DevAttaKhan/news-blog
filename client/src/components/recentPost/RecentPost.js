import React from "react";
import "./recentPost.css";
import postImg from "./post-format.jpg";
const RecentPost = () => {
  return (
    <div className="recent-post">
      <a className="post-img" href="/">
        <img src={postImg} alt="" />
      </a>
      <div className="post-content">
        <h5>
          <a href="single.php?pid=36">some thing</a>
        </h5>
        <span>
          <i className="fa fa-tags" aria-hidden="true"></i>
          <a href="category.php?cid=2">Entertainment</a>
        </span>
        <span>
          <i className="fa fa-calendar" aria-hidden="true"></i>
          21 03,2022{" "}
        </span>
        <a className="read-more" href="single.php?pid=36">
          read more
        </a>
      </div>
    </div>
  );
};

export default RecentPost;
