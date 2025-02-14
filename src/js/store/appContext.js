import React, { createContext, useReducer, useEffect } from "react";

useEffect(() => {
  const fetchData = async (endpoint, actionType, storageKey) => {
    const storedData = localStorage.getItem(storageKey);

    if (storedData) {
      dispatch({ type: actionType, payload: JSON.parse(storedData) });
      return;
    }

    try {
      const response = await fetch(`https://www.swapi.tech/api/${endpoint}/`);
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
