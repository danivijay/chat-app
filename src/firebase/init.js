
import firebase from 'firebase'
/* eslint-disable */
import firestore from 'firebase/firestore'
/* eslint-enable */

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyB8bsHzasSYW35jjRmrmjLrjX36hE1TGcA',
  authDomain: 'chat-app-147c8.firebaseapp.com',
  databaseURL: 'https://chat-app-147c8.firebaseio.com',
  projectId: 'chat-app-147c8',
  storageBucket: 'chat-app-147c8.appspot.com',
  messagingSenderId: '591297383616'
}

const firebaseapp = firebase.initializeApp(config)
firebaseapp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseapp.firestore()
