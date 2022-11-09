import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { addPost, updatePost } from "../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./AddPostForm.css";

const AddUpdatePostForm = ({ id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentPost = useSelector(({ posts }) =>
    posts.posts.find((el) => el._id === id)
  );

  const [categories, setCategories] = useState([]);
  const [postValues, setPostValues] = useState(currentPost || {});
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    axios
      .get("http://localhost:3002/blog/v1/category", {
        headers: {
          authorization: "Bearer " + user.token,
        },
      })
      .then((res) => {
        setCategories(res.data.category);
      });
  }, []);

  const handelChange = (e) => {
    const newPostValues = { ...postValues };
    newPostValues[e.target.name] = e.target.value;
    setPostValues(newPostValues);
  };

  const pickImage = (e) => {
    setPostValues((prev) => ({ ...prev, post_img: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("author", user._id);
    data.append("title", postValues.title);
    data.append("description", postValues.description);
    data.append("category", postValues.category);
    data.append("post_img", postValues.post_img);
    if (id && currentPost) {
      dispatch(updatePost(id, data, user.token, history));
    } else {
      dispatch(addPost(data, user.token, history));
    }
  };

  return (
    <form
      className="mx-auto"
      encType="multipart/formData"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          autoComplete="off"
          onChange={handelChange}
          value={postValues.title}
        />
      </div>
      <div className="form-group">
        <label> Description</label>
        <textarea
          name="description"
          className="form-control"
          rows="5"
          value={postValues.description}
          onChange={handelChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handelChange}
          value={postValues.category}
        >
          <option disabled=""> Select Category</option>
          {categories.map((el) => (
            <option key={el._id} value={el._id}>
              {el.category_name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Post image</label>
        <input type="file" name="post_img" onChange={pickImage} />
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

export default AddUpdatePostForm;
