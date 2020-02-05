import React from 'react';
import { Route } from 'react-router-dom'

//components
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import Main from './components/Main'


function App() {
  return (
    <>
      <Route exact path='/login' component={LoginForm} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/' component={Main} />
    </>
  )
}

export default App;