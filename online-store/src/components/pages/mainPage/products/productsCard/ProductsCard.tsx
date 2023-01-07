import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addProduct } from '../../../../../store/slices/cartSlice';
import { RootState } from '../../../../../store/store';
import { Tea } from "../../../../../types";

export default function productsCard({tea}: {tea: Tea}) {

  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    const path = `product`; 
    navigate(path);
  }
  const dispatch = useDispatch();
  // const [isAddedToCart, setIsAddedToCart] = useState(false);
  const products = useSelector((state: RootState) => state.cart)
  const addProductToCart = () => {
    dispatch(addProduct({tea : tea, count : 1}));
  }

  return (
    <div className="products-item">
          <div className="products-item__image">
            <img className="products-image" src={tea.image} alt="green tea image"></img>
          </div>
            <div className="products-item__rating">Rating: {tea.rating}</div>
            <div className="products-item__title">{tea.title}</div>
            <div className="products-item__desc">{tea.description}</div>
            <div className="products-item__price">Price: {tea.price}$</div>
            <div className="products-item__hover">
              <button className="products-item__info-button button" onClick={routeChange}>More info</button>
              <button className="products-item__add-button button" onClick={addProductToCart}>Add to cart</button>
              
            </div>
            
        </div>
  )
}