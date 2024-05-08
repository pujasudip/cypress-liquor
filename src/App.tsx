import React from "react";
import "./App.css";
import Home from "./home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./logins/Login";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
