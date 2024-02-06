// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHEPnrY_tieEuGNtMQXswQKQwkRa3q3QU",
  authDomain: "simpletodos-11e80.firebaseapp.com",
  projectId: "simpletodos-11e80",
  storageBucket: "simpletodos-11e80.appspot.com",
  messagingSenderId: "603763274104",
  appId: "1:603763274104:web:9a5bbea5b456be4b5c988d",
  measurementId: "G-7Y5RT1SVWX",
  databaseURL: "https://simpletodos-11e80-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;