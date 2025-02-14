const storeReducer = (state, action) => {
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
		  favorites: state.favorites.filter((item) => item.uid !== action.payload.uid),
		};
  
	  default:
		throw new Error("Unknown action.");
	}
  };
  
  // Use this in `appContext.js` to sync localStorage
  useEffect(() => {
	localStorage.setItem("characters", JSON.stringify(state.characters));
	localStorage.setItem("vehicles", JSON.stringify(state.vehicles));
	localStorage.setItem("planets", JSON.stringify(state.planets));
	localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state]);
  