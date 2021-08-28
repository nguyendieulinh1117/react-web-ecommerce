import firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBVYYUXNsAqezZVce358rg_k1UMyOQKGhQ",
  authDomain: "login-11c0e.firebaseapp.com",
  projectId: "login-11c0e",
  storageBucket: "login-11c0e.appspot.com",
  messagingSenderId: "731638097387",
  appId: "1:731638097387:web:513de2adb449d5755b65ae"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire