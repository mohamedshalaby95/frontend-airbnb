import { useEffect } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export default function LoginScreen() {
  const history = useHistory();
  const location = useLocation();
  const [_, setIsAuth] = useAuth();

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-light");

    return () => {
      body.classList.remove("bg-light");
    };
  }, []);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => {
        setIsAuth(true);
        history.push(location.state?.from?.pathname || "/");
      },
    },
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-center justify-content-center">
      <h2 className="display-4 mt-5 mb-3">Login with google</h2>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
