import { useEffect, useState, createContext } from "react";
import "./App.css";
import ProductsList from "./components/ProductsList/ProductsList";
import axios from "axios";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
	const [products, setProducts] = useState([]);
	const fetchData = async () => {
		const result = await axios.get("product.json");
		setProducts(result.data);
	};
	const [productInShoppingCart, setProductInShoppingCart] = useState([]);
	const productInShoppingCartContext = createContext(productInShoppingCart);

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<productInShoppingCartContext.Provider value={productInShoppingCart}>
			<div className="App">
				<ProductsList products={products} />
				<ShoppingCart />
			</div>
		</productInShoppingCartContext.Provider>
	);
}

export default App;
