import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export default function PrivateRoute({ component: Component, ...rest }) {
  const [isAuth] = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
