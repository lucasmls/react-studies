import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp({
  apiKey: "AIzaSyBdH2tUec8lmCKWbwFg3TRc2ES6Fpuqx1Y",
  authDomain: "reactflix-8867a.firebaseapp.com",
  databaseURL: "https://reactflix-8867a.firebaseio.com",
  projectId: "reactflix-8867a",
  storageBucket: "reactflix-8867a.appspot.com",
  messagingSenderId: "413085109231"
})

const database = firebase.database()

export { database }