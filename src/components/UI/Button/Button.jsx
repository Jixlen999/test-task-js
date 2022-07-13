import React, { useContext } from "react";
import classes from "./Button.module.css";
import { Context, ProductsAmountContext } from "../../../Context";

const Button = ({ product, ...props }) => {
	const [products, setProducts] = useContext(Context);
	const [productsAmount, setProductsAmount] = useContext(ProductsAmountContext);

	const addProductToStorage = () => {
		let pr = Object.assign({}, product);
		let prod = productsAmount.find((el) => el.name === pr.name);
		if (prod) {
			console.log("yest");
			let oldName = prod.name;
			let newAmount = ++prod.amount;
			let oldPic = prod.picture;
			setProductsAmount([
				...productsAmount.filter((el) => el.name !== oldName),
				{ name: oldName, amount: newAmount, pic: oldPic },
			]);
		} else {
			let arr = { name: pr.name, amount: 1 };
			setProductsAmount([...productsAmount, arr]);
			setProducts([...products, pr]);
		}
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
