import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDZwoOPUW3_OwKIkEVNtwo5X9iSgZuwvSM",
  authDomain: "airbnb-clone-8e5d8.firebaseapp.com",
});

let user = firebase.auth().currentUser;
let auth = Boolean(user);

export const firebaseAuth = firebase.auth();

export function isAuth() {
  return auth;
}

export async function getAuthToken() {
  const token = await firebase
    .auth()
    .currentUser?.getIdToken()
    .then((token) => token);

  return token;
}

export function setIsAuth(val) {
  auth = val;
  if (val) user = firebase.auth().currentUser;
  else user = null;
}

export function getCurrentUser() {
  return user;
}

export function logUserOut() {
  firebase.auth().signOut();
  user = null;
  auth = false;
}
