import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../../SWAPI/src/Details/Details.jsx";
import Home from "./Components/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import Favorites from "./Components/Favorites.jsx";

const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Details />} path="/details/:type/:id" />  {/* ✅ Ensure this is correct */}
                <Route element={<Favorites />} path="/favorites" />
            </Routes>
        </BrowserRouter>
    );
};

export default Layout;
