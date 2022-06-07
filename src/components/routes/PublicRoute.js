import React from "react";
import { Navigate } from "react-router-dom";
import { checkIfLoggedIn } from "../../pages/utils";

const PublicRoute = ({ children }) => {
  if (!checkIfLoggedIn()) return children;

  return <Navigate to="/" replace />
};

export default PublicRoute;
