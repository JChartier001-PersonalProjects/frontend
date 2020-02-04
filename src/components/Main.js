import React from 'react'
import { Route } from 'react-router-dom'

//components
import NavBar from './NavBar'
import Footer from './Footer'
import SwipeView from './SwipeView'

const Main = props => {
  return (
    <div className="App">
      <NavBar />
      <SwipeView />
      <Footer />
    </div>
  )
}

export default Main