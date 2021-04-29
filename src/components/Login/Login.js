import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Header from '../Header/Header';
import { FaGoogle } from "react-icons/fa";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length===0) {
  firebase.initializeApp(firebaseConfig)
}

const Login = () => {
  const history =useHistory();
  const location =useLocation();
  const {from}=location.state || {from:{pathname:"/"}};
  const [loggedInUser, setLoggedInUser]= useContext(UserContext);
  
  const  provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn=()=>{
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const {displayName, email, photoURL} = result.user;
    const signInUser ={
      name: displayName,
      email: email,
      photoURL: photoURL
    }
    setLoggedInUser(signInUser);
    history.replace(from);
  }) 
  }
  return (
    <div>
      <Header></Header>
        <div style={{display: 'grid', justifyContent: 'center', marginTop:'200px'}}>
        <button className="btn btn-outline-secondary" onClick={handleGoogleSignIn}><FaGoogle/>Continue With Google</button>
        </div>
    </div>
  );
};

export default Login;