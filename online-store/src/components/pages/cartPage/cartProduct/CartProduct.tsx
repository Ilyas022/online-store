import { Dispatch } from '@reduxjs/toolkit';
import React from "react";
import { useDispatch } from 'react-redux';
import { addProduct, CartStateItem, deleteProduct } from '../../../../store/slices/cartSlice';

type CartProductProps = {
  productNumber : number
  product : CartStateItem
}

export default function CartProduct({product, productNumber} : CartProductProps) {
  const dispatch: Dispatch = useDispatch();
  const handleAddProduct = () : void => {
    dispatch(addProduct(product));
  }
  const handleDeleteProduct = () : void => {
    dispatch(deleteProduct(product));
  }
  return (
    <div className="cart-product">
      <div className="cart-product__number">{productNumber}</div>
      <div className="cart-product-image">
        <img className="cart-product-image__img" src={product.tea.image} alt="" />
      </div>
      <div className="cart-product__info product-info">
        <div className="product-info__title">
          {product.tea.title}
        </div>
        <div className="product-info__description">
          {product.tea.description}
        </div>
        <div className="product-info__other">
          <div className="product-info__rating">Rating: {product.tea.rating}</div>
          <div className="product-info__discount">Type: {product.tea.type}</div>
          <div className="product-info__discount">Leaf Size: {product.tea.leafSize}</div>
        </div>
      </div>
        <div className="cart-product-control">
          <div className="cart-product-control__stock">Stock: {product.tea.stock}</div>
          <div className="cart-product-control__inc-dec">
            <div className="dec-button button" onClick={handleDeleteProduct}>-</div>
            <div className="catr-product-control__number">{product.count}</div>
            <div className="inc-button button" onClick={handleAddProduct}>+</div>
          </div>
          <div className="cart-product-control__amount">{product.count * (product.tea.price as unknown as number)}$</div>
        </div>
    </div>
  )
}