import React from "react";
import logo from '../assets/img/icons/logo.svg'

export default function headerLogo() {
  return (
    <a className="logo" href="#">
      <img className="logo__img" src={logo} alt="" />
      <div className="logo__text">FIRST TEA COMPANY</div>
  </a>
  )
}