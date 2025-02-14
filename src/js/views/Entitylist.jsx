import React from 'react';
import { useGlobalReducer } from '../hooks/useGlobalReducer';
import { addToFavorites } from './Actions';
import EntityCard from './EntityCard';
import { useEffect } from "react";
useEffect(() => {
  console.log("This will break!");
}, []);



const EntityList = ({ entities, entityType, onFavorite }) => {
  const { dispatch } = useGlobalReducer();

  return (
    <div className="card-deck d-flex col-10 overflow-auto mb-5 mx-auto">
      {entities.map(entity => {
        let derivedEntityType = entityType;
        if (!entityType) {
          if (entity.url.includes('people')) {
            derivedEntityType = 'characters';
          } else if (entity.url.includes('planets')) {
            derivedEntityType = 'planets';
          } else if (entity.url.includes('vehicles')) {
            derivedEntityType = 'vehicles';
          }
        }

        return (
          <EntityCard
            key={entity.uid}
            entityType={derivedEntityType}
            entity={entity}
            onFavorite={onFavorite ? onFavorite : (entity) => dispatch(addToFavorites(entity))}
          />
        );
      })}
    </div>
  );
};

export default EntityList;
