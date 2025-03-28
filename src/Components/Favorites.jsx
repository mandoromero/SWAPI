import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../store/swapiSlice";
import { Link } from "react-router-dom";


const Favorites = () => {
    const favorites = useSelector((state) => state.swapi.favorites);
    const dispatch = useDispatch();
    const memoizedFavorites = useMemo(() => favorites, [favorites]);

    // Placeholder image
    const favImageHolder = "https://placehold.co/300x200";

    return (
        <div className="favorites-container">
            <h2>Your Favorites</h2>
            {memoizedFavorites.length === 0 ? (
                <p>No favorites added yet.</p>
            ) : (
                <div className="favorites-grid">
                    {memoizedFavorites.map((item) => (
                        <div key={item.uid} className="favorite-card">
                            <img 
                                src={favImageHolder} 
                                alt={item.name} 
                            />
                            <h5>{item.name}</h5>
                            <button 
                                aria-label={`Remove ${item.name} from favorites`} 
                                onClick={() => dispatch(removeFromFavorites(item))}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <div className="back-button-container" style={{ marginTop: "20px", textAlign: "center" }}>
                <Link to="/" className="btn btn-primary">
                    Back to Entities
                </Link>
            </div>
        </div>
    );
};

export default Favorites;



// const Favorites = () => {
//     const favorites = useSelector((state) => state.swapi.favorites);
//     const dispatch = useDispatch();
//     const memoizedFavorites = useMemo(() => favorites, [favorites]);

//     const handleImageError = (event) => {
//         event.target.src = "/fallback-image.jpg"; // Use a local or placeholder image
//     };

//     return (
//         <div className="favorites-container">
//             <h2>Your Favorites</h2>
//             {memoizedFavorites.length === 0 ? (
//                 <p>No favorites added yet.</p>
//             ) : (
//                 <div className="favorites-grid">
//                     {memoizedFavorites.map((item) => (
//                         <div key={item.uid} className="favorite-card">
//                             <img 
//                                 src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} 
//                                 alt={item.name} 
//                                 onError={handleImageError} 
//                             />
//                             <h5>{item.name}</h5>
//                             <button 
//                                 aria-label={`Remove ${item.name} from favorites`} 
//                                 onClick={() => dispatch(removeFromFavorites(item))}
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Favorites;
