import React from "react";
import { Navigate } from "react-router-dom";

export default function Home() {
  const isAuth = localStorage.getItem("user");

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <h1>Home</h1>;
}
