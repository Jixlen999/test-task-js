import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductsList.module.css";

const ProductsList = () => {
	return (
		<div className={classes.productsList}>
			<h1>Каталог</h1>
			<div className={classes.productsList__products}>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	);
};

export default ProductsList;
