import React from "react";
import AddUpdatePostForm from "../../../components/addUpdatePostForm/AddUpdatePostForm";
import AdminContent from "../../../components/layout/AdminContent";

const AddPost = () => {
  return (
    <AdminContent title="Add new post">
      <AddUpdatePostForm />
    </AdminContent>
  );
};

export default AddPost;
