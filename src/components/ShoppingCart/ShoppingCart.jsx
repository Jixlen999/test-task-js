import React, { useContext } from "react";
import classes from "./ShoppingCart.module.css";
import { Context } from "../../Context";

const ShoppingCart = () => {
	const [products, setProducts] = useContext(Context);

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
						{products.map((pr) => {
							return (
								<tr key={pr.caption}>
									<td>{pr.caption}</td>
									<td>
										<input type="number" defaultValue={pr.amount} min={1} />
									</td>
									<td>{pr.price}</td>
									<td>Сумма = кол * цена</td>
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
