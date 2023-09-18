// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3O2yyxTW_Ur3bq2TmUiQscz4dck322e8",
  authDomain: "pr-23efd.firebaseapp.com",
  projectId: "pr-23efd",
  storageBucket: "pr-23efd.appspot.com",
  messagingSenderId: "785625255186",
  appId: "1:785625255186:web:b7e25f2e7405a7a1d177cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app; 