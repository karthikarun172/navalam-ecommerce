/** @format */

import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
