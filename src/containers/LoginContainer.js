import React, { Component } from 'react';
import { LoginHeader } from '../components/LoginHeader'
import LoginBody from '../components/LoginBody'

class LoginContainer extends Component{

    render(){
        return(
            
                    <div className="">
                        <LoginHeader/>
                        <LoginBody/>
                    </div>
            
        )
    }
}

export default LoginContainer