import { configureStore } from "@reduxjs/toolkit"; // Import the configureStore function from Redux Toolkit to set up the store
import swapiReducer from "./swapiSlice"; // Import the reducer that will handle actions related to the swapi data

// Set up the Redux store using configureStore
const store = configureStore({
    reducer: {
        // The swapi state will be managed by the swapiReducer
        // swapiReducer is imported from swapiSlice and handles all actions and state updates related to swapi data
        swapi: swapiReducer,
    },
});

// Export the configured store as the default export so it can be used in the application
export default store;
