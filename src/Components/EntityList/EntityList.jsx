import React from "react";
import { Link } from "react-router-dom"; // For navigation to the details page
import { useDispatch, useSelector } from "react-redux"; // To interact with Redux state
import { Swiper, SwiperSlide } from "swiper/react"; // For Swiper carousel component
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import pagination styles for Swiper
import "swiper/css/navigation"; // Import navigation styles for Swiper
import { Navigation, Pagination } from "swiper/modules"; // Import necessary Swiper modules
import { addToFavorites, removeFromFavorites } from "../../store/swapiSlice"; // Actions for managing favorites
import LoadingSpinner from "../../Components/LoadingSpinner.jsx"; // Spinner component for loading state
import "../EntityList/EntityList.css"; // Custom styles for the entity list

const EntityList = ({ entities = [], entityType }) => {
    const dispatch = useDispatch(); // Redux dispatch hook for state updates
    const favorites = useSelector((state) => state.swapi.favorites); // Get the list of favorite entities from Redux

    // Placeholder image for entities (e.g., if no specific image is available)
    const imageHolder = "https://placehold.co/400x600";

    // Toggle favorite status for an entity
    const toggleFavorite = (entity) => {
        // Check if the entity is already in the favorites list
        const isFavorite = favorites.some((fav) => fav.uid === entity.uid);
        // Dispatch the appropriate action to either add or remove from favorites
        dispatch(isFavorite ? removeFromFavorites(entity) : addToFavorites(entity));
    };

    // Check if the entities array is empty or undefined, and show a loading spinner if true
    if (!entities || entities.length === 0) {
        return <LoadingSpinner />; // Display the spinner while entities are loading
    }

    return (
        <div className="carousel-container">
            {/* Swiper component to create a carousel/slider for the entities */}
            <Swiper
                modules={[Navigation, Pagination]} // Include navigation and pagination modules
                spaceBetween={20} // Space between slides
                breakpoints={{
                    640: { slidesPerView: 2 }, // Show 2 slides per view for screen width 640px+
                    768: { slidesPerView: 2 }, // Show 3 slides per view for screen width 768px+
                    1024: { slidesPerView: 5 }, // Show 4 slides per view for screen width 1024px+
                }}
                navigation // Enable navigation arrows
                pagination={{ clickable: true }} // Enable clickable pagination dots
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Set auto-play to change slides every 3 seconds
            >
                {/* Loop through the entities array and render each entity in a slide */}
                {entities.map((entity) => (
                    <SwiperSlide key={entity.uid}> {/* Each slide should have a unique key */}
                        {/* Card layout for displaying each entity */}
                        <div className="card">
                            {/* Card body to hold the image */}
                            <div
                                className="card-body">
                                {/* Image for the entity */}
                                <img
                                    className="card-img-top"
                                    src={imageHolder} // Placeholder image URL
                                    alt={entity.name} // Alt text for the image, using the entity name
                                    width="100%" // Ensure the image covers the entire card
                                    height="100%" // Ensure the image fills the card area
                                />
                            </div>

                            {/* Entity name with link to the details page */}
                            <h5 className="card-title" style={{ textAlign: "center", marginTop: "5px" }}>
                                <Link
                                    to={`/details/${entityType}/${entity.uid}`} // Dynamic URL based on entityType and UID
                                    style={{ textDecoration: "none", color: "#000000", fontWeight: "bold" }} // Styling for the link
                                >
                                    {entity.name} {/* Display the entity name */}
                                </Link>
                            </h5>

                            {/* Button to toggle the entity's favorite status */}
                            <button
                                className="btn btn-lg btn-block"
                                onClick={() => toggleFavorite(entity)} // Call toggleFavorite function on button click //
                             >
                                {/* Display a filled star (★) if the entity is a favorite, otherwise an empty star (☆) */}
                                {favorites.some((fav) => fav.uid === entity.uid) ? "★" : "☆"} Favorite
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default EntityList;




