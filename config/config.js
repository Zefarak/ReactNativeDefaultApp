import firebase from 'firebase';

const config = {    
    apiKey: "AIzaSyAZzq4J-PByHPgYoVzqBC18iXH8-CthYRE",
    authDomain: "my-project-1518362976841.firebaseapp.com",
    databaseURL: "https://my-project-1518362976841.firebaseio.com",
    projectId: "my-project-1518362976841",
    storageBucket: "my-project-1518362976841.appspot.com",
    messagingSenderId: "1008464132454",
    appId: "1:1008464132454:web:1adfa29875c44b2570b0a7",
    measurementId: "G-LVWP4ZC5SF"

}

firebase.initializeApp(config)

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();