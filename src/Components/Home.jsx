import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, fetchPlanets, fetchVehicles } from "../store/swapiSlice.js";
import EntityList from "../../src/Components/EntityList/EntityList.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

const Home = () => {
    const dispatch = useDispatch();
    const { people, planets, vehicles, status } = useSelector((state) => state.swapi);

    useEffect(() => {
        // Dispatch actions to fetch data for people, planets, and vehicles
        dispatch(fetchPeople());
        dispatch(fetchPlanets());
        dispatch(fetchVehicles());
    }, [dispatch]);

    // Show spinner while data is loading
    if (status === "loading") {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <h1>Star Wars Databank</h1>
            
            {/* Pass different entities to EntityList */}
            <h2>People</h2>
            <EntityList entities={people} entityType="people" />
            
            <h2>Planets</h2>
            <EntityList entities={planets} entityType="planets" />
            
            <h2>Vehicles</h2>
            <EntityList entities={vehicles} entityType="vehicles" />
        </div>
    );
};

export default Home;
