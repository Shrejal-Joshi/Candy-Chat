import React from 'react';
import {GoogleOutlined} from  '@ant-design/icons';

import firebase from 'firebase/app';
import { auth } from '../firebase';

function Login() {
  return (
    <div id="login-page">

        <div id="login-card">
            <h1>Welcome to Candy Chat</h1>
            <div className="login-button google"
              onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
            >
                 <GoogleOutlined /> Sign In with Google

            </div>
            {/* <br></br>
            <div className="login-button facebook"
                 onClick={()=> auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}

            >
                 <FacebookOutlined /> Sign In with Facebook

            </div> */}
        </div>

        
     

    </div>
  );
}

export default Login;
