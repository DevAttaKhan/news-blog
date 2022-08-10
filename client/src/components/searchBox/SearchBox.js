import React from "react";
import "./SearchBox.css";

const SearchBox = () => {
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
