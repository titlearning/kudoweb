import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAawOHwwwA0XyjoIXgcDEHtZd_gVXEmEbE",
    authDomain: "kudo-fb5b2.firebaseapp.com",
    databaseURL: "https://kudo-fb5b2.firebaseio.com",
    projectId: "kudo-fb5b2",
    storageBucket: "kudo-fb5b2.appspot.com",
    messagingSenderId: "40877212325"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;

export const database = firebase.database();
