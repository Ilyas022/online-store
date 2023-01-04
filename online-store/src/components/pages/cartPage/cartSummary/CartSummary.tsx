import React from "react";

export default function CartSummary() {
  return (
    <div className="cart-summary">
      <div className="cart-summary__header">
        <div className="cart-summary__title">Summary</div>
      </div>
      <div className="cart-summary__body">
        <div className="cart-summary__products-count">
          Products: 6
        </div>
        <div className="cart-summary__products-amount">
          Amount: 1500$
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