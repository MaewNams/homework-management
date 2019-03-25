import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

let config;
    config = {
      apiKey: "AIzaSyBx-8sLarNTmxc2FuJO0lth4rzHIyRwndc",
      authDomain: "homework-management-2e619",
      databaseURL: "https://homework-management-2e619.firebaseio.com/",
      projectId: "project-361577444410",
      storageBucket: "gs://homework-management-2e619.appspot.com",
      messagingSenderId: "361577444410"
    }
 
firebase.initializeApp(config)

export const db = firebase.firestore()
export const authen = firebase.auth()
export const FieldValue = firebase.firestore.FieldValue
export const firebaseRef = firebase
