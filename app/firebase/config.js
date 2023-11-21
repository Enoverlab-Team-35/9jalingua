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
  apiKey: "AIzaSyA-vu-HrmPyA1_pbX_suj_SBHjFTmpsPhU",
  authDomain: "jalingua-58863.firebaseapp.com",
  projectId: "jalingua-58863",
  storageBucket: "jalingua-58863.appspot.com",
  messagingSenderId: "823617863292",
  appId: "1:823617863292:web:534e8b6296fb22071dd3f9",
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
