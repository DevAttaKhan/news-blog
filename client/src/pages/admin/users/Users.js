import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import AdminContent from "../../../components/layout/AdminContent";
import UserTable from "../../../components/table/UserTable";
import { getAllUsers } from "../../../store/actions";

const Users = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const totalPages = useSelector((state) => state.users.totalPages);

  const handlePagination = (e) => {
    dispatch(getAllUsers(user.token, e.selected));
  };
  return (
    <AdminContent title="All Users">
      <div className="col-md-2">
        <Link className="add-new" to="/admin/add-user">
          Add User
        </Link>
      </div>

      <div className="col-md-12">
        <UserTable />
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

export default Users;
