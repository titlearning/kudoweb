import React, { Component } from 'react';
import { LoginHeader } from '../components/LoginHeader'
import { LoginBody } from '../components/LoginBody'

class LoginContainer extends Component{

    render(){
        return(
            <div className="layout layout--login layout--new-topbar-active">
                <div className="layout__circle"></div>
                <div className="layout__half-circle"></div>
                <div id="layout" className="layout__inner">
                    <div className="layout__sidebar"></div>
                    <div className="layout__body-wrapper">
                        <LoginHeader/>
                        <LoginBody/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginContainer