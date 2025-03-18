export const addToFavorites = (item) => ({
    type: ADD_TO_FAVORITES,
    payload: item,
});
  
export const removeFromFavorites = (item) => ({
    type: REMOVE_FROM_FAVORITES,
    payload: item,
});
  


export const fetchPeople = () => async (dispatch) => {
    try {
        const response = await fetch("https://www.swapi.tech/api/people/");
        const data = await response.json();
        dispatch({ type: "SET_PEOPLE", payload: data.results });
    } catch (error) {
        console.error("Error fetching people:", error);
    }
};

export const fetchPlanets = () => async (dispatch) => {
    try {
        const response = await fetch("https://www.swapi.tech/api/planets/");
        const data = await response.json();
        dispatch({ type: "SET_PLANETS", payload: data.results });
    } catch (error) {
        console.error("Error fetching planets:", error);
    }
};

export const fetchVehicles = () => async (dispatch) => {
    try {
        const response = await fetch("https://www.swapi.tech/api/vehicles/");
        const data = await response.json();
        dispatch({ type: "SET_VEHICLES", payload: data.results });
    } catch (error) {
        console.error("Error fetching vehicles:", error);
    }
};
