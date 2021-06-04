import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyA1TF5OoBwqaB6pgT5G5_rY-IMEpwpuy-o",
  authDomain: "baby-tracker-310016.firebaseapp.com",
  databaseURL: "https://baby-tracker-310016-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "baby-tracker-310016",
  storageBucket: "baby-tracker-310016.appspot.com",
  messagingSenderId: "102507927096",
  appId: "1:102507927096:web:024db15ea5bc6ccf9e78cd",
  measurementId: "G-SJQJSF6DSJ"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase;