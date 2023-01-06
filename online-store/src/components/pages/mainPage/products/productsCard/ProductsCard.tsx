import React from "react";
import { useNavigate } from "react-router-dom";
import greenTea from '../../../../../assets/img/greenTea.jpg'
import { Tea } from "../../../../../types";

export default function productsCard({tea}: {tea: Tea}) {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `product`; 
    navigate(path);
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
              <button className="products-item__add-button button">Add to cart</button>
              
            </div>
            
        </div>
  )
}