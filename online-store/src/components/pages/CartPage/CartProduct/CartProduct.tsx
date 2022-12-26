import React from "react";

export default function CartProduct() {
  return (
    <div className="cart-product">
      <div className="cart-product__number">0</div>
      <div className="cart-product-image">
        <img className="cart-product-image__img" src="https://i.dummyjson.com/data/products/8/thumbnail.jpg" alt="" />
      </div>
      <div className="cart-product__info product-info">
        <div className="product-info__title">
          tea Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime optio voluptate minima explicabo aliquid. Dolores adipisci, qui veritatis dolore voluptas magni fugiat voluptate possimus sint ab odit placeat reprehenderit nesciunt
        </div>
        <div className="product-info__description">
          des
        </div>
        <div className="product-info__other">
          <div className="product-info__rating">Rating: 5**</div>
          <div className="product-info__discount">Discount: 10%</div>
        </div>
      </div>
        <div className="cart-product-control">
          <div className="cart-product-control__stock">Stock: 68</div>
          <div className="cart-product-control__inc-dec">
            <div className="dec-button button">-</div>
            <div className="catr-product-control__number">1</div>
            <div className="inc-button button">+</div>
          </div>
          <div className="cart-product-control__amount">1000$</div>
        </div>
    </div>
  )
}