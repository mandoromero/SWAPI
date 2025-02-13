const getState = ({ getStore, getActions, setStore }) => {
	const API_URL = process.env.REACT_APP_API_URL;

	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			favorites: [],
		},
		actions: {
			loadPeople: async () => {
				try {
					const response = await fetch(`${API_URL}/people/`);
					const data = await response.json();
					setStore({ people: data.results });
				} catch (error) {
					console.error("Error loading people:", error);
				}
			},

			loadPlanets: async () => {
				try {
					const response = await fetch(`${API_URL}/planets/`);
					const data = await response.json();
					setStore({ planets: data.results });
				} catch (error) {
					console.error("Error loading planets:", error);
				}
			},

			loadStarships: async () => {
				try {
					const response = await fetch(`${API_URL}/starships/`);
					const data = await response.json();
					setStore({ starships: data.results });
				} catch (error) {
					console.error("Error loading starships:", error);
				}
			}
		}
	};
};

export default getState;
