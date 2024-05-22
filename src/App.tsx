import React from "react";
import "./App.css";
import Home from "./home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./logins/Login";
import OauthLogin from "./logins/OauthLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <div>Hello ke cha?</div>,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "o-auth",
    element: <OauthLogin />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
