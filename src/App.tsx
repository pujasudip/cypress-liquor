import React from "react";
import "./App.css";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <div>Hello ke cha?</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
