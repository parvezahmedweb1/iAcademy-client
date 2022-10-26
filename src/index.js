import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import UserContext from "./context/UserContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <UserContext>
      <ToastContainer position="top-center" autoClose={1500} />
      <App />
    </UserContext>
  </>
);
