import React, { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { loginContext } from "../../../useContext/loginContext";

function PrivateRoute() {
  const { authentication } = useContext(loginContext);

  if (authentication) {
    return <Outlet />;
  } else {
    const data = localStorage.getItem("accessToken"); 
    if (data !== 'undefined' && data) {
      return <Outlet />
    } else {
      return <Navigate to="/login" />;

    }
  }
}

export default PrivateRoute;
