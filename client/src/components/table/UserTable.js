import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const UserTable = () => {
  return (
    <table className="content-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Full Name</th>
          <th>User Name</th>
          <th>Role</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="id">6</td>
          <td>Wasif khan</td>
          <td>Wasi123</td>
          <td>Normal</td>
          <td className="edit">
            <a href="update-user.php?id=6">
              <FontAwesomeIcon icon={faEdit} />
            </a>
          </td>
          <td className="delete">
            <a href="delete-user.php?id=6">
              <FontAwesomeIcon icon={faTrash} />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserTable;
