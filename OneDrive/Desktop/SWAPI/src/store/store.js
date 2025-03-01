import { createStore } from "redux";

const initialState = {
    people: [],
    planets: [],
    vehicles: [],
    favorites: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PEOPLE":
            return { ...state, people: action.payload };
        case "SET_PLANETS":
            return { ...state, planets: action.payload };
        case "SET_VEHICLES":
            return { ...state, vehicles: action.payload };
        case "ADD_FAVORITE":
            return { ...state, favorites: [...state.favorites, action.payload] };
        case "REMOVE_FAVORITE":
            return { ...state, favorites: state.favorites.filter(fav => fav.uid !== action.payload.uid) };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
