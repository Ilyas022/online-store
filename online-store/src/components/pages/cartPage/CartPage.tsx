import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import CartProduct from "./cartProduct/CartProduct";
import CartSummary from "./cartSummary/CartSummary";

export default function cartPage() {
  const products = useSelector((state: RootState) => state.cart)
  return (
    <div className="cart" >
      {products.length ?
        <div className="cart__container">
          <div className="cart-products">
            <div className="cart-products__header">
              <h1 className="cart-products__title">
                Products in cart
              </h1>
              <div className="cart-products__amount">Amount: 5000$</div>

              <div className="cart-products-number">
                <span className="cart-products-number__text">Itmes: </span>
                <input className="cart-products-number__count" type="number" defaultValue={3} min={1} max={products.length} />
              </div>

              <div className="cart-products__pages">
                Pages: 3
              </div>
            </div>
            <div className="cart-products__body">
              {products.map((el,i) => <CartProduct key={el.tea.id} productNumber={i+1} product={el}/>)}
            </div>

          </div>
          <CartSummary />
        </div>
        :
        "Cart is empty"
      }
    </div >
  )
}