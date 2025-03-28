import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { addToFavorites, removeFromFavorites } from "../../store/swapiSlice";
import LoadingSpinner from "../../Components/LoadingSpinner.jsx";
import "../EntityList/EntityList.css";

const EntityList = ({ entities = [], entityType }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.swapi.favorites);

    // Placeholder image
    const imageHolder = "https://placehold.co/400x600";

    const toggleFavorite = (entity) => {
        const isFavorite = favorites.some((fav) => fav.uid === entity.uid);
        dispatch(isFavorite ? removeFromFavorites(entity) : addToFavorites(entity));
    };

    // Check if entities are empty or undefined
    if (!entities || entities.length === 0) {
        return <LoadingSpinner />; // Show spinner while entities are loading
    }

    return (
        <div className="carousel-container">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                {entities.map((entity) => (
                    <SwiperSlide key={entity.uid}>
                        <div
                            className="card"
                            style={{
                                width: "150px",
                                height: "250px",
                                border: "3px #000000 solid",
                                backgroundColor: "#FFE81F",
                                borderRadius: "5%",
                            }}
                        >
                            <div
                                className="card-body"
                                style={{
                                    border: "2px #000000 solid",
                                    borderRadius: "5%",
                                    width: "90%",
                                    margin: "6px auto",
                                    height: "65%",
                                }}
                            >
                                <img
                                    className="card-img-top"
                                    src={imageHolder}
                                    alt={entity.name}
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                            <h5 className="card-title" style={{ textAlign: "center", marginTop: "5px" }}>
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
                                    borderRadius: "5%",
                                }}
                            >
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

