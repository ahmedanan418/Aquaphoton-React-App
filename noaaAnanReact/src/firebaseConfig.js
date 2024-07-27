// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr8rqJ4ABEmxR902nx3USPDvrCfpDX0BA",
  authDomain: "aquaphoton.firebaseapp.com",
  projectId: "aquaphoton",
  storageBucket: "aquaphoton.appspot.com",
  messagingSenderId: "212210184067",
  appId: "1:212210184067:web:a40c4455931cae603390b6",
  measurementId: "G-ZDQY898BN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };