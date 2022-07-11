import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductsList.module.css";

const ProductsList = ({ products }) => {
	return (
		<div className={classes.productsList}>
			<h1>Каталог</h1>
			<div className={classes.productsList__products}>
				{products.map((product) => {
					if (product.SKU) {
						{
							let productCardArray = [];
							for (let key in product.SKU) {
								productCardArray.push(
									<ProductCard
										key={product.SKU[key].ID}
										picture={product.PICTURE}
										caption={
											product.SKU[key].LENGTH
												? `${product.SKU[key].NAME} - длина ${product.SKU[key].LENGTH} мм`
												: `${product.SKU[key].NAME}`
										}
										price={product.SKU[key].PRICE}
									/>
								);
							}
							return productCardArray;
						}
					} else
						return (
							<ProductCard
								key={product.ID}
								picture={product.PICTURE}
								caption={product.NAME}
								price={product.PRICE}
							/>
						);
				})}
			</div>
		</div>
	);
};

export default ProductsList;
