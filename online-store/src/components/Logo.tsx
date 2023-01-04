import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/img/icons/logo.svg'

export default function Logo() {
  return (
    <NavLink className="logo" to="/">
      <img className="logo__img" src={logo} alt="" />
      <div className="logo__text">FIRST TEA COMPANY</div>
  </NavLink>
  )
}