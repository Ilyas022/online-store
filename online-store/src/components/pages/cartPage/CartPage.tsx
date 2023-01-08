import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import CartProduct from "./cartProduct/CartProduct";
import CartSummary from "./cartSummary/CartSummary";

export default function cartPage() {
  const products = useSelector((state: RootState) => state.cart)

  const [displayedNumber, setDisplayedNumber] = useState<number>(products.length > 2 ? 3 : products.length)

  const handleItemsCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayedNumber(Number(e.target.value))
  }

  const totalPrice = Math.round(products.reduce((sum, item) => sum + (item.tea.price as unknown as number) * item.count, 0) * 100) / 100;
  const [currentPage, setCurrentPage] = useState<number>(1);
  useEffect(() => setCurrentPage(1), [displayedNumber])
  useEffect(() => setCurrentPage(Math.ceil(products.length / displayedNumber)), [products.length])
  const handlePreviousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  const handleNextPage = () => {
    if (currentPage !== Math.ceil(products.length / displayedNumber)) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <div className="cart" >
      {products.length ?
        <div className="cart__container">
          <div className="cart-products">
            <div className="cart-products__header">
              <h1 className="cart-products__title">
                Products in cart
              </h1>
              <div className="cart-products__amount">Amount: {totalPrice}$</div>

              <div className="cart-products-number">
                <span className="cart-products-number__text">Itmes: </span>
                <input className="cart-products-number__count" type="number" onChange={(e) => handleItemsCountChange(e)} defaultValue={displayedNumber} min={1} max={products.length} />
              </div>
              <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
                <div className="dec-button button" onClick={handlePreviousPage}>&lt;</div>
                <div className="cart-products__pages">
                  {currentPage}/{Math.ceil(products.length / displayedNumber)}
                </div>
                <div className="inc-button button" onClick={handleNextPage}>&gt;</div>
              </div>
            </div>
            <div className="cart-products__body">
              {products.filter((el, i) => i >= (currentPage - 1) * displayedNumber && i < (currentPage * displayedNumber))
              .map((el, i) => <CartProduct key={el.tea.id} productNumber={i + 1 + displayedNumber*(currentPage - 1)} product={el} />)}
            </div>

          </div>
          <CartSummary />
        </div>
        :
        "Cart is empty"
      }
    </div >
  )
}