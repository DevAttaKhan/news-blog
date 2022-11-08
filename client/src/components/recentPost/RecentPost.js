import React from "react";
import "./recentPost.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faCalendar } from "@fortawesome/free-solid-svg-icons";
const RecentPost = ({ title, category, date, img, id }) => {
  return (
    <div className="recent-post">
      <a className="post-img" href="/">
        <img src={img} alt="" />
      </a>
      <div className="post-content">
        <h5>
          <a href="single.php?pid=36">{title}</a>
        </h5>
        <span>
          <FontAwesomeIcon icon={faTags} />

          <a href="category.php?cid=2">{category}</a>
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendar} />
          {date}
        </span>
        <Link className="read-more" to={`detail/${id}`}>
          read more
        </Link>
      </div>
    </div>
  );
};

export default RecentPost;
