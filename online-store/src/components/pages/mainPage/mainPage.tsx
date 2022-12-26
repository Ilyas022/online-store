import React from "react";
import Filters from "./Filters/Filters";
import Products from "./Products/Products";



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