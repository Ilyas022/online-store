import React from "react";
import Toolbar from "../Toolbar";
import Logo from '../Logo'

const Header = () => {
  return (
    <div className="header">
      <div className="header__container _container">
        <Logo />
        <Toolbar />
      </div>
      
    </div>
  )
}

export default Header