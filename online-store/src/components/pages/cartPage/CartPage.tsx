import { cpuUsage } from 'process';
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { CartStateItem } from '../../../store/slices/cartSlice';
import { RootState } from '../../../store/store';
import CartProduct from "./cartProduct/CartProduct";
import CartSummary from "./cartSummary/CartSummary";


export default function cartPage() {
  const products : CartStateItem[] = useSelector((state: RootState) => state.cart)
  
  const isValidPage = () : boolean =>{
    const searchParams: URLSearchParams = new URLSearchParams(window.location.search)
    const searchPage =  Number(searchParams.get('page'));
    return searchPage ? searchPage > 0 && searchPage <= Math.ceil((products.length / displayedNumber)) : false
  }

  const isValidLimit = () : boolean =>{
    const searchParams: URLSearchParams = new URLSearchParams(window.location.search)
    const searchLimit =  Number(searchParams.get('limit'));
    return searchLimit ? searchLimit > 0 && searchLimit <= products.length : false
  }

  const [displayedNumber, setDisplayedNumber] = useState<number>(isValidLimit() ? Number((new URLSearchParams(window.location.search)).get('limit')) :products.length > 2 ? 3 : products.length)

  const handleItemsCountChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    setDisplayedNumber(Number(e.target.value))
  }

  const totalPrice : number = Math.round(products.reduce((sum, item) => sum + (item.tea.price as unknown as number) * item.count, 0) * 100) / 100;
  const [currentPage, setCurrentPage] = useState<number>(isValidPage() ? Number((new URLSearchParams(window.location.search)).get('page')) : 1);
  
  
  useEffect(() => {
    const searchParams: URLSearchParams = new URLSearchParams(window.location.search)
    searchParams.set('limit', displayedNumber.toString());
    searchParams.set('page', currentPage.toString());
    const newUrl = window.location.pathname + '?' + searchParams.toString();
    history.pushState(null, '',newUrl);
    currentPage > Math.ceil(products.length / displayedNumber) ? handlePreviousPage() : '';
  }, [displayedNumber, currentPage, products.length])

  const handlePreviousPage = () : void => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  const handleNextPage = () : void => {
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
                <input className="cart-products-number__count" type="number" onChange={(e) => handleItemsCountChange(e)} value={displayedNumber} min={1} max={products.length} />
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