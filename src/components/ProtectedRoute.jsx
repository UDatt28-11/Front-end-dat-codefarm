import React from "react";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem("user") || {});
  return <>{user.id === 4 ? <Outlet /> : <Navigator to={"/"} />}</>;
};

export default ProtectedRoute;
