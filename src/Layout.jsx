import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../src/Components/Details.jsx";
import App from "./App.jsx"; // Ensure App is imported
import Navbar from "../src/Components/Navbar.jsx";
// import { Footer } from "./component/footer";
import ScrollToTop from "../src/Components/ScrollToTop.jsx";
import InjectContext from "./Components/InjectContext.jsx";

const Layout = () => {
  const basename = import.meta.env.VITE_BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        {/* <LoadingSpinner /> */}
        <Navbar />
        <Routes>
          <Route element={<App />} path="/" />
          <Route element={<Details />} path="/details/:type/:id" />
        </Routes>
        {/* <Footer /> */}
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default InjectContext(Layout);
