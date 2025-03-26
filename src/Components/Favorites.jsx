import React from 'react';
import EntityList from './EntityList/EntityList.jsx';
import { removeFromFavorites } from '';
import { useSelector, useDispatch } from 'react-redux';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites || []);
  const dispatch = useDispatch();


  return (
    <div className="container">
      <h1>Favorites</h1>
      <EntityList entities={favorites} addToFavorites={(entity) => dispatch(removeFromFavorites(entity))} />
    </div>
  );
};

export default Favorites;
