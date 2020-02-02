import React from 'react';
import { Route } from 'react-router-dom'

//components
import LoginForm from './components/LoginForm'

function App() {
  return (
    <>
      <Route path='/login' component={LoginForm} />
    </>
  )
}

export default App;
