import React, { useEffect, useState } from "react";
import "./SearchBox.css";
import { useDispatch } from "react-redux";
import { getPublicPosts } from "../../store/actions/index";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [debounceSearchQuery, setDebounceSearchQuery] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearchQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (!debounceSearchQuery) return;
    dispatch(getPublicPosts(null, null, debounceSearchQuery));
  }, [debounceSearchQuery, dispatch]);

  return (
    <div className="search-box-container">
      <h4>Search</h4>
      <form className="search-post" action="search.php" method="GET">
        <div className="input-group">
          <input
            type="text"
            name="search"
            className="form-control"
            placeholder="Search ....."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-danger">
              Search
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
