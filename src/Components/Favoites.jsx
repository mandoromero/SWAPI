import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../store/swapiSlice.js";

const Favorites = () => {
    const favorites = useSelector((state) => state.swapi.favorites);
    const dispatch = useDispatch();

    return (
        <div className="favorites-container" style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center", color: "#FFE81F" }}>Your Favorites</h2>
            {favorites.length === 0 ? (
                <p style={{ textAlign: "center", color: "#FFF" }}>No favorites added yet.</p>
            ) : (
                <div className="favorites-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
                    {favorites.map((item) => {
                        const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`;
                        
                        return (
                            <div key={item.uid} className="favorite-card" style={{ backgroundColor: "#000", padding: "10px", borderRadius: "8px", textAlign: "center", color: "#FFE81F" }}>
                                <img src={imageUrl} alt={item.name} style={{ width: "100%", height: "200px", borderRadius: "5px" }} />
                                <h5>{item.name}</h5>
                                <button
                                    style={{ backgroundColor: "#FFE81F", color: "#000", border: "none", padding: "5px 10px", cursor: "pointer", borderRadius: "5px" }}
                                    onClick={() => dispatch(removeFromFavorites(item))}
                                >
                                    Remove
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Favorites;
