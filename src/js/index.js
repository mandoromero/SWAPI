import React from "react";
import { createRoot } from "react-dom/client";
import StoreProvider from "./store/appContext";
import Layout from "./layout.js";

const root = createRoot(document.querySelector("#app"));

root.render(
  <StoreProvider>
    <Layout />
  </StoreProvider>
);

