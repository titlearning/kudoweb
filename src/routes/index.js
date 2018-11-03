import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Login from '../views/Login'
import QuestionDetail from '../views/QuestionDetail'
import Lobby from '../views/Lobby'
import GetReady from '../views/GetReady'
import GameBlock from '../views/GameBlock'
import LeaderBoard from '../views/result/LeaderBoard'
import RankResult from '../views/result/RankResult'
import ListQuestion from '../views/ListQuestion';

import QuestionGroupCreate from '../views/question/QuestionGroupCreate'
import QuestionCreate from '../views/question/QuestionCreate'

const AppRouter = () =>
  <Router >
    <div>
      <Route exact path='/' component={ListQuestion} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/question_detail/:id' component={QuestionDetail} />
      <Route exact path='/lobby' component={Lobby}/>
      <Route exact path='/getready' component={GetReady}/>
      <Route exact path='/gameblock' component={GameBlock}/>
      <Route path='/question/creategroup' component={QuestionGroupCreate}/>
      <Route path='/question/create' component={QuestionCreate}/>
      <Route path='/leaderboard/:roomid' component={LeaderBoard}/>
      <Route path='/finalresult/:roomid' component={RankResult}/>
    </div>
  </Router>

export default AppRouter;