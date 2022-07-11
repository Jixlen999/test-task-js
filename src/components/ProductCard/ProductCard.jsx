import React from "react";
import Button from "../UI/Button/Button";
import classes from "./ProductCard.module.css";

const ProductCard = (props) => {
	return (
		<div className={classes.productCard}>
			<div>{props.picture}</div>
			<h3>{props.caption}</h3>
			{props.price && (
				<h2 className={classes.productCard__price}>{props.price} руб.</h2>
			)}

			<Button product={props} />
		</div>
	);
};

export default ProductCard;
