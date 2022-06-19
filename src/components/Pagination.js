import React from "react";
import "../styles/Pagination.css";

const Pagination = ({ prevPage, nextPage }) => {
  return (
    <nav>
      <ul className="paginationMain">
        {
          <button className="paginationButtons" onClick={prevPage}>
            Previous
          </button>
        }
        {
          <button className="paginationButtons" onClick={nextPage}>
            Next
          </button>
        }
      </ul>
    </nav>
  );
};

export default Pagination;
