import React from "react";
import FeedContainer from "../../components/feedContainer/FeedContainer";
import Header from "../../components/header/Header";
import MainContent from "../../components/layout/MainContent";
import MenuBar from "../../components/menuBar/MenuBar";
import SideBar from "../../components/sidebar/SideBar";

const home = () => {
  return (
    <>
      <Header />
      <MenuBar />
      <MainContent>
        <div className="col-md-8">
          <FeedContainer />
        </div>

        <SideBar />
      </MainContent>
    </>
  );
};

export default home;
