import React, { useState, useEffect } from "react";
import { addUser, updateUser } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const AddUpdateUserForm = () => {
  const { id } = useParams();

  const history = useHistory();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ role: "false" });
  const editUser = useSelector((state) =>
    state.users.find((el) => el._id === id)
  );
  const token = useSelector((state) => state.auth);
  useEffect(() => {
    if (editUser) {
      setUserData(editUser);
    }
  }, [editUser]);

  const handleChange = (e) => {
    const newUserData = { ...userData };
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateUser(userData, token.token, history));
    } else {
      if (Object.keys(userData).length !== 0) {
        dispatch(addUser(userData, token.token, history));
      }
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          className="form-control"
          placeholder="First Name"
          onChange={handleChange}
          value={userData.first_name || ""}
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          className="form-control"
          placeholder="Last Name"
          onChange={handleChange}
          value={userData.last_name || ""}
        />
      </div>
      <div className="form-group">
        <label>User Name</label>
        <input
          type="text"
          name="username"
          className="form-control"
          placeholder="Username"
          onChange={handleChange}
          value={userData.username || ""}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          onChange={handleChange}
          value={userData.password || ""}
        />
      </div>
      <div className="form-group">
        <label>User Role</label>
        <select
          className="form-control"
          name="role"
          onChange={handleChange}
          value={userData.role || "false"}
        >
          <option value="false">Normal User</option>
          <option value="true">Admin</option>
        </select>
      </div>
      <input
        type="submit"
        name="save"
        className="btn btn-primary"
        value={id ? "Update" : "Save"}
        required=""
      />
    </form>
  );
};

export default AddUpdateUserForm;
