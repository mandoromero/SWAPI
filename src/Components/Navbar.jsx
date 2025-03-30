import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component for navigation between routes
import { useSelector, useDispatch } from "react-redux"; // Import Redux hooks for accessing store state and dispatching actions
import { removeFromFavorites } from "../store/swapiSlice.js"; // Import the action to remove an item from favorites (if needed)

const Navbar = () => {
    // Access the favorites from the Redux store using the useSelector hook
    const favorites = useSelector(state => state.swapi.favorites);
    
    // Access Redux's dispatch function to dispatch actions
    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg navbar-black bg-black mb-5" style={{ fontFamily: 'SF Distant Galaxy, sans-serif' }}>
            {/* Brand section of the navbar, linking to the homepage */}
            <Link className="navbar-brand" to="/" style={{ marginLeft: '250px', fontSize: '50px', color: '#ffe81f' }}>
                {/* The name of the website */}
                Star Wars Databank
            </Link>
            
            {/* Collapse section for the navbar items, to make it responsive */}
            <div className="collapse navbar-collapse">
                <div className="navbar-nav ml-auto d-flex align-items-center">
                    {/* Button for navigating to the Favorites page */}
                    <button
                        style={{
                            width: "150px", // Button width
                            height: "50px", // Button height
                            marginLeft: "75px", // Space between button and other navbar items
                            backgroundColor: "#000000", // Button background color
                            borderRadius: "10%", // Rounded corners for the button
                        }}
                    >
                        {/* Link to Favorites page with custom styles */}
                        <Link
                            className="btn"
                            style={{
                                color: "#FFE81F", // Text color
                                fontSize: "16px", // Text size
                                fontFamily: "SF Distant Galaxy, sans-serif" // Custom Star Wars font family
                            }}
                            to="/favorites" // Link destination to the Favorites page
                        >
                            {/* Text displayed on the button */}
                            Go to Favorites
                        </Link>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
