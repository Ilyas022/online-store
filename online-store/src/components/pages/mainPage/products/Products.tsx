import React, { useEffect } from "react";
import ProductsCard from "./productsCard/ProductsCard";
import { Tea } from "../../../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useDispatch } from "react-redux";
import { addTeas } from "../../../../store/slices/teaSlice";

export default function Products() {
  const dispatch = useDispatch();
  
  const teas = useSelector((state: RootState) => state.teas.teas)
  const filterLeaf = useSelector((state: RootState) => state.filter.leaf)
  const filterType = useSelector((state: RootState) => state.filter.type)

  useEffect(() => {
    fetch('https://63b6e4b81907f863aa05aef3.mockapi.io/teas?'/* + query.join('&') */)
    .then(res => res.json())
    .then(teas => dispatch(addTeas(teas)))
  }, [])

  const teasArr = teas.filter(item => {
    if (filterLeaf.length === 0 && filterType.length === 0) {
      return item
    }
    if (filterLeaf.length > 0 && filterType.length > 0) {
      if (filterType.includes(item.type) && filterLeaf.includes(item.leafSize)) {
        return item
      }
    }
    if (filterLeaf.length > 0 && filterType.length === 0) {
      return filterLeaf.includes(item.leafSize)
    }
    if (filterType.length > 0 && filterLeaf.length === 0) {
      return filterType.includes(item.type)
    }
    return
  }).map((tea: Tea, i:number) => <ProductsCard key={i} tea={tea} />)
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