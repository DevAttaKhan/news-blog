import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";

import "./PostContainer.css";
import postImg from "./post_1.jpg";

const PostContainer = () => {
  return (
    <div className="post-content">
      <div className="row">
        <div className="col-md-4">
          <a className="post-img" href="single.php?pid=31">
            <img src={postImg} alt="" />
          </a>
        </div>
        <div className="col-md-8">
          <div className="inner-content clearfix">
            <h3>
              <a href="single.php?pid=31">third post</a>
            </h3>
            <div className="post-information">
              <span>
                <FontAwesomeIcon icon={faTags} />

                <a href="category.php?cid=1">Politics </a>
              </span>
              <span>
                <FontAwesomeIcon icon={faUser} />
                <a href="author.php?aid=5">Sali</a>
              </span>
              <span>
                <FontAwesomeIcon icon={faCalendar} />
                17 03,2022
              </span>
            </div>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem explicabo suscipit deserunt, qu{" "}
            </p>
            <a className="read-more pull-right" href="single.php?pid=31">
              read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
