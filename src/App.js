import React from 'react';
import './App.css';
import Home from './components/home/Home';
import { Route, HashRouter } from "react-router-dom";


function App() {
  return (

    <div className="main-container">
      
        <HashRouter>
          <Route exact path="/" component={Home} />
        </HashRouter>
    </div>


  );
}

export default App;