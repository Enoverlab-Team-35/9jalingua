import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB31cEV6oxe7p7FttAqatqXg8AjtUyE2Io",
  authDomain: "jalingua-5801b.firebaseapp.com",
  projectId: "jalingua-5801b",
  storageBucket: "jalingua-5801b.appspot.com",
  messagingSenderId: "299306863141",
  appId: "1:299306863141:web:ccba27199300e6cf714dcc"
};

export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut
};
