import React from 'react';
import './Searching.css';

const Searching = () => {
  return (
    <>
      <div className="header">
        <input type="text" placeholder="Search task..." className="search-bar" />
        <div className="button1">
          <button></button>
          <button></button>
        </div>
        <div className='Lp'>
          <button></button>
          <div className="user-info">
            <span className="user-name">Gautam Naugai</span>
            <span className="user-email">XYZ@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searching;
