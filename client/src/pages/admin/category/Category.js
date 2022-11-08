import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import AdminContent from "../../../components/layout/AdminContent";
import CategoryTable from "../../../components/table/CategoryTable";
import { getAllCategories } from "../../../store/actions/index";
const Category = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const totalPages = useSelector((state) => state.category.totalPages);

  const handlePagination = (e) => {
    dispatch(getAllCategories(user.token, e.selected));
  };
  return (
    <AdminContent title="All Categories">
      <div className="col-md-2">
        <Link className="add-new" to="/admin/add-category">
          add category
        </Link>
      </div>
      <div className="col-md-12">
        <CategoryTable />
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
  );
};

export default Category;
