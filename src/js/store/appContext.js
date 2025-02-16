import React, { createContext, useReducer, useEffect } from "react";

export const StoreContext = createContext(null);

const initialState = {
  characters: [],
  vehicles: [],
  planets: [],
  favorites: [],
};

const SET_PEOPLE = "SET_PEOPLE";
const SET_VEHICLES = "SET_VEHICLES";
const SET_PLANETS = "SET_PLANETS";
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_PEOPLE:
      return { ...state, characters: action.payload };
    case SET_VEHICLES:
      return { ...state, vehicles: action.payload };
    case SET_PLANETS:
      return { ...state, planets: action.payload };
    case ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FROM_FAVORITES:
      return { 
        ...state, 
        favorites: state.favorites.filter(fav => fav.uid !== action.payload.uid) 
      };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async (endpoint, actionType, storageKey) => {
      const storedData = localStorage.getItem(storageKey);

      if (storedData) {
        dispatch({ type: actionType, payload: JSON.parse(storedData) });
        return;
      }

      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/${endpoint}/`);
        const data = await response.json();
        dispatch({ type: actionType, payload: data.results });
        localStorage.setItem(storageKey, JSON.stringify(data.results));
      } catch (error) {
        console.error(`Error loading ${endpoint}:`, error);
      }
    };

    fetchData("people", SET_PEOPLE, "characters");
    fetchData("vehicles", SET_VEHICLES, "vehicles");
    fetchData("planets", SET_PLANETS, "planets");
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
