import React from "react";
import "./AddPostForm.css";

const AddPostForm = () => {
  return (
    <form action="save-post.php" method="POST" className="mx-auto">
      <div className="form-group">
        <label htmlFor="post_title">Title</label>
        <input
          type="text"
          name="post_title"
          className="form-control"
          autoComplete="off"
          required=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1"> Description</label>
        <textarea
          name="postdesc"
          className="form-control"
          rows="5"
          required=""
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Category</label>
        <select name="category" className="form-control">
          <option disabled=""> Select Category</option>
          <option value="1">Politics </option>
          <option value="2">Entertainment</option>
          <option value="5">Sports</option>
          <option value="6">health</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Post image</label>
        <input type="file" name="fileToUpload" required="" />
      </div>
      <input
        type="submit"
        name="submit"
        className="btn btn-primary"
        value="Save"
        required=""
      />
    </form>
  );
};

export default AddPostForm;
