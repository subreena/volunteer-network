import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from "../../App";

const LogIn = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);;
    }

    /* GOOGLE Sign in*/
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
        
            // The signed-in user info.
            const {displayName , email} = result.user;
            const signedInUser = {
                displayName: displayName,
                email: email ,
              

            }
            setLoggedInUser(signedInUser);
            history.replace(from);
          })
          
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode , errorMessage);
          });

    }



    return (
        <>
            <div className="login-form">
               <div className="container">
               <header className="d-flex align-items-center justify-content-center">
                   <Link to="/">
                   <img src={require('../../images/logos/Group 1329.png')} alt="" width="250" />
                   </Link>
                </header>
                <div className="login-form-content">
                    <h3>Sign in with</h3>
                    <button className="social-signIn" onClick={handleGoogleSignIn}>
                        <img src={require("../../images/logos/googleIcon.png")} alt="" height="32px" width="32px" />
                        <p>
                            Sign in with Google
               </p>
                        <span></span>
                    </button>
                </div>
               </div>
            </div>
        </>
    );
};

export default LogIn;