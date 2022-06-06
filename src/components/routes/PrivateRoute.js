import React from "react";
import { Navigate } from "react-router-dom";
import { checkIfLoggedIn } from "../../pages/utils";

const PrivateRoute = ({ children }) => {
  if (!checkIfLoggedIn()) return <Navigate to='/login' replace />

  return children;
};

export default PrivateRoute;
