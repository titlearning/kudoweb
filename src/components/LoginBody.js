import React, { Component } from 'react'
import firebase from 'firebase'
import {database} from '../config/firebase';
import { withRouter } from 'react-router'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

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

class LoginBody extends Component {
    
    constructor(props) {
        super(props)
    }

    state = {
        isSignedIn: false,
    }

    componentWillMount= () => {
        if(localStorage.getItem("accessToken") !== null){
            this.props.history.push('/')
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                let userObj = {};
                userObj['displayName'] = user.displayName;
                userObj['email'] = user.email;
                userObj['phoneNumber'] = user.phoneNumber;
                userObj['uid'] = user.uid;
                userObj['emailVerified'] = user.emailVerified;
                userObj['providerData'] = user.providerData;
            user.getIdToken().then(function(accessToken){
                localStorage.setItem('user',user);
                user['accessToken'] = accessToken;
                // database.ref().child('user').set()
            }, error=>console.log(error))
           database.ref('/user/').child(user.uid).set(userObj);
        }
    })
    }   
    
    render() {
        return (
            <main role="main" className="layout__body layout__body--login">
                <div className="gutter-1">
                    <form>
                        <div className="text-align--center kahoot-registration margin-bottom--2">
                            <h2>Log in</h2>
                        </div>
                        <div className="margin-bottom--1">
                            {/* <button type="button" role="button" data-functional-selector="sign-in-google-button" className="auth-button auth-button--google-auth">
                                <span className="auth-button__text">Log in with Google</span>
                                <span className="icon auth-button__icon">
                                    <svg className="icon__svg" data-functional-selector="icon" focusable="false">
                                        <use className="icon__use" href="#google-auth"></use>
                                    </svg>
                                </span>
                            </button> */}
                            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                        </div>
                        {/* <button type="button" role="button" data-functional-selector="sign-in-microsoft-button" className="auth-button auth-button--microsoft-auth">
                            <span className="auth-button__text">Log in with Microsoft</span>
                            <span className="icon auth-button__icon">
                                <svg className="icon__svg" data-functional-selector="icon" focusable="false">
                                    <use className="icon__use" href="#microsoft-auth"></use>
                                </svg>
                            </span>
                        </button> */}
                        <div className="text-align--center">
                            <p>
                                <em>
                                    <a className="" data-functional-selector="login__forgot-password-url" href="/l/#forgotpassword">Lost your password?</a>
                                </em>
                            </p>
                        </div>
                        <div className="text-align--center">
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

export default withRouter(LoginBody)