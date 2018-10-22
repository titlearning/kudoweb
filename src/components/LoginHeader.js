import React, { Component } from 'react'

export class LoginHeader extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(     
        <header role="heading" className="layout__head">
            <div className="kahoot-registration">
                <div id="navbar">
                    <div className="limit-width center-block">
                        <a href="/go/" data-bypass="true" className="logo"></a>
                        <a href="/register" data-bypass="true" className="btn register">
                            <span className="no-display column-layout-width-display">Sign up</span>
                        </a>
                        <p className="no-display column-layout-width-display">Not got an account?</p>
                    </div>
                </div>
                <div className="divider navbar hidden-phone no-display column-layout-width-display">
                </div>
            </div>
        </header>
        )        
    }
}