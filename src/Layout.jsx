import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Components/Details.jsx";
import Home from "./Components/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import Favorites from "./Components/Favorites.jsx";
import LoadingSpinner from "./Components/LoadingSpinner.jsx"; 

const Layout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Delay for 3 seconds

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <BrowserRouter>
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
