import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ProductContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const {loggedInUser} = useContext(ProductContext)
    
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;