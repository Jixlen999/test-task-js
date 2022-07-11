import React, { useEffect } from "react";
import classes from "./Button.module.css";

const Button = ({ product, ...props }) => {
	const addProductToLocalStorage = () => {
		sessionStorage.setItem(product.caption, JSON.stringify(product));
	};

	return (
		<div
			className={classes.button}
			{...props}
			onClick={() => {
				addProductToLocalStorage();
			}}
		>
			Купить
		</div>
	);
};

export default Button;
