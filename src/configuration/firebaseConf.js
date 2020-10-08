import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA4OLKiYe8GejGCsvZXZDY2rs9eOrFaD_4",
    authDomain: "project-management-app-106bc.firebaseapp.com",
    databaseURL: "https://project-management-app-106bc.firebaseio.com",
    projectId: "project-management-app-106bc",
    storageBucket: "project-management-app-106bc.appspot.com",
    messagingSenderId: "819144297771",
    appId: "1:819144297771:web:f4590424daf15f42e9c96e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
    timestampsInSnapshots: true
});

export default Firebase;