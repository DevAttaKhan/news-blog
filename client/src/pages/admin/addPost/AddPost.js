import React from "react";
import { useParams } from "react-router-dom";
import AddUpdatePostForm from "../../../components/addUpdatePostForm/AddUpdatePostForm";
import AdminContent from "../../../components/layout/AdminContent";

const AddPost = () => {
  const { id } = useParams();
  const title = id ? "Edite Post" : "Add New Post";

  return (
    <AdminContent title={title}>
      <AddUpdatePostForm id={id} />
    </AdminContent>
  );
};

export default AddPost;
