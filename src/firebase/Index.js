import firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDf8fH7kI5fRSZTgUXyV8L8ULvXDxS4NWY",
    authDomain: "opensourced-a8340.firebaseapp.com",
    databaseURL: "https://opensourced-a8340.firebaseio.com",
    projectId: "opensourced-a8340",
    storageBucket: "opensourced-a8340.appspot.com",
    messagingSenderId: "644855248993"
  };
  firebase.initializeApp(config);
export const auth= firebase.auth();
export const dataBase = firebase.database();
