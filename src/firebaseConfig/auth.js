import {
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase";

// register user with mail
export const RegisterUser = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// login with email
export const EmailLogin = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// login with google
export const GoogleLogin = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};

// Logout
export const SignOut = () => {
  return auth.signOut();
};

//email verification.
export const EmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};

//change password
// update password
