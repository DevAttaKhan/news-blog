import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/index";
import "./LoginForm.css";
import logo from "../header/news.jpg";
const LoginForm = () => {
  const dispatch = useDispatch();
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(loginValues, history));
  };

  const handelChange = (e) => {
    const newLoginValues = { ...loginValues };
    newLoginValues[e.target.name] = e.target.value;
    setLoginValues(newLoginValues);
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
            value={loginValues.username}
            onChange={handelChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handelChange}
            value={loginValues.password}
          />
        </div>
        <button className="btn btn-primary">LogIn</button>
      </form>
    </div>
  );
};

export default LoginForm;
