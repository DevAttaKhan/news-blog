import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Admin from "./pages/admin";
import Login from "./pages/admin/login/Login";
import Home from "./pages/client/Home";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import PostDetail from "./pages/client/PostDetail";

function App() {
  const token = useSelector((state) => state.auth);

  return (
    <>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/home/:term">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/details/:id">
            <PostDetail />
          </Route>
          <Route path="/admin">
            {token ? <Admin /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </ErrorBoundary>
    </>
  );
}

export default App;
