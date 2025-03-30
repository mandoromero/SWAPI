import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; // Import necessary functions from Redux Toolkit
import axios from "axios"; // Import Axios for making HTTP requests

// Define the API base URL, falling back to a default if not provided
const API_BASE_URL = import.meta.env.VITE_SWAPI_URL || "https://www.swapi.tech/api";

// Async thunks for fetching data from the SWAPI
// Fetch people data from the SWAPI
export const fetchPeople = createAsyncThunk("swapi/fetchPeople", async () => {
    const response = await axios.get(`${API_BASE_URL}/people`);
    return response.data.results; // Return the results from the API response
});

// Fetch planets data from the SWAPI
export const fetchPlanets = createAsyncThunk("swapi/fetchPlanets", async () => {
    const response = await axios.get(`${API_BASE_URL}/planets`);
    return response.data.results; // Return the results from the API response
});

// Fetch vehicles data from the SWAPI
export const fetchVehicles = createAsyncThunk("swapi/fetchVehicles", async () => {
    const response = await axios.get(`${API_BASE_URL}/vehicles`);
    return response.data.results; // Return the results from the API response
});

// Create the slice, which contains the reducer and actions for the SWAPI state
const swapiSlice = createSlice({
    name: "swapi", // Name of the slice
    initialState: {
        people: [], // Initial state for the people data
        planets: [], // Initial state for the planets data
        vehicles: [], // Initial state for the vehicles data
        favorites: [], // Initial state for the favorites
        status: "idle", // Status to track loading states (idle, loading, succeeded, failed)
        error: null, // Error state in case the API call fails
    },
    reducers: {
        // Reducer to add an entity to favorites
        addToFavorites: (state, action) => {
            // Only add to favorites if the entity is not already in favorites
            if (!state.favorites.some(fav => fav.uid === action.payload.uid)) {
                state.favorites.push(action.payload);
            }
        },
        // Reducer to remove an entity from favorites
        removeFromFavorites: (state, action) => {
            console.log("Removing:", action.payload); // For debugging purposes
            state.favorites = state.favorites.filter(fav => fav.uid !== action.payload.uid);
        }
    },
    extraReducers: (builder) => {
        // Handle the async actions with different states (pending, fulfilled, rejected)
        builder
            // Handle the "fetch
