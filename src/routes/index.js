import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../views/Home'
import Login from '../views/Login'
import QuestionDetail from '../views/QuestionDetail'

const AppRouter = () =>
  <Router >
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/question_detail' component={QuestionDetail} />
    </div>
  </Router>

export default AppRouter;