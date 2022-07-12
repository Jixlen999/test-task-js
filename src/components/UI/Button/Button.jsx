import React, { useState, useContext } from "react";
import classes from "./Button.module.css";
import { Context } from "../../../Context";

const Button = ({ product, ...props }) => {
	const [products, setProducts] = useContext(Context);
	const [productsInCart, setProductsInCart] = useState([]);

	const addProductToStorage = () => {
		let pr = Object.assign({}, product);
		if (productsInCart.includes(pr.caption)) {
			const product = products.find((p) => p.caption === pr.caption);
			product.amount++;
			console.log(product);
		} else {
			pr.amount = 1;
			setProductsInCart([...productsInCart, pr.caption]);
			setProducts([...products, pr]);
		}
		// console.log(productsInCart);
	};

	return (
		<div
			className={classes.button}
			{...props}
			onClick={() => {
				addProductToStorage();
			}}
		>
			Купить
		</div>
	);
};

export default Button;
