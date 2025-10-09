import React from "react";
import "./Pagination.css";

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  const buttons = [];
  for (let i = 1; i <= totalPages; i++) {
    buttons.push(i);
  }

  function handleNext() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handlePrev() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handlePageData(page) {
    setCurrentPage(page);
  }

  return (
    <div className="custom-pagination">
      <button
        className="page-btn"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {buttons.map((i, index) => (
        <button
          key={index}
          className={currentPage === i ? "active-btn" : "page-btn"}
          onClick={() => handlePageData(i)}
        >
          {i}
        </button>
      ))}

      <button
        className="page-btn"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
