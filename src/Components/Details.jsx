import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Details = () => {
    const { type, id } = useParams(); // Get entity type and ID from URL
    const [entity, setEntity] = useState(null);
    const [loading, setLoading] = useState(true);

    // New placeholder image URL
    const imageHolder = "https://placehold.co/600x400";

    useEffect(() => {
        const fetchEntityDetails = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
                const data = await response.json();
                setEntity(data.result);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching entity details:", error);
                setLoading(false);
            }
        };

        fetchEntityDetails();
    }, [type, id]);

    if (loading) {
        return <p>Loading details...</p>;
    }

    if (!entity || !entity.properties) {
        return <p>Entity not found.</p>;
    }

    const { properties } = entity;

    // Define data structure based on type
    let detailsData = {};
    if (type === "people") {
        detailsData = {
            "Gender": properties.gender,
            "Hair Color": properties.hair_color,
            "Height": properties.height,
            "Eye Color": properties.eye_color,
            "Mass": properties.mass,
            "Birth Year": properties.birth_year,
        };
    } else if (type === "planets") {
        detailsData = {
            "Climate": properties.climate,
            "Diameter": properties.diameter,
            "Gravity": properties.gravity,
            "Orbital Period": properties.orbital_period,
            "Population": properties.population,
            "Terrain": properties.terrain,
        };
    } else if (type === "vehicles") {
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
            {/* Image above entity name with 600x400 size */}
            <img 
                src={imageHolder} 
                alt={properties.name} 
                width="600" 
                height="400" 
                style={{ objectFit: "cover", borderRadius: "8px" }} 
            />

            {/* Entity name */}
            <h1>{properties.name}</h1>

            {/* Description and UID under the name in an h3 */}
            <h3>
                <strong>Description:</strong> {properties.description || "No description available."}
            </h3>
            <h3>
                <strong>UID:</strong> {entity.uid}
            </h3>

            {/* Dynamic Data Display */}
            <div id="descriptions-container">
                <div id="keys" style={{ display: "inline-block", textAlign: "left", marginRight: "20px" }}>
                    {Object.keys(detailsData).map((key, index) => (
                        <p key={index}><strong>{key}:</strong></p>
                    ))}
                </div>
                <div id="values" style={{ display: "inline-block", textAlign: "left" }}>
                    {Object.values(detailsData).map((value, index) => (
                        <p key={index}>{value}</p>
                    ))}
                </div>
            </div>

            {/* Back to entities link */}
            <div className="back-button-container" style={{ marginTop: "20px", textAlign: "center" }}>
                <Link to="/" className="btn btn-warning">
                    Back to Entities
                </Link>
            </div>
        </div>
    );
};

export default Details;
