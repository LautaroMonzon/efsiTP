import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FavoritoContext } from "../components/context";

const Card = ({ id, title, price, thumbnail, description }) => {
	const { fav, setFav } = useContext(FavoritoContext);

	return (
		<div className='col'>
			<div className='card' style={{ width: "12rem" }}>
				<img className='card-img-top' src={thumbnail} alt={title} />
				<div className='card-body'>
					<h5 className='card-title'>
						{title} - ${price}
					</h5>
					{fav === id && <h4>Es tu favorito!</h4>}
					<p className='card-text' style={{ fontSize: "12px" }}>
						{description}
					</p>
					<button
						onClick={() => setFav(id)}
						className='btn btn-primary'
					>
						Agrega como favorito
					</button>
				</div>
			</div>
		</div>
	);
};

const Products = () => {
	const [products, setProducts] = useState([]);

	const fetchData = async () => {
		const res = await axios.get("https://dummyjson.com/products");
		setProducts(res.data.products);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className='row'>
			{products.map((producto) => (
				<Card key={producto.id} {...producto} />
			))}
		</div>
	);
};

export default Products;
