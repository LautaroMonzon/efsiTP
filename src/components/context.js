import { useState, createContext } from "react";
import { localstorage_load, localstorage_save } from "../utils/localstorage";

export const FavoritoContext = createContext();

export default function FavoritoProvider({ children }) {
	const [fav, setFav] = useState(localstorage_load("fav") || null);

	const setFavWrapper = (val) => {
		setFav(val);
		localstorage_save("fav", val);
	};

	return (
		<FavoritoContext.Provider value={{ fav, setFav: setFavWrapper }}>
			{children}
		</FavoritoContext.Provider>
	);
}
