import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./feedContainer.css";
import PostContainer from "../postContainer/PostContainer";
import { getPublicPosts } from "../../store/actions/index";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";

const FeedContainer = () => {
  const { term } = useParams();

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const totalPages = useSelector((state) => state.posts.totalPages);
  useEffect(() => {
    term ? dispatch(getPublicPosts(0, term)) : dispatch(getPublicPosts());
  }, [dispatch, term]);
  console.log(posts);

  const handlePagination = (e) => {
    term
      ? dispatch(getPublicPosts(e.selected, term))
      : dispatch(getPublicPosts(e.selected));
  };

  return (
    <div className="feed-container">
      <h2 className="page-heading">{term || "All"}</h2>

      {posts.map((el) => {
        return (
          <PostContainer
            key={el._id}
            id={el._id}
            title={el.title}
            author={el?.author?.username}
            category={el?.category?.category_name}
            date={el?.post_date}
            img={el?.post_img}
            description={el?.description}
          />
        );
      })}

      <ReactPaginate
        nextLabel="next "
        previousLabel=" previous"
        pageCount={totalPages}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName="page-link"
        nextClassName="page-item"
        previousClassName="page-item"
        nextLinkClassName="page-link"
        previousLinkClassName="page-link"
        activeClassName="active"
        onPageChange={handlePagination}
      />
    </div>
  );
};

export default FeedContainer;
