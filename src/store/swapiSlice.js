// Import Redux Toolkit helpers
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ----------------------
// ASYNC THUNKS (API calls)
// ----------------------

// These handle fetching data from the SWAPI.tech API
// Redux Toolkit will automatically generate pending, fulfilled, and rejected action types

// Fetching people from the Star Wars API
export const fetchPeople = createAsyncThunk("swapi/fetchPeople", async () => {
    const res = await fetch("https://www.swapi.tech/api/people");
    const data = await res.json();
    return data.results; // returns the array of people
});

// Fetching planets from the Star Wars API
export const fetchPlanets = createAsyncThunk("swapi/fetchPlanets", async () => {
    const res = await fetch("https://www.swapi.tech/api/planets");
    const data = await res.json();
    return data.results; // returns the array of planets
});

// Fetching vehicles from the Star Wars API
export const fetchVehicles = createAsyncThunk("swapi/fetchVehicles", async () => {
    const res = await fetch("https://www.swapi.tech/api/vehicles");
    const data = await res.json();
    return data.results; // returns the array of vehicles
});

// ----------------------
// INITIAL STATE
// ----------------------

// This is the default state for the swapi slice
const initialState = {
    people: [],           // array to hold fetched people
    planets: [],          // array to hold fetched planets
    vehicles: [],         // array to hold fetched vehicles
    favorites: [],        // array to hold favorited entities (can be people, planets, or vehicles)
    status: "idle",       // status of the current API call (used for showing loading states)
    error: null,          // error message in case a fetch fails
};

// ----------------------
// SLICE (Reducer + Actions)
// ----------------------

const swapiSlice = createSlice({
    name: "swapi", // the name of this slice of state
    initialState,  // the default values defined above

    reducers: {
        // Action to add an entity to favorites
        addToFavorites: (state, action) => {
            const exists = state.favorites.find(fav => fav.uid === action.payload.uid);
            if (!exists) {
                state.favorites.push(action.payload); // only add if not already in favorites
            }
        },

        // Action to remove an entity from favorites
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(fav => fav.uid !== action.payload); // remove by UID
        }
    },

    // Handling extra actions (like the async thunks above)
    extraReducers: (builder) => {
        builder
            // ----------------------------
            // FETCH PEOPLE
            // ----------------------------
            .addCase(fetchPeople.pending, (state) => {
                state.status = "loading"; // show loading state while request is in progress
            })
            .addCase(fetchPeople.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.people = action.payload; // store the fetched people
            })
            .addCase(fetchPeople.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message; // store the error message
            })

            // ----------------------------
            // FETCH PLANETS
            // ----------------------------
            .addCase(fetchPlanets.fulfilled, (state, action) => {
                state.planets = action.payload; // store the fetched planets
            })

            // ----------------------------
            // FETCH VEHICLES
            // ----------------------------
            .addCase(fetchVehicles.fulfilled, (state, action) => {
                state.vehicles = action.payload; // store the fetched vehicles
            });
    }
});

// ----------------------
// EXPORTS
// ----------------------

// This is the reducer function that will be combined in your store
export default swapiSlice.reducer;

// These are the action creators automatically generated for the reducer functions above
export const { addToFavorites, removeFromFavorites } = swapiSlice.actions;

