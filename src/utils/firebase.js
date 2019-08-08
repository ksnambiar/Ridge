let firebase = require('firebase');
var config = {
    apiKey: "AIzaSyDf8fH7kI5fRSZTgUXyV8L8ULvXDxS4NWY",
    authDomain: "opensourced-a8340.firebaseapp.com",
    databaseURL: "https://opensourced-a8340.firebaseio.com",
    projectId: "opensourced-a8340",
    storageBucket: "opensourced-a8340.appspot.com",
    messagingSenderId: "644855248993"
  };
firebase.initializeApp(config);
const auth = firebase.auth();

module.exports={auth}