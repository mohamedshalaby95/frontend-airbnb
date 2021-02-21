import React, { useEffect, useState } from "react";
import firebase from "firebase";
import axios from "axios";

const FirebaseContext = React.createContext();
FirebaseContext.displayName = "FirebaseContext";

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .auth()
        .currentUser?.getIdToken()
        .then((idToken) => {
          axios.post(`${process.env.url}/user/auth/with-firebase`, {
            token: idToken,
            name: user.displayName,
            email: user.email,
            profileImage: user.photoURL,
          });

          setIsAuth(true);
        });
    });
  }, []);

  return (
    <FirebaseContext.Provider value={[isAuth, setIsAuth]}>
      {children}
    </FirebaseContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(FirebaseContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { useAuth, AuthProvider };
