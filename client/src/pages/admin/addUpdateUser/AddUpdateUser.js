import React from "react";
import AddUpdateUserForm from "../../../components/addUpdateUserForm/AddUpdateUserForm";
import AdminContent from "../../../components/layout/AdminContent";

const AddUpdateUser = () => {
  return (
    <AdminContent title="Add User">
      <div className="col-md-6 mx-auto ">
        <AddUpdateUserForm />
      </div>
    </AdminContent>
  );
};

export default AddUpdateUser;
