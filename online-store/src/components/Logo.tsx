import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from '../assets/img/icons/logo.svg'
import { resetFilters } from "../store/slices/filterSlice";


export default function Logo() {
  const dispatch = useDispatch()
  return (
    <NavLink className="logo" to='/' onClick={() => dispatch(resetFilters())}>
      <img className="logo__img" src={logo} alt="" />
      <div className="logo__text">FIRST TEA COMPANY</div>
  </NavLink>
  )
}