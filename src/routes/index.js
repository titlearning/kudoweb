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
import { PrivateRoute } from '../auth/PrivateRoute'
import QuestionGroupCreate from '../views/question/QuestionGroupCreate'
import QuestionCreate from '../views/question/QuestionCreate'
import TotalResult from '../views/result/TotalResult'

const AppRouter = () =>
  <Router >
    <div>
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/' component={ListQuestion} />
      <PrivateRoute exact path='/question_detail/:id' component={QuestionDetail} />
      <PrivateRoute exact path='/lobby/:id' component={Lobby}/>
      <PrivateRoute exact path='/getready/:id' component={GetReady}/>
      <PrivateRoute exact path='/gameblock/:id' component={GameBlock}/>
      <PrivateRoute path='/question/creategroup' component={QuestionGroupCreate}/>
      <PrivateRoute path='/question/create/:questiongroupid' component={QuestionCreate}/>
      <PrivateRoute path='/leaderboard/:roomid' component={LeaderBoard}/>
      <PrivateRoute path='/finalresult/:roomid' component={RankResult}/>
      <PrivateRoute path='/totalresult/:roomid' component={TotalResult}/>
    </div>
  </Router>

export default AppRouter;