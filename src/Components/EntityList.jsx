import React from "react";
import { useDispatch, useSelector } from "react-redux";


const EntityList = ({ entities = [], entityType }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    // Map entityType to the corresponding image folder
    const imageEntityTypeMap = {
        people: "characters",
        planets: "planets",
        vehicles: "vehicles"
    };
    
    const imageEntityType = imageEntityTypeMap[entityType] || "unknown";
    

    const toggleFavorite = (entity) => {
        const isFavorite = favorites.some(fav => fav.uid === entity.uid);
        dispatch({
            type: isFavorite ? "REMOVE_FAVORITE" : "ADD_FAVORITE",
            payload: entity
        });
    };

    return (
        <div className="row" style={{ display: "flex" }}>
            {entities.length > 0 ? (
                entities.map((entity) => (
                    <div key={entity.uid} className="col-md-4">
                        <div className="card" 
                            style={{ 
                                width: "150px", 
                                height: "250px", 
                                border: "1px red dashed",
                                marginRight: "10px",
                                borderRadius: "5%" 
                            }}>
                            <div className="card-body">
                                <img
                                    className="card-img-top"
                                    src={`https://starwars-visualguide.com/assets/img/${imageEntityType}/${entity.uid}.jpg`}
                                    alt={entity.name}
                                    width="75"
                                    height="180"
                                    onError={(e) => { e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"; }}


                                <h5 className="card-title">{entity.name}</h5>
                                <button 
                                    className="btn btn-outline-primary"
                                    onClick={() => toggleFavorite(entity)}
                                >
                                    {favorites?.some(fav => fav.uid === entity.uid) ? "★" : "☆"} Favorite
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center">No entities available.</p>
            )}
        </div>
    );
};

export default EntityList;
