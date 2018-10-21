import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Home from '../views/Home'
import ListQuestions from '../views/ListQuestions'

const AppRouter = () =>
    <Router>
        <div>
            <Route exact path='/' component={Home}/>
            <Route exact path='/danh-sach-cau-hoi' component={ListQuestions}/>
        </div>

    </Router>

export default AppRouter;