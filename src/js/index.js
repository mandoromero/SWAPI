// Import React into the bundle
import React from "react";
import { createRoot } from "react-dom/client";

// Include your global styles
import "../styles/index.css";

// Import your main layout component
import Layout from "./layout.js";

// Select the root element
const root = createRoot(document.querySelector("#app"));

// Render your React application
root.render(<Layout />);

