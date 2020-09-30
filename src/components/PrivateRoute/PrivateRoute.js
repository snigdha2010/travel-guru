import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const [logedIn, setLogedIn ] = useContext(UserContext);
    console.log(logedIn)
  
    return (
        <Route
        {...rest}
        render={({ location }) =>
        logedIn.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/log-in",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;