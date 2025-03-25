import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from './Actions';

const Navbar = () => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();



  return (
    <nav className="navbar navbar-expand-lg navbar-black bg-black mb-5" style={{ fontFamily: 'SF Distant Galaxy, sans-serif'  }}>
      <Link className="navbar-brand" to="/" style={{ marginLeft: '250px', fontSize: '50px', color: '#FFE81F' }}>
        Star Wars Databank
      </Link>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav ml-auto d-flex align-items-center">
          <button style={{ width: "150px", marginLeft: "75px", backgroundColor: "#ffe81f", borderRadius: "10%"
           }}>
            <Link
              className="btn"
              style={{ color: '#000000', fontSize: "16px" }}
              to="/favorites"
            >
              Go to Favorites
            </Link>
          </button>
        </div>
      </div>
      {favorites.length > 0 && (
      <ul id="favorites-list" className="list-group position-absolute" style={{ right: '10px', top: '60px', backgroundColor: '#343a40' }}>
        {favorites.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center" style={{ color: '#FFE81F', backgroundColor: '#343a40' }}>
          {item.name}
          <button
          className="btn btn-danger btn-sm"
          onClick={() => dispatch(removeFromFavorites(item))}
          >
          🗑
        </button>
      </li>
    ))}
  </ul>
)}

    </nav>
  );
};

export default Navbar;
