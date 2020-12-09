import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Interface from "./Interface";
import About from './About';
import Login from './Login';
import Signup from './SignUp';
import Adminpanel from './AdminPanel';


function App() {
  return (
  <Router>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/adminpanel">
            <Adminpanel />
          </Route>
          <Route path="/">
            <Interface />
          </Route>
          
        </Switch>
    </Router>
  )}

export default App;
