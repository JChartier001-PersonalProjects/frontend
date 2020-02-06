import React from 'react';
import {Route} from 'react-router-dom'

import './App.css';


import AddJob from './components/AddJob';

function App() {
  return (
    <div className="App">
      

    {/* *** */}
    <Route exact path="/add-job" component={AddJob} />

    <AddJob/>

    {/* *** */}

    </div>
  );
}

export default App;
