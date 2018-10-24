import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD0irL7qP_5-NU5o_7ih_rqTFpArBAtzHo",
    authDomain: "kudo-web.firebaseapp.com",
    databaseURL: "https://kudo-web.firebaseio.com",
    projectId: "kudo-web",
    storageBucket: "kudo-web.appspot.com",
    messagingSenderId: "170288717741"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;

export const database = firebase.database();