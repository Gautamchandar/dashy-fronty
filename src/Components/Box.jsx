// src/Box.js
import React from "react";
import './Box.css';

const Box = () => {
  return (
    <div className="box">
      <div className="box-header">
        <div className="header-text">Total Events</div>
        <div className="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <div className="box-number">24</div>
      <div className="box-footer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v8m-4-4h8"
          />
        </svg>
        <div className="footer-text">Increased from last month</div>
      </div>
    </div>
  );
};

export default Box;
