import React from "react";
import { useContext } from "react";
import StoreContext from "../store/appContext.jsx";
import EntityCard from "./EntityCard.jsx";

const EntityList = ({ entities, entityType }) => {
  const { dispatch } = useContext(StoreContext);

  return (
    <div className="card-deck d-flex col-10 overflow-auto mb-5 mx-auto">
      {entities.map((entity) => {
        let derivedEntityType = entityType || "";
        if (!entityType) {
          if (entity.url.includes("people")) {
            derivedEntityType = "characters";
          } else if (entity.url.includes("planets")) {
            derivedEntityType = "planets";
          } else if (entity.url.includes("vehicles")) {
            derivedEntityType = "vehicles";
          }
        }

        return (
          <EntityCard
            key={entity.uid}
            entityType={derivedEntityType}
            entity={entity}
            onFavorite={() => dispatch({ type: "ADD_TO_FAVORITES", payload: entity })}
          />
        );
      })}
    </div>
  );
};

export default EntityList;