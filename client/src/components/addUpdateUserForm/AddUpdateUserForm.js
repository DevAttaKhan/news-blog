import React from "react";

const AddUpdateUserForm = () => {
  return (
    <form autoComplete="off">
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="fname"
          className="form-control"
          placeholder="First Name"
          required=""
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lname"
          className="form-control"
          placeholder="Last Name"
          required=""
        />
      </div>
      <div className="form-group">
        <label>User Name</label>
        <input
          type="text"
          name="user"
          className="form-control"
          placeholder="Username"
          required=""
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          required=""
        />
      </div>
      <div className="form-group">
        <label>User Role</label>
        <select className="form-control" name="role">
          <option value="0">Normal User</option>
          <option value="1">Admin</option>
        </select>
      </div>
      <input
        type="submit"
        name="save"
        className="btn btn-primary"
        value="Save"
        required=""
      />
    </form>
  );
};

export default AddUpdateUserForm;
