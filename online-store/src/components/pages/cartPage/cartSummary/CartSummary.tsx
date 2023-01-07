import React from "react";
import { Tea } from '../../../../types';

export default function CartSummary() {
  const products = JSON.parse(localStorage.getItem('products')as string) as Tea[];
  return (
    <div className="cart-summary">
      <div className="cart-summary__header">
        <div className="cart-summary__title">Summary</div>
      </div>
      <div className="cart-summary__body">
        <div className="cart-summary__products-count">
          Products: {products? products.length : 0}
        </div>
        <div className="cart-summary__products-amount">
          Amount: {products ? products.reduce((sum,tea) => sum + Number(tea.price), 0) : 0}
        </div>
        <div className="cart-summary__promo">
          <input className="promo-code search-field" type="search" placeholder="Enter promo code"></input>
          
        </div>
        <div className="promo-code__promo-helper">
          Promo for test: 'RS', 'EPM'
        </div>
        <div className="cart-summary__button button">BUY NOW</div>
        
        
      </div>
      
      
    </div>
  )
}