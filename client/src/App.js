import React from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "./pages/admin";
import Login from "./pages/admin/login/Login";
import Home from "./pages/client/Home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </>
  );
}

export default App;
