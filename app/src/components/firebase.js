// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgrEWlQ7jr9Uy8zvFJG10pFu4SI3ZEb6I",
  authDomain: "keti-project-de6aa.firebaseapp.com",
  projectId: "keti-project-de6aa",
  storageBucket: "keti-project-de6aa.appspot.com",
  messagingSenderId: "736093133079",
  appId: "1:736093133079:web:2f6f51477feba263673f52",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

// redux부터 구현해야 함
