import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import SearchFoods from "./SearchFoods";
import SearchRecipes from "./SearchRecipes";
import Specificrecipe from "./Specificrecipe";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/signup',
    element: <Signup></Signup>,
  },
  {
    path: '/food',
    element: <SearchFoods></SearchFoods>,
  },
  {
    path: '/recipe',
    element: <SearchRecipes></SearchRecipes>
  },
  {
    path: '/srecipe',
    element: <Specificrecipe></Specificrecipe>
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);