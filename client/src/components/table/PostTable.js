import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Table.css";
const PostTable = () => {
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
        <tr>
          <td className="id">1</td>
          <td>some thing</td>
          <td>Entertainment</td>
          <td>21 03,2022</td>
          <td>atk</td>
          <td className="edit">
            <a href="update-post.php?id=36">
              <FontAwesomeIcon icon={faEdit} />
            </a>
          </td>
          <td className="delete">
            <a href="delete-post.php?id=36&amp;catid=2">
              <FontAwesomeIcon icon={faTrash} />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PostTable;
