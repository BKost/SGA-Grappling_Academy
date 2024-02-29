import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppContextProvider } from "./AppContext";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Nonstop from "./Nonstop/Nonstop";

const router = createBrowserRouter([
  { path: "/", element: <App /> },

  {
    path: "/nonstop",
    element: <Nonstop />,
  },
  // {
  //   path: "about",
  //   element: <div>About</div>,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>

  // <React.StrictMode>
  //   <AppContextProvider>
  //     <App />
  //   </AppContextProvider>
  // </React.StrictMode>
);
