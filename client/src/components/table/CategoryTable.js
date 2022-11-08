import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllCategories, deleteCategory } from "../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Table.css";

const CategoryTable = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllCategories(user.token));
  }, [dispatch, user]);

  const handleEdit = (id) => {
    history.push(`/admin/add-category/${id}`);
  };
  const handleDelete = (id) => {
    dispatch(deleteCategory(id, user.token));
  };

  return (
    <table className="content-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Category Name</th>
          <th>No. of Posts</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((el, i) => {
          return (
            <tr key={el._id}>
              <td className="id">{i + 1}</td>
              <td>{el.category_name}</td>
              <td>{el.posts}</td>
              <td className="edit">
                <button onClick={() => handleEdit(el._id)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </td>

              <td className="delete">
                <button onClick={() => handleDelete(el._id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CategoryTable;
