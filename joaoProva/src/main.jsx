import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import MainPage from './pages/MainPage.jsx'
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <MainPage/>,
  },
  {
    path: "/about",
    element: <AboutUs/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/products",
    element: <Products/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
