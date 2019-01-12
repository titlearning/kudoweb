import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import logoKudo from '../images/kudo.png';
import logoTopica from '../images/logo_topica.png';

export class LoginHeader extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(     
        // <header role="heading" className="layout__head">
        //     <div className="kahoot-registration">
        //         <div id="navbar">
        //             <div className="limit-width center-block">
        //             <Button><img src={logoKudo} height="50px"/></Button>
        //                 {/* <a href="/register" data-bypass="true" className="btn register"> */}
        //                     {/* <span className="no-display column-layout-width-display"></span> */}
        //                 {/* </a> */}
        //                 {/* <p className="no-display column-layout-width-display">Not got an account?</p> */}
        //             </div>
        //         </div>
        //         <div className="divider navbar hidden-phone no-display column-layout-width-display">
        //         </div>
        //     </div>
        // </header>

        <header class="cf">
            <nav>
                <div class="logo"><img src={logoKudo} height="50px"/></div>
                <div class="logo" style={{float: 'right'}}><img src={logoTopica} height="50px"/></div>
            </nav>
        </header>
        )        
    }
}