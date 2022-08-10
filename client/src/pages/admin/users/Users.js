import React from "react";
import { Link } from "react-router-dom";
import AdminContent from "../../../components/layout/AdminContent";
import Pagination from "../../../components/pagination/Pagination";
import UserTable from "../../../components/table/UserTable";

const Users = () => {
  return (
    <AdminContent title="All Users">
      <div className="col-md-2">
        <Link className="add-new" to="/admin/add-user">
          Add User
        </Link>
      </div>

      <div className="col-md-12">
        <UserTable />
        <Pagination />
      </div>
    </AdminContent>
  );
};

export default Users;
