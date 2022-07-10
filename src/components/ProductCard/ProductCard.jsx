import React from "react";
import Button from "../UI/Button/Button";
import classes from "./ProductCard.module.css";
import axios from "axios";

const ProductCard = () => {
	const getData = () => {
		axios.get("product.json").then((response) => {
			console.log(response.data);
		});
	};

	return (
		<div className={classes.productCard}>
			<div>Img link</div>
			<h3>Product</h3>
			<h2>Price</h2>
			<Button onClick={() => getData()} />
		</div>
	);
};

export default ProductCard;
