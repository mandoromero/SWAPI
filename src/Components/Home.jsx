import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, fetchPlanets, fetchVehicles } from "../store/swapiSlice.js";
import EntityList from "../Components/EntityList/EntityList.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";



const Home = () => {
    const dispatch = useDispatch();
    const { people, planets, vehicles, status } = useSelector((state) => state.swapi);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay before rendering the page
        const timer = setTimeout(() => {
            dispatch(fetchPeople());
            dispatch(fetchPlanets());
            dispatch(fetchVehicles());
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [dispatch]);

    // Show spinner for 3 seconds before rendering content
    if (loading || status === "loading") {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <h1 style={{ textAlign: "center", color: "#FFE81F", fontFamily: 'SF Distant Galaxy, sans-serif' }}>Star Wars Entities</h1>

            <h2 style={{ textAlign: "center", color: "#FFE81F", fontFamily: 'SF Distant Galaxy, sans-serif' }}>People</h2>
            <EntityList entities={people} entityType="people" />

            <h2 style={{ textAlign: "center", color: "#FFE81F",fontFamily: 'SF Distant Galaxy, sans-serif' }}>Planets</h2>
            <EntityList entities={planets} entityType="planets" />

            <h2 style={{ textAlign: "center", color: "#FFE81F", fontFamily: 'SF Distant Galaxy, sans-serif' }}>Vehicles</h2>
            <EntityList entities={vehicles} entityType="vehicles" />
        </div>
    );
};

export default Home;

