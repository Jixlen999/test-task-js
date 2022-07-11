import React, { useEffect, useState } from "react";
import classes from "./ShoppingCart.module.css";

const ShoppingCart = () => {
	let [productsList, setProductsList] = useState([]);
	let productKeys = Object.keys(sessionStorage);

	return (
		<div className={classes.shoppingCart}>
			<h1>Корзина</h1>
			<div className={classes.shoppingCart__productsList}>
				<table className={classes.shoppingCart__table}>
					<thead>
						<tr style={{ textAlign: "left" }}>
							<th>Наименование</th>
							<th>Кол-во</th>
							<th>Цена/шт</th>
							<th>Сумма</th>
						</tr>
					</thead>
					<tbody>
						{productKeys.map((key) => {
							return (
								<tr>
									<td>{JSON.parse(sessionStorage[key]).caption}</td>
								</tr>
							);
						})}
					</tbody>

					<tfoot>
						<tr>
							<td>End</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	);
};

export default ShoppingCart;
