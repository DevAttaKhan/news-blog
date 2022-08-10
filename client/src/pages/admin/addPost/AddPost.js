import React from "react";
import AddPostForm from "../../../components/addPostForm/AddPostForm";
import AdminContent from "../../../components/layout/AdminContent";

const AddPost = () => {
  return (
    <AdminContent title="Add new post">
      <AddPostForm />
    </AdminContent>
  );
};

export default AddPost;
