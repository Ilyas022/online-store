import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { Tea } from '../../../../types';

export default function CartSummary() {
  const products = useSelector((state : RootState) => state.cart);
  return (
    <div className="cart-summary">
      <div className="cart-summary__header">
        <div className="cart-summary__title">Summary</div>
      </div>
      <div className="cart-summary__body">
        <div className="cart-summary__products-count">
          Products: {products? products.reduce((count, tea) => count + tea.count, 0) : 0}
        </div>
        <div className="cart-summary__products-amount">
          Amount: {products ? products.reduce((sum,item) => sum + item.count*item.tea.price, 0) : 0}$
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