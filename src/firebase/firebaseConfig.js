import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


// base de datos de produccion
/* const firebaseConfig = {
  apiKey: "AIzaSyAoOWz7EN6GpWweNSN5wv6A_W-4i4d-72Y",
  authDomain: "deliveryabreu.firebaseapp.com",
  projectId: "deliveryabreu",
  storageBucket: "deliveryabreu.appspot.com",
  messagingSenderId: "268176544690",
  appId: "1:268176544690:web:cd96780bac582951084aab"

} */

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

