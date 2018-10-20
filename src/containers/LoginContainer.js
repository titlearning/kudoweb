import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { LoginHeader } from '../components/LoginHeader'
import { LoginBody } from '../components/LoginBody'

class LoginContainer extends Component{

    render(){
        return(
            <div class="layout layout--login layout--new-topbar-active">
                <div class="layout__circle"></div>
                <div class="layout__half-circle"></div>
                <div id="layout" class="layout__inner">
                    <div class="layout__sidebar"></div>
                    <div class="layout__body-wrapper">
                        <LoginHeader/>
                        <LoginBody/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginContainer