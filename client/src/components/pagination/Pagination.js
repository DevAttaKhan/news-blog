import React from "react";
import "./Pagination.css";

const Pagination = ({ pages }) => {
  const numPages = Array(pages);
  numPages.fill(3);
  return (
    <ul className="pagination">
      <li className="page-item">
        <a className="page-link" href="/">
          Previous
        </a>
      </li>

      <li className="page-item">
        <a className="page-link" href="/">
          Next
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
