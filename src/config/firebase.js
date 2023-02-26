// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDVatisYxlZUuc6jCX7yF0WO58X0mEAl1M",
//   authDomain: "event-mangment-15f5d.firebaseapp.com",
//   projectId: "event-mangment-15f5d",
//   storageBucket: "event-mangment-15f5d.appspot.com",
//   messagingSenderId: "640440183749",
//   appId: "1:640440183749:web:1117dd816cc7e7dd25f9ac",
// };

const firebaseConfig = {
  apiKey: "AIzaSyApgImcw8l-s_J1rXtia3Btx6OKq6_az3Y",
  authDomain: "my-todo-007.firebaseapp.com",
  projectId: "my-todo-007",
  storageBucket: "my-todo-007.appspot.com",
  messagingSenderId: "843733302282",
  appId: "1:843733302282:web:64a344b872e781b696f3f3",
  measurementId: "G-JSRCQGTG57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { analytics, auth, firestore, storage };
