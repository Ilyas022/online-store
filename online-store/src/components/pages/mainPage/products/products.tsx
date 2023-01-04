import React from "react";
import ProductsCard from "./ProductsCard/ProductsCard";

export default function Products() {
  return (
    <div className="catalog__products products">
      <div className="prdoucts-info">
        <div className="products__sort">
          <select className="products__sortbar sortbar">
            <option className="sortbar-item" value="sort-title" disabled>Sort options:</option>
            <option className="sortbar-item" value="sort-title">Sort by price ASC</option>
            <option className="sortbar-item" value="sort-title">Sort by price DESC</option>
          </select>
          
        </div>
        <div className="products-amount">
          <span className="products-amount__title">Amount:</span>
          <span className="products-amount__count">0</span>
          
        </div>
        
        <div className="filters__search-field">
          <input className="search-field" type="search" placeholder="search"/>
        </div>
      </div>
      <div className="products-items">
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        
        
 
        
      </div>
      
      
      
    </div>
  )
}