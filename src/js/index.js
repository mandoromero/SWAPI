import React from "react";
import { createRoot } from "react-dom/client";
import StoreProvider from "./store/appContext.js";
import Layout from "./layout.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const root = createRoot(document.querySelector("#app"));

root.render(
  <StoreProvider>
    <Layout />
  </StoreProvider>
);

