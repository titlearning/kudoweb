import React from 'react'
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
import Home from '../views/Home'
import LeaderBoard from '../views/result/LeaderBoard'
import RankResult from '../views/result/RankResult'

const AppRouter = () =>
  <Router >
    <div>
      <Route exact path='/' component={Home}/>
      <Route path='/leaderboard/:roomid' component={LeaderBoard}/>
      <Route path='/finalresult/:roomid' component={RankResult}/>
    </div>
  </Router>

export default AppRouter;