import firebase from 'firebase';



var firebaseConfig = {
    apiKey: "AIzaSyAtEd8dozaYyLj3oQ1T6ywR2FWdkLyRwb0",
    authDomain: "photo-feed-33a42.firebaseapp.com",
    databaseURL: "https://photo-feed-33a42.firebaseio.com",
    projectId: "photo-feed-33a42",
    storageBucket: "photo-feed-33a42.appspot.com",
    messagingSenderId: "303312232156",
    appId: "1:303312232156:web:b82a8d7bb999af0429de19",
    measurementId: "G-P6ZTCEYLLG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();

