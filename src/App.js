import FavoritoProvider from "./components/context";
import Navbar from "./components/navbar";
import Products from "./pages/products";

const App = () => {
	return (
		<FavoritoProvider>
			<div className='container'>
				<Navbar />
				<Products />
			</div>
		</FavoritoProvider>
	);
};

export default App;
