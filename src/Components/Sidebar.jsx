import React from 'react'
import "./Sidebar.css"
const Sidebar = () => {
  return (
    <div>
      <div className="logoName">
        Code <span>Tikki</span>
      </div>
      <div className="menu">
       <p>Menu</p>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Tasks</a></li>
          <li><a href="#">Calender</a></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Team</a></li>
        </ul>
      </div>
      <div className="general">
        <p>General</p>
        <ul>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
      <div className="container">
      <div className="emoji-container">
        <span role="img" aria-label="emoji">📱</span>
      </div>
      <h1 className="title">Download our Mobile App</h1>
      <p className="subtitle">Get easy in another way</p>
      <button className="button">Download</button>
    </div>
    </div>
  )
}

export default Sidebar
