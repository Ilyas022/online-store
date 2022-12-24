import React from "react";
import greenTea from '../../../../../assets/img/greenTea.jpg'

export default function productsCard() {
  return (
    <div className="products-item">
          <div className="products-item__image">
            <img className="products-image" src={greenTea} alt="green tea image"></img>
          </div>
            <div className="products-item__rating">*****</div>
            <div className="products-item__title">An Xi Mao Xie</div>
            <div className="products-item__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit..</div>
            <div className="products-item__price">4$</div>
            <div className="products-item__hover">
              <button className="products-item__info-button button">More info</button>
              <button className="products-item__add-button button">Add to cart</button>
              
            </div>
            
        </div>
  )
}