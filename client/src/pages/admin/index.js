import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminHeader from "../../components/adminHeader/AdminHeader";
import AdminMenuBar from "../../components/adminMenuBar/AdminMenuBar";
import AddCategory from "./addCategory/AddCategory";
import AddPost from "./addPost/AddPost";
import AddUpdateUser from "./addUpdateUser/AddUpdateUser";
import AllPosts from "./allPosts/AllPosts";
import Category from "./category/Category";
import Users from "./users/Users";

const Admin = () => {
  return (
    <>
      <AdminHeader />
      <AdminMenuBar />
      <Switch>
        <Route exact path="/admin">
          <Redirect to="/admin/users" />
        </Route>
        <Route path="/admin/users">
          <Users />
        </Route>
        <Route path="/admin/allposts">
          <AllPosts />
        </Route>
        <Route path="/admin/add-post">
          <AddPost />
        </Route>
        <Route path="/admin/category">
          <Category />
        </Route>
        <Route path="/admin/add-category">
          <AddCategory />
        </Route>
        <Route path="/admin/add-user">
          <AddUpdateUser />
        </Route>
      </Switch>
    </>
  );
};

export default Admin;
