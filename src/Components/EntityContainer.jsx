import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople } from "../store/swapiSlice";
import EntityList from "./EntityList";

const EntityContainer = () => {
    const dispatch = useDispatch();
    const { characters, status, error } = useSelector(state => state.swapi);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPeople());
        }
    }, [status, dispatch]);

    if (status === "loading") return <p>Loading characters...</p>;
    if (status === "failed") return <p>Error: {error}</p>;
    console.log(characters);
    return <EntityList entities={characters} entityType="people" />;
};

export default EntityContainer;
