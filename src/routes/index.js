import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../views/Home'
import Login from '../views/Login'

function(){
  alert("dkm");
}

const AppRouter = () =>
  <Router >
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
    </div>
  </Router>

export default AppRouter;