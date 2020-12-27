import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import BuildPage from './pages/BuildPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <Navbar />
      <h1>BURGER APP</h1>

      <Switch>        
        <Route path="/builder">
          <BuildPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
