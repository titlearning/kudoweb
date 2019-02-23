import firebase from 'firebase';
// For Topica
// var config = {
//     apiKey: "AIzaSyAawOHwwwA0XyjoIXgcDEHtZd_gVXEmEbE",
//     authDomain: "kudo-b93a2.firebaseapp.com",
//     databaseURL: "https://kudo-b93a2.firebaseio.com",
//     projectId: "kudo-b93a2",
//     storageBucket: "kudo-b93a2.appspot.com",
//     messagingSenderId: "40877212325"
// };
// For Tit
var config = {
    apiKey: "AIzaSyDYa6mycbIQ1tV9vtWOr4FDHKvyJ0knnv4",
    authDomain: "kudo-b93a2.firebaseapp.com",
    databaseURL: "https://kudo-b93a2.firebaseio.com",
    projectId: "kudo-b93a2",
    storageBucket: "kudo-b93a2.appspot.com",
    messagingSenderId: "207194448274"
};
export const firebaseApp = firebase.initializeApp(config);
// firebase.initializeApp(config);

// export default firebase;

export const database = firebase.database();