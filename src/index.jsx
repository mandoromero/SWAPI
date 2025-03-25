import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store.mjs";
import "./index.css";
import Layout from "./Layout.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <Layout />
    </Provider>
  </React.StrictMode>
);
