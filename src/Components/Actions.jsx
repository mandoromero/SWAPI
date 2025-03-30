// Action to add an item to favorites
export const addToFavorites = (item) => ({
    type: ADD_TO_FAVORITES, // Action type constant
    payload: item, // The item to be added to favorites
});
  
// Action to remove an item from favorites
export const removeFromFavorites = (item) => ({
    type: REMOVE_FROM_FAVORITES, // Action type constant
    payload: item, // The item to be removed from favorites
});

// Thunk action to fetch people data
export const fetchPeople = () => async (dispatch) => {
    try {
        const response = await fetch("https://www.swapi.tech/api/people/"); // Fetch people data from the API
        const data = await response.json(); // Parse the response data to JSON
        dispatch({
            type: "SET_PEOPLE", // Dispatch action to update the store with fetched data
            payload: data.results, // Payload contains the people data
        });
    } catch (error) {
        console.error("Error fetching people:", error); // Handle any errors during fetch
    }
};

// Thunk action to fetch planets data
export const fetchPlanets = () => async (dispatch) => {
    try {
        const response = await fetch("https://www.swapi.tech/api/planets/"); // Fetch planets data from the API
        const data = await response.json(); // Parse the response data to JSON
        dispatch({
            type: "SET_PLANETS", // Dispatch action to update the store with fetched data
            payload: data.results, // Payload contains the planets data
        });
    } catch (error) {
        console.error("Error fetching planets:", error); // Handle any errors during fetch
    }
};

// Thunk action to fetch vehicles data
export const fetchVehicles = () => async (dispatch) => {
    try {
        const response = await fetch("https://www.swapi.tech/api/vehicles/"); // Fetch vehicles data from the API
        const data = await response.json(); // Parse the response data to JSON
        dispatch({
            type: "SET_VEHICLES", // Dispatch action to update the store with fetched data
            payload: data.results, // Payload contains the vehicles data
        });
    } catch (error) {
        console.error("Error fetching vehicles:", error); // Handle any errors during fetch
    }
};
