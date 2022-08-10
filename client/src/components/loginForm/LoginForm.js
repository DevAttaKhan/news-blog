import React from "react";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";
import logo from "../header/news.jpg";
const LoginForm = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/admin");
  };

  return (
    <div className="mx-auto col-md-4">
      <img className="logo" src={logo} alt="logo" />
      <h3 className="heading">Admin</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder=""
            required=""
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder=""
            required=""
          />
        </div>
        <button className="btn btn-primary">LogIn</button>
      </form>
    </div>
  );
};

export default LoginForm;
