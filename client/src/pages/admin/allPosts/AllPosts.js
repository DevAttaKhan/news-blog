import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./AllPost.css";
// import AdminHeader from "../../../components/adminHeader/AdminHeader";
// import AdminMenuBar from "../../../components/adminMenuBar/AdminMenuBar";
import AdminContent from "../../../components/layout/AdminContent";
import PostTable from "../../../components/table/PostTable";
import ReactPaginate from "react-paginate";
import { getAllPosts } from "../../../store/actions";

const AllPosts = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const totalPages = useSelector((state) => state.posts.totalPages);

  const handlePagination = (e) => {
    dispatch(getAllPosts(user.token, e.selected));
  };

  return (
    <>
      <AdminContent title="All Posts">
        <div className="col-md-2">
          <Link className="add-new" to="/admin/add-post">
            add post
          </Link>
        </div>
        <div className="col-md-12">
          <PostTable />
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
      </AdminContent>
    </>
  );
};

export default AllPosts;
