import React from "react";
import logo from '../../assets/img/icons/logo.svg'
import Toolbar from "./toolbar/toolbar";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container _container">
        <a className="header__logo logo" href="#">
          <img className="logo__img" src={logo} alt="" />
          <div className="logo__text">FIRST TEA COMPANY</div>
        </a>
        <Toolbar />
        
      </div>
      
    </div>
  )
}

export default Header