import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAawOHwwwA0XyjoIXgcDEHtZd_gVXEmEbE",
    authDomain: "kudo-fb5b2.firebaseapp.com",
    databaseURL: "https://kudo-fb5b2.firebaseio.com",
    projectId: "kudo-fb5b2",
    storageBucket: "kudo-fb5b2.appspot.com",
    messagingSenderId: "40877212325"
};
export const firebaseApp = firebase.initializeApp(config);
// firebase.initializeApp(config);

// export default firebase;

export const database = firebase.database();