import React, { useContext, useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { ProductContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const { userToken } = useContext(ProductContext);
  const [token] = userToken;
  console.log(token);
  // const [user, setUser] = useState(null);
  // console.log(user);
  // useEffect(() => {
  //   const user = localStorage.getItem("token");
  //   setUser(user);
  // }, []);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
