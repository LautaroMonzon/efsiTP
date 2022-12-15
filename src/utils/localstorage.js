export const localstorage_save = (key, val) => {
	localStorage.setItem(key, JSON.stringify(val));
};

export const localstorage_load = (key) => {
	const val = localStorage.getItem(key);
	return val ? JSON.parse(val) : undefined;
};