import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../views/Home'
import Login from '../views/Login'
import QuestionDetail from '../views/QuestionDetail'
import Home from '../views/ListQuestion'

import Lobby from '../views/Lobby'
import GetReady from '../views/GetReady'
import GameBlock from '../views/GameBlock'
import LeaderBoard from '../views/result/LeaderBoard'
import RankResult from '../views/result/RankResult'

const AppRouter = () =>
  <Router >
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/question_detail/:id' component={QuestionDetail} />
      <Route exact path='/' component={Home}/>
      <Route exact path='/lobby' component={Lobby}/>
      <Route exact path='/getready' component={GetReady}/>
      <Route exact path='/gameblock' component={GameBlock}/>
      <Route path='/leaderboard/:roomid' component={LeaderBoard}/>
      <Route path='/finalresult/:roomid' component={RankResult}/>
    </div>
  </Router>

export default AppRouter;