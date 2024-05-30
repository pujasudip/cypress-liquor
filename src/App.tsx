import React from "react";
import "./App.css";
import Home from "./home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./logins/Login";
import OauthLogin from "./logins/OauthLogin";
import "react-multi-carousel/lib/styles.css";
import ViewCart from "./cart/ViewCart";
import TopNav from "./topNav/TopNav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TopNav />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about-us",
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
      {
        path: "view-cart",
        element: <ViewCart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
