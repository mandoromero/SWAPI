import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Details = () => {
    const { type, id } = useParams(); // Get entity type (e.g., people, planets, vehicles) and ID from URL
    const [entity, setEntity] = useState(null); // State to store the fetched entity data
    const [loading, setLoading] = useState(true); // State to manage loading state

    // New placeholder image URL for entity representation
    const imageHolder = "https://placehold.co/600x400";

    useEffect(() => {
        // Function to fetch entity details from the API
        const fetchEntityDetails = async () => {
            try {
                // Fetch the entity details from the SWAPI API
                const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
                const data = await response.json(); // Parse the response data
                setEntity(data.result); // Set the entity data into state
                setLoading(false); // Set loading state to false once data is fetched
            } catch (error) {
                console.error("Error fetching entity details:", error); // Log any errors that occur
                setLoading(false); // Set loading to false even if there's an error
            }
        };

        fetchEntityDetails(); // Call the function to fetch the data
    }, [type, id]); // Dependency array to re-fetch when the type or id changes

    // If data is still loading, show a loading message
    if (loading) {
        return <p>Loading details...</p>;
    }

    // If no entity is found, display an error message
    if (!entity || !entity.properties) {
        return <p>Entity not found.</p>;
    }

    const { properties } = entity; // Extract the properties of the entity from the API response

    // Define the data structure based on the entity type (people, planets, or vehicles)
    let detailsData = {};
    if (type === "people") {
        // If the type is "people", structure the data accordingly
        detailsData = {
            "Gender": properties.gender,
            "Hair Color": properties.hair_color,
            "Height": properties.height,
            "Eye Color": properties.eye_color,
            "Mass": properties.mass,
            "Birth Year": properties.birth_year,
        };
    } else if (type === "planets") {
        // If the type is "planets", structure the data for planets
        detailsData = {
            "Climate": properties.climate,
            "Diameter": properties.diameter,
            "Gravity": properties.gravity,
            "Orbital Period": properties.orbital_period,
            "Population": properties.population,
            "Terrain": properties.terrain,
        };
    } else if (type === "vehicles") {
        // If the type is "vehicles", structure the data for vehicles
        detailsData = {
            "Model": properties.model,
            "Manufacturer": properties.manufacturer,
            "Cost in Credits": properties.cost_in_credits,
            "Length": properties.length,
            "Max Speed": properties.max_atmosphering_speed,
            "Crew": properties.crew,
            "Passengers": properties.passengers,
        };
    }

    return (
        <div style={{ fontFamily: 'SF Distant Galaxy, sans-serif', textAlign: "center", padding: "20px", color: "#eef81e" }}>
            {/* Image section */}
            <img 
                src={imageHolder} // Placeholder image URL
                alt={properties.name} // Image alt text set to the entity's name
                width="600" 
                height="400" 
                style={{ objectFit: "cover", borderRadius: "8px" }} // Image styling
            />

            {/* Entity name section */}
            <h1>{properties.name}</h1> {/* Display the entity's name */}

            {/* Description and UID section */}
            <h3>
                <strong>Description:</strong> {properties.description || "No description available."}
            </h3>
            <h3>
                <strong>UID:</strong> {entity.uid} {/* Display the unique identifier of the entity */}
            </h3>

            {/* Dynamic Data Display (depending on the entity type) */}
            <div id="descriptions-container">
                <div id="keys" style={{ display: "inline-block", textAlign: "left", marginRight: "20px" }}>
                    {/* Loop through the keys (labels) of the detailsData and display them */}
                    {Object.keys(detailsData).map((key, index) => (
                        <p key={index}><strong>{key}:</strong></p> // Display each key
                    ))}
                </div>
                <div id="values" style={{ display: "inline-block", textAlign: "left" }}>
                    {/* Loop through the values of the detailsData and display them */}
                    {Object.values(detailsData).map((value, index) => (
                        <p key={index}>{value}</p> // Display each value corresponding to the key
                    ))}
                </div>
            </div>

            {/* Back to entities link section */}
            <div className="back-button-container" style={{ marginTop: "20px", textAlign: "center" }}>
                <Link to="/" className="btn btn-warning">
                    Back to Entities {/* This link will take the user back to the entities list */}
                </Link>
            </div>
        </div>
    );
};

export default Details;
