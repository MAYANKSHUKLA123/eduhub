// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCAK4-Hp8-WJ54V0I6Y2IYNYU0j9nZ27Ho",
  authDomain: "login-panel-5d983.firebaseapp.com",
  projectId: "login-panel-5d983",
  storageBucket: "login-panel-5d983.appspot.com",
  messagingSenderId: "168460723792",
  appId: "1:168460723792:web:4575865ce0a75aeb011355",
  measurementId: "G-Z9ZF1ZWWCM"
};

const myApp=firebase.initializeApp(firebaseConfig);

export const auth=myApp.auth();