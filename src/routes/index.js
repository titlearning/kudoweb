import React from 'react'
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
import Home from '../views/Home'
import ListQuestion from '../views/ListQuestion'

const AppRouter = () =>
  <Router >
     <div>
      <Route exact path='/' component={Home}/>
      <Route exact path='/danh-sach-cau-hoi' component={ListQuestion}/>
    </div>
  </Router>

export default AppRouter;