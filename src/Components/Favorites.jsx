import React from 'react';
import EntityList from './EntityList';

import { removeFromFavorites } from './Actions';

const Favorites = () => {
  const { store, dispatch } = useGlobalReducer();
  const { favorites } = store;

  return (
    <div className="container">
      <h1>Favorites</h1>
      <EntityList entities={favorites} addToFavorites={(entity) => dispatch(removeFromFavorites(entity))} />
    </div>
  );
};

export default Favorites;
