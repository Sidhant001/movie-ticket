import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appl/store";
import { createBrowserRouter, RouterProvider,Navigate } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Cart from "./pages/Cart";
import "./index.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./pages/Checkout";
import AddMovie from "./pages/AddMovie";

const router = createBrowserRouter([
 {
    path: "/login",
    element: <Login />
  },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Movies /> }, 
      { path: "movies", element: <Movies /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "add-movie", element: <AddMovie /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);