import React from 'react'
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
import Home from '../views/Home'
import Lobby from '../views/Lobby'
import GetReady from '../views/GetReady'
import GameBlock from '../views/GameBlock'


const AppRouter = () =>
  <Router >
    <div>
      <Route exact path='/' component={Home}/>
      <Route exact path='/lobby' component={Lobby}/>
      <Route exact path='/getready' component={GetReady}/>
      <Route exact path='/gameblock' component={GameBlock}/>
    </div>
  </Router>

export default AppRouter;