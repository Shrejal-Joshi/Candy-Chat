import  * as firebase from "firebase/app";
import 'firebase/auth';



export const auth = firebase.initializeApp({

        apiKey: "AIzaSyA1Zj4N-uJxUvlMzuIIjyFftM-1oMZLzV0",
        authDomain: "candychat-ecd0d.firebaseapp.com",
        projectId: "candychat-ecd0d",
        storageBucket: "candychat-ecd0d.appspot.com",
        messagingSenderId: "958791714426",
        appId: "1:958791714426:web:c527a2ab8f86a352131dc3"
}).auth();




