import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, fetchPlanets, fetchVehicles } from "../redux/actions";
import EntityList from "./EntityList";

const Home = () => {
    const dispatch = useDispatch();
    
    const people = useSelector(state => state.people);
    const planets = useSelector(state => state.planets);
    const vehicles = useSelector(state => state.vehicles);

    useEffect(() => {
        dispatch(fetchPeople());
        dispatch(fetchPlanets());
        dispatch(fetchVehicles());
    }, [dispatch]);

    return (
        <div className="container">
            <h2>Star Wars Characters</h2>
            <EntityList entities={people} entityType="people" />

            <h2>Planets</h2>
            <EntityList entities={planets} entityType="planets" />

            <h2>Vehicles</h2>
            <EntityList entities={vehicles} entityType="vehicles" />
        </div>
    );
};

export default Home;

