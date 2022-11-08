import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createCategory, updateCategory } from "../../store/actions/index";

const AddCategoryForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [category, setCategory] = useState({ category_name: "" });
  const editCategory = useSelector((state) =>
    state.category.categories.find((el) => el._id === id)
  );
  const token = useSelector((state) => state.auth);
  useEffect(() => {
    setCategory(editCategory);
  }, [editCategory]);

  const handleChange = (e) => {
    setCategory({ ...category, category_name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateCategory(category, token.token, history));
    } else {
      dispatch(createCategory(category, token.token, history));
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Category Name</label>
        <input
          type="text"
          name="cat"
          className="form-control"
          placeholder="Category Name"
          required=""
          value={category?.category_name || ""}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        name="save"
        className="btn btn-primary"
        value={id ? "Update" : "Save"}
      />
    </form>
  );
};

export default AddCategoryForm;
