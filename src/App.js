import React from 'react'
import {Switch, Route} from 'react-router-dom';
import NavlinkItem from './components/NavlinkItem';
import BuildPage from './pages/BuildPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <ul className="nav">          
            <NavlinkItem to="/" text="Home" />  
            <NavlinkItem to="/builder" text="Burger Builder" />        
          </ul>
        </div>        
      </div>
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
