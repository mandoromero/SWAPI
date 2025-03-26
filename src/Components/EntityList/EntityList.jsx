import React from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Basic Swiper styles
import "swiper/css/pagination"; 
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import "../EntityList/EntityList.css";
import fetchpeople from "../../store/swapiSlice.js"
import { addToFavorites, removeFromFavorites } from "../../store/swapiSlice.js"

const EntityList = ({ entities = [], entityType }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    // Map entityType to the correct image folder
    const imageEntityTypeMap = {
        people: "characters",
        planets: "planets",
        vehicles: "vehicles"
    };

    const imageEntityType = imageEntityTypeMap[entityType] || "unknown";

    const toggleFavorite = (entity) => {
        const isFavorite = favorites.some(fav => fav.uid === entity.uid);
        dispatch(isFavorite ? removeFromFavorites(entity) : addToFavorites(entity));
    };

    return (
        <div className="carousel-container">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                breakpoints={{
                    640: { slidesPerView: 2 }, // 2 cards on small screens
                    768: { slidesPerView: 3 }, // 3 cards on tablets
                    1024: { slidesPerView: 4 } // 4 cards on larger screens
                
                }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
            
                {entities.map((entity) => {
                    const imageUrl = `https://starwars-visualguide.com/assets/img/${imageEntityType}/${entity.uid}.jpg`;

                    return (
                        <SwiperSlide key={entity.uid}>
                            <div className="card" 
                                style={{ 
                                    width: "150px", 
                                    height: "250px", 
                                    border: "3px #000000 solid",
                                    backgroundColor: "#FFE81F",
                                    borderRadius: "5%" 
                                }}>
                                <div className="card-body" 
                                    style={{ 
                                        border: "2px #000000 solid",
                                        borderRadius: "5%", 
                                        width: "90%", 
                                        margin: "6px auto",
                                        height: "65%"
                                    }}>
                                    <img
                                        className="card-img-top"
                                        src={imageUrl}
                                        alt={entity.name}
                                        width="100%"
                                        height="100%"
                                        // onError={(e) => 
                                            // { e.target.onerror = null; e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"; }}
                                    />
                                </div>
                                <h5 className="card-title" 
                                        style={{ textAlign: "center", marginTop: "5px" }}>
                                        {entity.name}
                                </h5>
                                <button 
                                        className="btn btn-lg btn-block"
                                        onClick={() => toggleFavorite(entity)}
                                        style={{
                                            display: "block",
                                            width: "80%",
                                            height: "30px",
                                            margin: "5px auto",
                                            backgroundColor: "#000000",
                                            color: "#FFE81F",
                                            border: "none",
                                            borderRadius: "5%"
                                        }}
                                    >
                                        {favorites?.some(fav => fav.uid === entity.uid) ? "★" : "☆"} Favorite
                                </button>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default EntityList;
