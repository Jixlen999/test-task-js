import { useEffect, useState } from "react";
import "./App.css";
import ProductsList from "./components/ProductsList/ProductsList";
import axios from "axios";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { Context } from "./Context";

function App() {
	const [products, setProducts] = useState([]);
	const fetchData = async () => {
		const result = await axios.get("product.json");
		setProducts(result.data);
	};
	const [productsInShoppingCart, setProductsInShoppingCart] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Context.Provider
			value={[productsInShoppingCart, setProductsInShoppingCart]}
		>
			<div className="App">
				<ProductsList products={products} />
				<ShoppingCart />
			</div>
			//{" "}
		</Context.Provider>
	);
}

export default App;
