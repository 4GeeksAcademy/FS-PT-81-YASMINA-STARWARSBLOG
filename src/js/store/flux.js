const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			characterDetails: null,
			planetDetails: null,
		},
		actions: {
			getPeople: async () => {
				const store = getStore();
				try {
					const resp = await fetch("https://www.swapi.tech/api/people");
					if (!resp.ok) throw new Error("error get people");
					const data = await resp.json();

					console.log("obteniendo personaje:", data.results);
					setStore({ people: data.results });
				} catch (error) {
					console.error("error obteniendo el personaje");
				}
			},

			getPlanets: async () => {
				const store = getStore();
				if(store.planets.length > 0){
					console.log("planetas guardados store");
					return;
				}
				try {
					const resp = await fetch("https://www.swapi.tech/api/planets/");
					if (!resp.ok) throw new Error("error get planets");
					const data = await resp.json();
					setStore({ ...store, planets : data.results });
					console.log("obteniendo planetas:", data.results);
				} catch (error) {
					console.error("error obteniendo el planeta");
				}
			},

			getCharacterDetails: async (uid) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/people/${uid}`);
					if (!resp.ok) throw new Error("error get details people");
					const data = await resp.json();
                    setStore({ characterDetails:{ ...data.result.properties}});
					console.log("obteniendo detalles personaje:", data.result.properties);
				} catch (error) {
					console.error(error);
				}
			},
			getPlanetDetails: async (uid) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
					if (!resp.ok) throw new Error("error get details planets");
					const data = await resp.json();
                    setStore({ planetDetails:{ ...data.result.properties, uid }});
					console.log("obteniendo detalles planetas:", data.result.properties);
				} catch (error) {
					console.error(error);
				}
			},

			addFavorite: (item) => {
				const store = getStore();
				if (!Array.isArray(store.favorites)){
					setStore({ ...store, favorites : []});
					return;
				}
				if (!store.favorites.some((fav) => fav.uid === item.uid)) {
					setStore({ ...store, favorites: [...store.favorites, item] });
				} else {
				console.log("ya esta en fav")
				}
			},

			deleteFavorite: (uid) => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter((fav) => fav.uid !== uid);
				setStore({ ...store, favorites: updatedFavorites });
			},
		},
	};
};



export default getState;


