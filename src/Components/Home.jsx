import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, fetchPlanets, fetchVehicles } from "../store/swapiSlice.js"; // Import actions to fetch data
import EntityList from "../Components/EntityList/EntityList.jsx"; // Import the EntityList component
import LoadingSpinner from "./LoadingSpinner.jsx"; // Import the LoadingSpinner component

const Home = () => {
    const dispatch = useDispatch(); // Access the Redux dispatch function
    const { people, planets, vehicles, status } = useSelector((state) => state.swapi); // Extract entities and status from Redux store
    const [loading, setLoading] = useState(true); // Local state for managing loading status

    useEffect(() => {
        // Simulate a delay to show the spinner while fetching data
        const timer = setTimeout(() => {
            dispatch(fetchPeople()); // Dispatch action to fetch people
            dispatch(fetchPlanets()); // Dispatch action to fetch planets
            dispatch(fetchVehicles()); // Dispatch action to fetch vehicles
            setLoading(false); // Set loading state to false once the data is fetched
        }, 3000); // Wait for 3 seconds to simulate a delay before showing the content

        return () => clearTimeout(timer); // Clean up the timer when the component unmounts
    }, [dispatch]); // Ensure this runs only once when the component mounts

    // Show the spinner if loading or if data fetching is in progress
    if (loading || status === "loading") {
        return <LoadingSpinner />; // Show spinner while data is loading
    }

    return (
        <div>
            <h1 style={{ textAlign: "center", color: "#FFE81F", fontFamily: 'SF Distant Galaxy, sans-serif' }}>
                Star Wars Entities
            </h1>

            {/* Section for displaying People */}
            <h2 style={{ textAlign: "center", color: "#FFE81F", fontFamily: 'SF Distant Galaxy, sans-serif' }}>
                People
            </h2>
            <EntityList entities={people} entityType="people" /> {/* Display list of people */}

            {/* Section for displaying Planets */}
            <h2 style={{ textAlign: "center", color: "#FFE81F", fontFamily: 'SF Distant Galaxy, sans-serif' }}>
                Planets
            </h2>
            <EntityList entities={planets} entityType="planets" /> {/* Display list of planets */}

            {/* Section for displaying Vehicles */}
            <h2 style={{ textAlign: "center", color: "#FFE81F", fontFamily: 'SF Distant Galaxy, sans-serif' }}>
                Vehicles
            </h2>
            <EntityList entities={vehicles} entityType="vehicles" /> {/* Display list of vehicles */}
        </div>
    );
};

export default Home;
