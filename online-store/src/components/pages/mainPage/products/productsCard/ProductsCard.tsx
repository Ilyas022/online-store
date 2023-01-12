import { Dispatch } from '@reduxjs/toolkit';
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavigateFunction, useNavigate } from "react-router-dom";
import { addProduct, CartStateItem, removeProductFromCart } from '../../../../../store/slices/cartSlice';
import { RootState } from '../../../../../store/store';
import { Tea } from "../../../../../types";

export default function productsCard({tea}: {tea: Tea}) {

  const navigate : NavigateFunction = useNavigate(); 
  const routeChange = () : void =>{ 
    const path = `product`; 
    navigate(path);
  }
  const dispatch : Dispatch = useDispatch();
  const products : CartStateItem[] = useSelector((state: RootState) => state.cart)
  const [isAddedToCart, setIsAddedToCart] = useState(!!(products.find((item) => item.tea.id === tea.id)))
  const addProductToCart = () : void => {
    if(!isAddedToCart) {
      setIsAddedToCart(true);
      dispatch(addProduct({tea : tea, count : 1}))
    }
    else {
      setIsAddedToCart(false);
      dispatch(removeProductFromCart({tea : tea, count : 0}));
    }
  }

  return (
    <div className="products-item">
          <div className="products-item__image">
            <img className="products-image" src={tea.image} alt="green tea image"></img>
          </div>
            <div className="products-item__rating">Rating: {tea.rating}</div>
            <div className="products-item__title">{tea.title}</div>
            <div className="products-item__type">Type: {tea.type}</div>
            <div className="products-item__size">Leaf size: {tea.leafSize}</div>
            <div className="products-item__desc">{tea.description}</div>
            <div className="products-item__price">Price: {tea.price}$</div>
            <div className="products-item__stock">Stock: {tea.stock}</div>
            <div className="products-item__hover">
              <button className="products-item__info-button button" onClick={routeChange}>More info</button>
              <button className="products-item__add-button button" onClick={addProductToCart}>
                {isAddedToCart ? 'Drop from cart' : 'Add to cart'}
              </button>
            </div>
            
        </div>
  )
}