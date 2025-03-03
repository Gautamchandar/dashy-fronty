import React from 'react'
import "./MainDashboard.css"
const MainDashboard = () => {
  return (
    <>
      <div className="dash">
        <h1>Dashboard</h1>
        <div className="butt">
        <p>Plan, priortize and accomplish your task with ease</p>
            <button className='one-butt'>+ Add Event</button>
            <button id='another-butt'>Import Data</button>
        </div>
      </div>
    </>
  )
}

export default MainDashboard
