import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../src/Components/Details.jsx";
import Home from "./Components/Home.jsx";
import Navbar from "../src/Components/Navbar.jsx";
import Favorites from "../src/Components/Favorites.jsx";

const Layout = () => {
    const basename = "/";

    return (
        <BrowserRouter basename={basename}>
            <Navbar />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Details />} path="/details/:type/:id" />
                <Route element={<Favorites />} path="/favorites" />
            </Routes>
        </BrowserRouter>
    );
};

export default Layout;
