import React, { Component } from 'react'
import { withRouter } from 'react-router'
import LoginContainer from '../containers/LoginContainer'
import '../styles/login.css' 

export default class Login extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div data-reactroot="" data-functional-selector="login-app">
                <LoginContainer/>
            </div>
            
        )        
    }
}
