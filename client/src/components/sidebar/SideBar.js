import React from "react";
import RecentPostsContainer from "../layout/RecentPostsContainer";
import RecentPost from "../recentPost/RecentPost";
import SearchBox from "../searchBox/SearchBox";

const SideBar = () => {
  return (
    <div id="sidebar" className="col-md-4">
      <SearchBox />
      <RecentPostsContainer>
        <h4>Recent Posts</h4>

        <RecentPost />
        <RecentPost />
        <RecentPost />
        <RecentPost />
      </RecentPostsContainer>
    </div>
  );
};

export default SideBar;
