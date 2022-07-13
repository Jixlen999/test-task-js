import React, { useContext, useEffect, useState, useRef } from "react";
import classes from "./ShoppingCart.module.css";
import { Context, ProductsAmountContext } from "../../Context";
import classNames from "classnames";

const ShoppingCart = () => {
	const [products, setProducts] = useContext(Context);
	const [productsAmount, setProductsAmount] = useContext(ProductsAmountContext);
	const [totalPrice, setTotalPrice] = useState(0);

	const changeProductAmount = (pr, direction) => {
		let productCopy = Object.assign(
			{},
			productsAmount.find((p) => p.name === pr.name)
		);
		if (direction === "down") {
			if (productCopy.amount > 1) {
				--productCopy.amount;
			}
		} else {
			++productCopy.amount;
		}
		setProductsAmount([
			...productsAmount.filter((p) => p.name !== pr.name),
			productCopy,
		]);
	};
	const deleteProduct = (pr) => {
		setProducts([...products.filter((p) => p.name !== pr.name)]);
		setProductsAmount([...productsAmount.filter((p) => p.name !== pr.name)]);
	};

	const countTotalPrice = () => {
		let total = 0;
		productsAmount.forEach((prod) => {
			total += products.find((p) => p.name === prod.name).price * prod.amount;
		});
		setTotalPrice(total);
	};

	useEffect(() => {
		countTotalPrice();
	}, [productsAmount, products]);

	return (
		<div className={classes.shoppingCart}>
			{products.length !== 0 ? (
				<div className={classes.shoppingCart__productsList}>
					<h1>Корзина</h1>
					<table className={classes.shoppingCart__table} cellSpacing="0">
						<thead>
							<tr style={{ textAlign: "left" }}>
								<th>Наименование</th>
								<th>Кол-во</th>
								<th>Цена/шт</th>
								<th>Сумма</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{products.map((pr) => {
								return (
									<tr key={pr.name}>
										<td>{pr.name}</td>
										<td className={classes.table__input}>
											<button onClick={() => changeProductAmount(pr, "down")}>
												-
											</button>
											<input
												className={classes.table__amountInput}
												readOnly
												type="number"
												value={
													productsAmount.find((el) => el.name === pr.name)
														.amount
												}
												min={1}
											/>
											<button onClick={() => changeProductAmount(pr, "up")}>
												+
											</button>
										</td>
										<td>{pr.price.replace(/\.0+$/, "")} руб.</td>
										<td>
											{productsAmount.find((el) => el.name === pr.name).amount *
												pr.price}{" "}
											руб.
										</td>
										<td
											className={classes.table__deleteBtn}
											onClick={() => {
												deleteProduct(pr);
											}}
										>
											&#10006;
										</td>
									</tr>
								);
							})}
						</tbody>
						<tfoot>
							<tr>
								<td colSpan="3">Итого</td>
								<td>{totalPrice} руб.</td>
							</tr>
						</tfoot>
					</table>
				</div>
			) : (
				<h1 style={{ textAlign: "center", height: "100vh" }}>Корзина пуста</h1>
			)}
		</div>
	);
};

export default ShoppingCart;
