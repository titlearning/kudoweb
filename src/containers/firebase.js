import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: 'AIzaSyDm-vMajj41Voz10nhjdDZKieT8VbRLSO0',
    authDomain: 'hoangvadong-491f0.firebaseapp.com',
    databaseURL: "https://kudo-web.firebaseio.com",
    projectId: "kudo-web",
    storageBucket: "kudo-web.appspot.com",
    messagingSenderId: "170288717741"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;

export const database = firebase.database();
