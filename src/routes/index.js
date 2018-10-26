import React from 'react'
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
import Home from '../views/Home'
import Lobby from '../views/Lobby'
import GetReady from '../views/GetReady'
import GameBlock from '../views/GameBlock'

import LeaderBoard from '../views/result/LeaderBoard'
import FinalResult from '../views/result/FinalResult'

import QuestionGroupCreate from '../views/question/QuestionGroupCreate'
import QuestionCreate from '../views/question/QuestionCreate'

const AppRouter = () =>
  <Router >
    <div>
      <Route exact path='/' component={Home}/>
      <Route exact path='/lobby' component={Lobby}/>
      <Route exact path='/getready' component={GetReady}/>
      <Route exact path='/gameblock' component={GameBlock}/>
      <Route path='/leaderboard' component={LeaderBoard}/>
      <Route path='/finalresult/:userid' component={FinalResult}/>
      <Route path='/question/creategroup' component={QuestionGroupCreate}/>
      <Route path='/question/create' component={QuestionCreate}/>
    </div>
  </Router>

export default AppRouter;