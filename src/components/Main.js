import React from 'react'
import { Route } from 'react-router-dom'

//components
import NavBar from './NavBar'
import Footer from './Footer'

const Main = props => {
  return (
    <div className="App">
      <NavBar />
      <Footer />
    </div>
  )
}

export default Main