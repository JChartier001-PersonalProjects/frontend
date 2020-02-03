import React from 'react'
import { Route } from 'react-router-dom'

//components
import NavBar from './NavBar'

const Main = props => {
  return (
    <div className="App">
      <NavBar props={props}/>
    </div>
  )
}

export default Main