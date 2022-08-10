import React from "react";
import AddCategoryForm from "../../../components/addCategoryForm/AddCategoryForm";
import AdminContent from "../../../components/layout/AdminContent";

const AddCategory = () => {
  return (
    <AdminContent title="Add New Category">
      <div className="col-md-6 mx-auto mt-5">
        <AddCategoryForm />
      </div>
    </AdminContent>
  );
};

export default AddCategory;
