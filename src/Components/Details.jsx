import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, fetchPlanets, fetchVehicles } from "../store/swapiSlice";

const Details = () => {
    const { type, id } = useParams(); // Extract parameters from the URL
    const dispatch = useDispatch();
    
    const { people, planets, vehicles, status, error } = useSelector((state) => state.swapi);
    
    useEffect(() => {
        if (status === "idle") {
            if (type === "people") dispatch(fetchPeople());
            else if (type === "planets") dispatch(fetchPlanets());
            else if (type === "vehicles") dispatch(fetchVehicles());
        }
    }, [dispatch, status, type]);
    
    const dataMap = {
        people,
        planets,
        vehicles
    };
    
    const selectedData = dataMap[type]?.find((item) => item.uid === id);
    
    if (status === "loading") return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!selectedData) return <p>No details found.</p>;
    
    return (
        <div className="container mt-5">
            <h1 className="text-warning">{selectedData.name}</h1>
            <ul className="list-group">
                {Object.entries(selectedData).map(([key, value]) => (
                    <li key={key} className="list-group-item">
                        <strong>{key.replace("_", " ").toUpperCase()}:</strong> {value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Details;
