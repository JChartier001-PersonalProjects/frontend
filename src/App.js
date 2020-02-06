import React from 'react';
import {Route} from 'react-router-dom'

import './App.css';


import AddJob from './components/AddJob';

function App() {
  return (
    <div className="App">
      <h1>Droom</h1>
      

    {/* *** */}
    <Route exact path="/add-job" component={AddJob} />

    <AddJob/>

    {/* *** */}

    </div>
  );
}

export default App;
