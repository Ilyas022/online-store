import { Dispatch } from '@reduxjs/toolkit';
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavigateFunction, useNavigate } from "react-router-dom";
import { addProduct, CartStateItem } from '../../../../../store/slices/cartSlice';
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
  const addProductToCart = () : void => {
    dispatch(addProduct({tea : tea, count : 1}));
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
              <button className="products-item__add-button button" onClick={addProductToCart}>Add to cart</button>
            </div>
            
        </div>
  )
}