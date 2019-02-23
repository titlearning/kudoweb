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
                localStorage.setItem('user',JSON.stringify(user));
                user['accessToken'] = accessToken;
                // database.ref().child('user').set()
            }, error=>console.log(error))
           database.ref('/user/').child(user.uid).set(userObj);
        }
    })
    }   
    
    render() {
        return (
            <section class="section one">
                <form>
                    <div className="text-align--center kahoot-registration margin-bottom--2">
                        <h2>Đăng nhập</h2>
                    </div>
                    <div className="margin-bottom--1">
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                    </div>
                </form>
            </section>
            )
        }
}

export default withRouter(LoginBody)