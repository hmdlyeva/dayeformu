// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxoBp_upWNIXqWHF5FLeg1sWA18NHxdj8",
  authDomain: "dayeform.firebaseapp.com",
  projectId: "dayeform",
  storageBucket: "dayeform.appspot.com",
  messagingSenderId: "1023193386506",
  appId: "1:1023193386506:web:33a3ff951b25ed4d8159f3",
  measurementId: "G-NMEPJG8MCJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
