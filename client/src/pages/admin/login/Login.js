import React from "react";
import { Route } from "react-router-dom";
import LoginForm from "../../../components/loginForm/LoginForm";

import "./Login.css";

const Login = () => {
  return (
    <div id="wrapper-admin" className="body-content">
      <div className="container">
        <div className="row">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
