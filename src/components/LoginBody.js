import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {Redirect} from 'react-router-dom'

const config = {
    apiKey: 'AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM',
    authDomain: 'myproject-1234.firebaseapp.com',
    // ...
  };
  firebase.initializeApp(config);

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
  };

export class LoginBody extends Component {
    
    constructor(props) {
        super(props);
    }

    state = {
        isSignedIn: false,
    }
    
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            localStorage.setItem('user',user);
            this.setState({isSignedIn: !!user})
        })
    }    
    
    render() {
        if(this.state.isSignedIn){
            return (<Redirect to={'/'}/>)
        }
        return (
            <main role="main" class="layout__body layout__body--login">
                <div class="gutter-1">
                    <form>
                        <div class="text-align--center kahoot-registration margin-bottom--2">
                            <h2>Log in</h2>
                        </div>
                        <div class="margin-bottom--1">
                            {/* <button type="button" role="button" data-functional-selector="sign-in-google-button" class="auth-button auth-button--google-auth">
                                <span class="auth-button__text">Log in with Google</span>
                                <span class="icon auth-button__icon">
                                    <svg class="icon__svg" data-functional-selector="icon" focusable="false">
                                        <use class="icon__use" href="#google-auth"></use>
                                    </svg>
                                </span>
                            </button> */}
                            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                        </div>
                        {/* <button type="button" role="button" data-functional-selector="sign-in-microsoft-button" class="auth-button auth-button--microsoft-auth">
                            <span class="auth-button__text">Log in with Microsoft</span>
                            <span class="icon auth-button__icon">
                                <svg class="icon__svg" data-functional-selector="icon" focusable="false">
                                    <use class="icon__use" href="#microsoft-auth"></use>
                                </svg>
                            </span>
                        </button> */}
                        <div class="text-align--center">
                            <p>
                                <em>
                                    <a class="" data-functional-selector="login__forgot-password-url" href="/l/#forgotpassword">Lost your password?</a>
                                </em>
                            </p>
                        </div>
                        <div class="text-align--center">
                            <p>
                                <em>
                                    <a href="https://kahoot.uservoice.com" data-bypass="true">let us know</a>
                                </em>
                            </p>
                        </div>
                    </form>
                </div>
            </main>

            )
        }
}