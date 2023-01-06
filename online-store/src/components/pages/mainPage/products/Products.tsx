import React, { useEffect, useState } from "react";
import ProductsCard from "./productsCard/ProductsCard";
import { Tea } from "../../../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

export default function Products() {
  const [teas, setTeas] = useState<Array<Tea>>([])
  const filterLeaf = useSelector((state: RootState) => state.filter.leaf)
  const filterType = useSelector((state: RootState) => state.filter.type)

  console.log(filterType, 'filtertype')
  console.log(filterLeaf, 'filterleaf')
  useEffect(() => {
    fetch('https://63b6e4b81907f863aa05aef3.mockapi.io/teas?type=' + filterType.join('|') + '&leafSize=' + filterLeaf.join('|'))
    .then(res => res.json())
    .then(teas => setTeas(teas))
  }, [filterType, filterLeaf])
  // console.log(teas[0])
  const teasArr = teas.map((tea: Tea, i:number) => <ProductsCard key={i} tea={tea} />)
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
        {teasArr}
        {/* {teas.map(tea => <ProductsCard title={tea.title} />)} */}
        {/* <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard /> */}
        
        
 
        
      </div>
      
      
      
    </div>
  )
}