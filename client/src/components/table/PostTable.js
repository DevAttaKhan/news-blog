import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, deletePost } from "../../store/actions/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import "./Table.css";
const PostTable = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const user = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getAllPosts(user.token));
  }, [dispatch, user]);

  const handelEdit = (id) => {
    history.push("add-post/" + id);
  };

  const handelDelete = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <table className="content-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Title</th>
          <th>Category</th>
          <th>Date</th>
          <th>Author</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((el, i) => {
          return (
            <tr key={el._id}>
              <td className="id">{i + 1}</td>
              <td>{el.title}</td>
              <td>{el.category.category_name}</td>
              <td>
                {new Date(el.post_date).toLocaleDateString("en-us", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </td>
              <td>{el.author.username}</td>
              <td className="edit">
                <button onClick={() => handelEdit(el._id)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </td>
              <td className="delete">
                <button onClick={() => handelDelete(el._id)}>
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

export default PostTable;
