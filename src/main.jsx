import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAoOWz7EN6GpWweNSN5wv6A_W-4i4d-72Y",
  authDomain: "deliveryabreu.firebaseapp.com",
  projectId: "deliveryabreu",
  storageBucket: "deliveryabreu.appspot.com",
  messagingSenderId: "268176544690",
  appId: "1:268176544690:web:cd96780bac582951084aab"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
