import * as firebase from 'firebase'
let database
export const init = () => {
    let config = {
        apiKey: "AIzaSyAawOHwwwA0XyjoIXgcDEHtZd_gVXEmEbE",
        authDomain: "kudo-fb5b2.firebaseapp.com",
        databaseURL: "https://kudo-fb5b2.firebaseio.com",
        projectId: "kudo-fb5b2",
        storageBucket: "kudo-fb5b2.appspot.com",
        messagingSenderId: "40877212325"
    }
    firebase.initializeApp(config)
    database = firebase.database()
    console.log(database);
}