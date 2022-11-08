import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, deleteUser } from "../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const UserTable = () => {
  const history = useHistory();
  const users = useSelector((state) => state.users.users);
  const token = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers(token.token));
  }, [dispatch, token]);

  const handleEdit = (id) => {
    history.push(`/admin/add-user/${id}`);
  };
  const handleDelete = (id) => {
    dispatch(deleteUser(id, token.token));
  };

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
        {users.map((el, i) => {
          return (
            <tr key={el._id}>
              <td className="id">{i + 1}</td>
              <td>
                {el.first_name} {el.last_name}
              </td>
              <td>{el.username}</td>
              <td>{el.role ? "Admin" : "Normal"}</td>
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

export default UserTable;
