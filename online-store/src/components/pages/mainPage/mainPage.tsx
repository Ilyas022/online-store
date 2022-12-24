import React from "react";
import Filters from "./filters/filters";
import Products from "./products/products";



export default function MainPage() {
  return (
    <main className="catalog">
      <div className="catalog__container">
        <Filters />
        <Products />
        
      </div>
      
    </main>
  )
}