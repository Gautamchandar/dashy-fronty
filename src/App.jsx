import React from 'react'
import Dashboard from './Components/Sidebar'
import Searching from './Components/Searching'
import MainDashboard from './Components/MainDashboard'
// import Box from './Components/Box'

const App = () => {
  return (
    <>
      <Searching/>
     <MainDashboard/>
     {/* <Box/> */}
      <Dashboard/>
    </>
  )
}

export default App
