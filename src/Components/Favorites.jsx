import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Import hooks to interact with Redux
import { removeFromFavorites } from "../store/swapiSlice"; // Import the removeFromFavorites action
import { Link } from "react-router-dom"; // Import Link to navigate to the details page
import "../Components/Favorites.css";


// Functional component to display the user's favorite entities
const Favorites = () => {
    // Get the favorites array from Redux store
    const favorites = useSelector((state) => state.swapi.favorites);
    const dispatch = useDispatch(); // Redux dispatch function to dispatch actions

    // Function to handle removing an entity from favorites
    const handleRemove = (uid) => {
        dispatch(removeFromFavorites(uid)); // Dispatch remove action with the entity's UID
    };

    // If no favorites are available, show a message indicating no favorites added
    if (!favorites || favorites.length === 0) {
        return <p className="text-center mt-4">No favorites added yet.</p>;
    }

    return (
        <div className="container mt-5" favorite-containter>
            <h2 className="text-warning">My Favorites</h2> {/* Title of the section */}

            {/* List of favorite entities */}
            <ul className="list-group">
                {/* Loop through each favorite entity and render it in a list item */}
                {favorites.map((fav) => (
                    <li key={fav.uid} className="list-group-item d-flex justify-content-between align-items-center">
                        <img src="https://placehold.co/300X200" alt="placeholder" />
                        {/* Link to navigate to the details page for the entity */}
                        <Link  to={`/details/${fav.name}/${entity.uid}`}  className="text-decoration-none name">
                            {fav.name} {/* Display the entity's name */}
                        </Link>

                        {/* Button to remove the entity from favorites */}
                        <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => handleRemove(fav.uid)} // On click, call handleRemove with the entity's UID
                        >
                            Remove {/* Label for the button */}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;
