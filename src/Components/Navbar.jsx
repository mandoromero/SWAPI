import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../store/swapiSlice.js";

const Navbar = () => {
    const favorites = useSelector(state => state.swapi.favorites);
    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg navbar-black bg-black mb-5" style={{ fontFamily: 'SF Distant Galaxy, sans-serif' }}>
            <Link className="navbar-brand" to="/" style={{ marginLeft: '250px', fontSize: '50px', color: '#ffe81f' }}>
                Star Wars Databank
            </Link>
            <div className="collapse navbar-collapse">
                <div className="navbar-nav ml-auto d-flex align-items-center">
                    <button style={{ width: "150px", height: "50px", marginLeft: "75px", backgroundColor: "#000000", borderRadius: "10%" }}>
                        <Link
                            className="btn"
                            style={{ color: "#FFE81F", fontSize: "16px", fontFamily: "SF Distant Galaxy, sans-serif" }}
                            to="/favorites"
                        >
                            Go to Favorites
                        </Link>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
