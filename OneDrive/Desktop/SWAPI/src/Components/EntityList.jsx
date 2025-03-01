import React from "react";
import { useDispatch, useSelector } from "react-redux";

const EntityList = ({ entities, entityType }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    const toggleFavorite = (entity) => {
        const isFavorite = favorites.some(fav => fav.uid === entity.uid);
        if (isFavorite) {
            dispatch({ type: "REMOVE_FAVORITE", payload: entity });
        } else {
            dispatch({ type: "ADD_FAVORITE", payload: entity });
        }
    };

    return (
        <div className="row">
            {entities.map((entity) => (
                <div key={entity.uid} className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{entity.name}</h5>
                            <button 
                                className="btn btn-outline-primary"
                                onClick={() => toggleFavorite(entity)}
                            >
                                {favorites.some(fav => fav.uid === entity.uid) ? "★" : "☆"} Favorite
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EntityList;
