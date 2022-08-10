import React from "react";
import { Link } from "react-router-dom";
import "./AllPost.css";
// import AdminHeader from "../../../components/adminHeader/AdminHeader";
// import AdminMenuBar from "../../../components/adminMenuBar/AdminMenuBar";
import AdminContent from "../../../components/layout/AdminContent";
import Pagination from "../../../components/pagination/Pagination";
import PostTable from "../../../components/table/PostTable";

const AllPosts = () => {
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
          <Pagination />
        </div>
      </AdminContent>
    </>
  );
};

export default AllPosts;
