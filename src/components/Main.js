import React from 'react'
import { Route } from 'react-router-dom'

//components
import NavBar from './NavBar'
import Footer from './Footer'
import ShowProfile from './JobSeeker/Profile/ShowProfile'

const Main = props => {
  return (
    <div className="App">
      <NavBar />
      <ShowProfile />
      <Footer />
    </div>
  )
}

export default Main