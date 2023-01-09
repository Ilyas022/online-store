import React from "react";
import { useSelector } from 'react-redux';
import { CartStateItem } from '../../../../store/slices/cartSlice';
import { RootState } from '../../../../store/store';
import { Promo } from '../../../../types';

const promo: Promo[] = [
  {
    id: 'RS',
    name: 'Roling Scopes School',
    discount: 10
  },
  {
    id: 'EPM',
    name: 'Epam Systems',
    discount: 10
  }
]

export default function CartSummary() {
  const products: CartStateItem[] = useSelector((state: RootState) => state.cart);
  const totalPrice : number = Math.round(products.reduce((sum, item) => sum + (item.tea.price as unknown as number) * item.count, 0) * 100) / 100;
  const handleFindPromocode = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    console.log(promo.find((code) => code.id.toLocaleLowerCase() === e.target.value.toLocaleLowerCase()))
  }
  return (
    <div className="cart-summary">
      <div className="cart-summary__header">
        <div className="cart-summary__title">Summary</div>
      </div>
      <div className="cart-summary__body">
        <div className="cart-summary__products-count">
          Products: {products ? products.reduce((count, tea) => count + tea.count, 0) : 0}
        </div>
        <div className="cart-summary__products-amount">
          Amount: {totalPrice}$
        </div>
        <div className="cart-summary__promo">
          <input className="promo-code search-field" type="search" placeholder="Enter promo code" onChange={(e) => handleFindPromocode(e)}></input>

        </div>
        <div className="promo-code__promo-helper">
          Promo for test: 'RS', 'EPM'
        </div>
        <div className="cart-summary__button button">BUY NOW</div>


      </div>


    </div>
  )
}