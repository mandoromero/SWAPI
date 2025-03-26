import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_SWAPI_URL || "https://www.swapi.tech/api";

// Async thunks for fetching data
export const fetchPeople = createAsyncThunk("swapi/fetchPeople", async () => {
    const response = await axios.get(`${API_BASE_URL}/people`);
    return response.data.results;
});

export const fetchPlanets = createAsyncThunk("swapi/fetchPlanets", async () => {
    const response = await axios.get(`${API_BASE_URL}/planets`);
    return response.data.results;
});

export const fetchVehicles = createAsyncThunk("swapi/fetchVehicles", async () => {
    const response = await axios.get(`${API_BASE_URL}/vehicles`);
    return response.data.results;
});

// Create the slice
const swapiSlice = createSlice({
    name: "swapi",
    initialState: {
        people: [],
        planets: [],
        vehicles: [],
        favorites: [],
        status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {
        addToFavorites: (state, action) => {
            if (!state.favorites.some(fav => fav.uid === action.payload.uid)) {
                state.favorites.push(action.payload);
            }
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(fav => fav.uid !== action.payload.uid);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPeople.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPeople.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.people = action.payload;
            })
            .addCase(fetchPeople.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchPlanets.fulfilled, (state, action) => {
                state.planets = action.payload;
            })
            .addCase(fetchVehicles.fulfilled, (state, action) => {
                state.vehicles = action.payload;
            });
    },
});

export const { addToFavorites, removeFromFavorites } = swapiSlice.actions;
export default swapiSlice.reducer;
