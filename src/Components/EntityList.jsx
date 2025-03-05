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
        <div className="row-container" style={{ display: "flex" }}>
            {entities.length > 0 ? (
                entities.map((entity) => (
                    <div key={entity.uid} className="card-container">
                        <div className="card" 
                            style={{ 
                                width: "150px", 
                                height: "250px", 
                                border: "3px #000000 solid",
                                backgroundColor: "#FFE81F",
                                marginRight: "20px",
                                borderRadius: "5%" 
                            }}>
                            <div className="card-body" 
                                style={{ 
                                    border: "2px #000000 solid",
                                    borderRadius: "5%", 
                                    width: "90%", 
                                    marginRight: "auto",
                                    marginLeft: "auto",
                                    marginTop: "6px",
                                    height: "65%"
                                }}>
                                <img
                                    className="card-img-top"
                                    src={`https://starwars-visualguide.com/assets/img/${imageEntityType}/${entity.uid}.jpg`}
                                    alt={entity.name}
                                    width="100%"
                                    height="100%"
                                    onError={(e) => { e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"; }}
                                />
                                <h5 className="card-title" 
                                    style={{ 
                                        textAlign: "center",
                                        marginTop: "5px"
                                    }}>
                                        {entity.name}
                                    </h5>
                                <button 
                                    className="btn btn-lg btn-block"
                                    onClick={() => toggleFavorite(entity)}
                                    style={{
                                        float: "right",
                                        width: "60%",
                                        hieght: "30px",
                                        marginRight: "auto",
                                        marginLeft: "auto",
                                        backgroundColor: "#000000",
                                        color: "#FFE81F",
                                        border: "none",
                                        borderRadius: "5%"
                                    }}
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
