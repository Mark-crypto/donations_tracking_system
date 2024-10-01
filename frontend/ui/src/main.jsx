import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Donations from "./components/Donations.jsx";
import Login from "./components/Login.jsx";
import Logs from "./components/Logs.jsx";
import QrCode from "./components/QrCode.jsx";
import Recepients from "./components/Recepients.jsx";
import Registration from "./components/Registration.jsx";
import Reports from "./components/Reports.jsx";
import TrackingMap from "./components/TrackingMap.jsx";
import Error from "./components/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/donations",
    element: <Donations />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logs",
    element: <Logs />,
  },
  {
    path: "/map",
    element: <TrackingMap />,
  },
  {
    path: "/QrCode",
    element: <QrCode />,
  },
  {
    path: "/recepients",
    element: <Recepients />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
