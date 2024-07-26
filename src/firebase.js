// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoOWz7EN6GpWweNSN5wv6A_W-4i4d-72Y",
  authDomain: "deliveryabreu.firebaseapp.com",
  projectId: "deliveryabreu",
  storageBucket: "deliveryabreu.appspot.com",
  messagingSenderId: "268176544690",
  appId: "1:268176544690:web:cd96780bac582951084aab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};