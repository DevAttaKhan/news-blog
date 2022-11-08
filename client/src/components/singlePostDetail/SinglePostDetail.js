import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SinglePostDetail = () => {
  const { id } = useParams();

  const post = useSelector(({ posts }) =>
    posts.posts.find((el) => el._id === id)
  );

  return (
    <div className="post-container">
      <div className="post-content single-post">
        <h3>{post.title}</h3>
        <div className="post-information">
          <span>
            <FontAwesomeIcon icon={faTags} />
            {post?.category?.category_name}
          </span>
          <span>
            <FontAwesomeIcon icon={faUser} />
            <a href="author.php">{post?.author?.username}</a>
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendar} />
            {post?.post_date}
          </span>
        </div>
        <img className="single-feature-image" src={post?.post_img} alt="" />
        <p className="description">{post?.description}</p>
      </div>
    </div>
  );
};

export default SinglePostDetail;
