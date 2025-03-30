import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Details = () => {
    const { type, id } = useParams(); // Get entity type and ID from URL
    const [entity, setEntity] = useState(null);
    const [loading, setLoading] = useState(true);

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
    } else if (type === "vehicles") {
        detailsData = {
            "Model": properties.model,
            "Manufacturer": properties.manufacturer,
            "Cost in Credits": properties.cost_in_credits,
            "Length": properties.length,
            "Max Speed": properties.max_atmosphering_speed,
            "Crew": properties.crew,
            "Passengers": properties.passengers,
            "Cargo Capacity": properties.cargo_capacity,
        };
    } else if (type === "planets") {
        detailsData = {
            "Climate": properties.climate,
            "Diameter": properties.diameter,
            "Gravity": properties.gravity,
            "Orbital Period": properties.orbital_period,
            "Rotation Period": properties.rotation_period,
            "Surface Water": properties.surface_water,
            "Terrain": properties.terrain,
            "Population": properties.population,
        };
    }

    return (
        <div style={{ fontFamily: "SF Distant Galaxy, sans-serif", textAlign: "center", padding: "20px", color: "#eef81e" }}>
            <h1>{properties.name}</h1>
            <p><strong>Description:</strong> {entity.description || "No description available."}</p>
            <p><strong>UID:</strong> {entity.uid}</p>

            <div id="descriptions-container" style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
                <div id="keys" style={{ textAlign: "right", fontWeight: "bold" }}>
                    {Object.keys(detailsData).map((key) => (
                        <p key={key}>{key}:</p>
                    ))}
                </div>
                <div id="values" style={{ textAlign: "left" }}>
                    {Object.values(detailsData).map((value, index) => (
                        <p key={index}>{value || "N/A"}</p>
                    ))}
                </div>
            </div>

            {/* Back to Entities Link */}
            <div className="back-button-container" style={{ marginTop: "20px", textAlign: "center" }}>
                <Link to="/" className="btn btn-warning" style={{ backgroundColor: "#f0ad4e", color: "white", padding: "10px 20px", borderRadius: "5px", textDecoration: "none" }}>
                    Back to Entities
                </Link>
            </div>
        </div>
    );
};

export default Details;
