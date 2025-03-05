import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, fetchPlanets, fetchVehicles } from "../store/swapiSlice";
import EntityList from "./EntityList";
import EntityContainer from "./EntityContainer";

const Home = () => {
    const dispatch = useDispatch();

    const { people, planets, vehicles, status, error } = useSelector(state => state.swapi);

    useEffect(() => {
        dispatch(fetchPeople());
        dispatch(fetchPlanets());
        dispatch(fetchVehicles());
    }, [dispatch]);

    if (status === "loading") return <p>Loading data...</p>;
    if (status === "failed") return <p>Error: {error}</p>;

    return (
        <div className="container">
          
            <h2>Characters</h2>
            <EntityList entities={people} entityType="people" />

            <h2>Planets</h2>
            <EntityList entities={planets} entityType="planets" />

            <h2>Vehicles</h2>
            <EntityList entities={vehicles} entityType="vehicles" />
        </div>
    );
};

export default Home;
