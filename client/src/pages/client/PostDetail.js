import React from "react";
import Header from "../../components/header/Header";
import MainContent from "../../components/layout/MainContent";
import MenuBar from "../../components/menuBar/MenuBar";
import SideBar from "../../components/sidebar/SideBar";
import SinglePostDetail from "../../components/singlePostDetail/SinglePostDetail";

const home = () => {
  return (
    <>
      <Header />
      <MenuBar />
      <MainContent>
        <div className="col-md-8">
          <SinglePostDetail />
        </div>

        <SideBar />
      </MainContent>
    </>
  );
};

export default home;
