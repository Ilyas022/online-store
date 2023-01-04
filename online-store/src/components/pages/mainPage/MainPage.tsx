import React from "react";
import Filters from "./filters/Filters";
import Products from "./products/Products";



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