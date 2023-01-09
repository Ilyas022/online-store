import React from "react";
import callIcon from '../assets/img/icons/ringer-volume.png'
import adress from '../assets/img/icons/address.png'
import cartIcon from '../assets/img/icons/shopping-mall.png'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function Toolbar() {
  const products = useSelector((state: RootState) => state.cart)
  const totalPrice : number = Math.round(products.reduce((sum, item) => sum + (item.tea.price as unknown as number) * item.count, 0) * 100) / 100;
  return (
    <div className="header__toolbar toolbar">
      <div className="toolbar__contacts">
        <div className="toolbar__call">
          <a href="tel: +375292281337">
            <img className="toolbar__call-icon" src={callIcon} alt="call icon"/>
            +375 (29) 228-13-37
          </a>
        </div>
        <div className="toolbar__map">
          <img className="toolbar__map-icon" src={adress} alt="map icon"/>
          <a className="toolbar__map-link" href="https://yandex.by/maps/157/minsk/?ll=27.555691%2C53.902735&z=12" target="_blank">Belarus, Minsk</a>
        </div>
        <div className="toolbar__working-time working-time">
          <div className="working-time__icon"></div>
          <span className="working-time__time">Monday-Sunday 9:00 - 23:00</span>
        </div>
      </div>
        <NavLink className="toolbar__shoping-cart toolbar-shoping-cart" to="/cart">
          <img className="toolbar-shoping-cart__icon" src={cartIcon} alt="shoping cart icon"/>
          <div className="toolbar-shoping-cart__counter">{products.reduce((count,item) => count + item.count, 0)}</div>
          <div className="toolbar-shoping-cart__amount">Total price: {totalPrice}$</div>
          
      </NavLink>
    </div>
  )
}
