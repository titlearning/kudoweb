import React from 'react'
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
import Home from '../views/Home'
import LeaderBoard from '../views/result/LeaderBoard'
import FinalResult from '../views/result/FinalResult'

const AppRouter = () =>
  <Router >
    <div>
      <Route exact path='/' component={Home}/>
      <Route path='/leaderboard' component={LeaderBoard}/>
      <Route path='/finalresult/:userid' component={FinalResult}/>
    </div>
  </Router>

export default AppRouter;