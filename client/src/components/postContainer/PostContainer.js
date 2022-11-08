import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./PostContainer.css";

const PostContainer = ({
  title,
  category,
  author,
  date,
  description,
  img,
  id,
}) => {
  return (
    <div className="post-content">
      <div className="row">
        <div className="col-md-4">
          <Link className="post-img" to={`/details/${id}`}>
            <img src={img} alt="" />
          </Link>
        </div>
        <div className="col-md-8">
          <div className="inner-content clearfix">
            <h3>
              <Link to={`/details/${id}`}>{title}</Link>
            </h3>
            <div className="post-information">
              <span>
                <FontAwesomeIcon icon={faTags} />

                <Link to={`/home/${category}`}>{category} </Link>
              </span>
              <span>
                <FontAwesomeIcon icon={faUser} />
                <Link to={`/home/${author}`}>{author}</Link>
              </span>
              <span>
                <FontAwesomeIcon icon={faCalendar} />
                {date}
              </span>
            </div>
            <p className="description">{description}</p>
            <Link className="read-more pull-right" to={`/details/${id}`}>
              read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
