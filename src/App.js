import React, {Component} from 'react';
import AppRouter from './routes/index'
import {init as firebaseInit} from './config/firebase'
class App extends Component {
    constructor(props) {
        super(props)
        firebaseInit()
    }

    render() {
        return (
            <AppRouter/>
        );
    }
}

export default App;
