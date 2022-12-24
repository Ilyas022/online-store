import React from "react";
import Toolbar from "../toolbar";
import Logo from '../logo'

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