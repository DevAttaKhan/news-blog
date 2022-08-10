import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Table.css";

const CategoryTable = () => {
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
        <tr>
          <td className="id">1</td>
          <td>Politics </td>
          <td>2</td>
          <td className="edit">
            <a href="update-category.php?id=1">
              <FontAwesomeIcon icon={faEdit} />
            </a>
          </td>
          <td className="delete">
            <a href="delete-category.php?id=1">
              <FontAwesomeIcon icon={faTrash} />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CategoryTable;
