import React, { useEffect } from "react";
import RecentPostsContainer from "../layout/RecentPostsContainer";
import RecentPost from "../recentPost/RecentPost";
import SearchBox from "../searchBox/SearchBox";
import { useSelector, useDispatch } from "react-redux";
import { getRecentPosts } from "../../store/actions/index";

const SideBar = () => {
  const dispatch = useDispatch();
  const recentPosts = useSelector((state) => state.recentPosts);

  useEffect(() => {
    dispatch(getRecentPosts());
  }, [dispatch]);

  return (
    <div id="sidebar" className="col-md-4">
      <SearchBox />
      <RecentPostsContainer>
        <h4>Recent Posts</h4>

        {recentPosts.map((el) => (
          <RecentPost
            key={el._id}
            title={el.title}
            category={el.category.category_name}
            date={el.post_date}
            img={el.post_img}
          />
        ))}
      </RecentPostsContainer>
    </div>
  );
};

export default SideBar;
