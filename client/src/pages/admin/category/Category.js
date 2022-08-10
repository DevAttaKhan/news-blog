import React from "react";
import { Link } from "react-router-dom";
import AdminContent from "../../../components/layout/AdminContent";
import CategoryTable from "../../../components/table/CategoryTable";
import Pagination from "../../../components/pagination/Pagination";

const Category = () => {
  return (
    <AdminContent title="All Categories">
      <div className="col-md-2">
        <Link className="add-new" to="/admin/add-category">
          add category
        </Link>
      </div>
      <div className="col-md-12">
        <CategoryTable />
        <Pagination />
      </div>
    </AdminContent>
  );
};

export default Category;
