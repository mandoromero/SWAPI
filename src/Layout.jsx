import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../src/Components/Details.jsx";
import Home from "./Components/Home.jsx"; // Ensure correct path and casing
import LoadingSpinner from './Components/LoadingSpinner.jsx'
// import Navbar from "../src/Components/Navbar.jsx";
// import { Footer } from "./component/footer";

const Layout = () => {
  const basename = "/";

  return (
    <BrowserRouter basename={basename}>
      <LoadingSpinner />
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Details />} path="/details/:type/:id" />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Layout;