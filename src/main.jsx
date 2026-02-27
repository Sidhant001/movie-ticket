import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appl/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Cart from "./pages/Cart";
import "./index.css";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element :<Login/>,
  },
   { path: "/",
    element: (
      <ProtectedRoute>
        <App/>
      </ProtectedRoute>
    ),
    children: [
      { path: "/movies", element: <Movies /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);