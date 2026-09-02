// import { useState } from "react";
import Home from "./components/Home/Home";
import Send from "./components/Send/Send";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/gallery", element: <Gallery /> },
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/Send", element: <Send /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
