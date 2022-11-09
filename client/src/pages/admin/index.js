import React from "react";

import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import AdminHeader from "../../components/adminHeader/AdminHeader";
import AdminMenuBar from "../../components/adminMenuBar/AdminMenuBar";
import AddCategory from "./addCategory/AddCategory";
import AddPost from "./addPost/AddPost";
import AddUpdateUser from "./addUpdateUser/AddUpdateUser";
import AllPosts from "./allPosts/AllPosts";
import Category from "./category/Category";
import Users from "./users/Users";

const Admin = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <AdminHeader />
      <AdminMenuBar />
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/allposts`} />
        </Route>
        <Route path={`${path}/users`}>
          <Users />
        </Route>
        <Route path={`${path}/allposts`}>
          <AllPosts />
        </Route>
        <Route path={`${path}/add-post/:id`}>
          <AddPost />
        </Route>
        <Route path={`${path}/add-post`}>
          <AddPost />
        </Route>
        <Route path={`${path}/category`}>
          <Category />
        </Route>
        <Route path={`${path}/add-category/:id`}>
          <AddCategory />
        </Route>
        <Route path={`${path}/add-category`}>
          <AddCategory />
        </Route>
        <Route path={`${path}/add-user/:id`}>
          <AddUpdateUser />
        </Route>
        <Route path={`${path}/add-user/`}>
          <AddUpdateUser />
        </Route>
      </Switch>
    </>
  );
};

export default Admin;
