import React, { Component } from 'react'

export class LoginHeader extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(     
        <header role="heading" class="layout__head">
            <div class="kahoot-registration">
                <div id="navbar">
                    <div class="limit-width center-block">
                        <a href="/go/" data-bypass="true" class="logo"></a>
                        <a href="/register" data-bypass="true" class="btn register">
                            <span class="no-display column-layout-width-display">Sign up</span>
                        </a>
                        <p class="no-display column-layout-width-display">Not got an account?</p>
                    </div>
                </div>
                <div class="divider navbar hidden-phone no-display column-layout-width-display">
                </div>
            </div>
        </header>
        )        
    }
}