import React from "react";

const AddCategoryForm = () => {
  return (
    <form action="" method="POST" autoComplete="off">
      <div className="form-group">
        <label>Category Name</label>
        <input
          type="text"
          name="cat"
          className="form-control"
          placeholder="Category Name"
          required=""
        />
      </div>
      <input
        type="submit"
        name="save"
        className="btn btn-primary"
        value="Save"
        required=""
      />
    </form>
  );
};

export default AddCategoryForm;
