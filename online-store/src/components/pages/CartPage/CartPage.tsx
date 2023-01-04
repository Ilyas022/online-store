import React from "react";
import CartProduct from "./CartProduct/CartProduct";
import CartSummary from "./CartSummary/CartSummary";

export default function cartPage() {
  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart-products">
          <div className="cart-products__header">
            <h1 className="cart-products__title">
              Products in cart
            </h1>
            <div className="cart-products__amount">Amount: 5000$</div>

            <div className="cart-products-number">
              <span className="cart-products-number__text">Itmes: </span>
              <input className="cart-products-number__count" type="text" maxLength={2} />
            </div>

            <div className="cart-products__pages">
              Pages: 3
            </div>
          </div>
          <div className="cart-products__body">
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </div>

        </div>
        <CartSummary />
      </div>


    </div>
  )
}