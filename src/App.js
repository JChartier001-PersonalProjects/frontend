import React from 'react';
import { Route } from 'react-router-dom'

//components
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'

function App() {
  return (
    <>
      <Route path='/login' component={LoginForm} />
      <Route path='/signup' component={SignUp} />
    </>
  )
}

export default App;
