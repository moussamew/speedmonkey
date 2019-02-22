import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCieWS9sFbIqtcKknEi3xKuLPOynBs1-Iw",
  authDomain: "speedmonkey-firebase.firebaseapp.com",
  databaseURL: "https://speedmonkey-firebase.firebaseio.com",
  projectId: "speedmonkey-firebase",
  storageBucket: "speedmonkey-firebase.appspot.com",
  messagingSenderId: "952492404216"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/mails');
