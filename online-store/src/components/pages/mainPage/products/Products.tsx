import React, { useEffect } from "react";
import ProductsCard from "./productsCard/ProductsCard";
import { Tea } from "../../../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useDispatch } from "react-redux";
import { addTeas } from "../../../../store/slices/teaSlice";
import { useNavigate } from "react-router-dom";
import { setFilterLeafType, setFilterType, setMinPrice, setMaxPrice, setMinStock, setMaxStock } from "../../../../store/slices/filterSlice";

export default function Products() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const teas = useSelector((state: RootState) => state.teas.teas)
  const filterLeaf = useSelector((state: RootState) => state.filter.leaf)
  const filterType = useSelector((state: RootState) => state.filter.type)
  const minPrice = useSelector((state: RootState) => state.filter.minPrice)
  const maxPrice = useSelector((state: RootState) => state.filter.maxPrice)
  const minStock = useSelector((state: RootState) => state.filter.minStock)
  const maxStock = useSelector((state: RootState) => state.filter.maxStock)

  console.log(filterLeaf, filterType)

  useEffect(() => {
    if(window.location.search) {
      const wls = window.location.search
      .substring(1)
      .split('&')
      if(wls.find(item => item.includes('type'))) {
        wls.find(item => item.includes('type'))!
      .slice(5)
      .split('%E2%86%95')
      .forEach(item => dispatch(setFilterType(item)))
      }
      if(wls.find(item => item.includes('leafSize'))) {
        wls.find(item => item.includes('leafSize'))!
      .slice(9)
      .split('%E2%86%95')
      .forEach(item => dispatch(setFilterLeafType(item)))
      }
      if(wls.find(item => item.includes('price'))) {
        const prices = wls.find(item => item.includes('price'))!.slice(6).split('%E2%86%95')
        dispatch(setMinPrice(prices[0]))
        dispatch(setMaxPrice(prices[1]))
      }
      if(wls.find(item => item.includes('stock'))) {
        const stocks = wls.find(item => item.includes('stock'))!.slice(6).split('%E2%86%95')
        dispatch(setMinStock(stocks[0]))
        dispatch(setMaxStock(stocks[1]))
      }
    } 
  }, [])

  useEffect(() => {
    fetch('https://63b6e4b81907f863aa05aef3.mockapi.io/teas?'/* + query.join('&') */)
    .then(res => res.json())
    .then(teas => dispatch(addTeas(teas)))
  }, [])

  useEffect(() => {
    const leafs = filterLeaf.length > 0 ? `leafSize=${filterLeaf.join('↕')}` : ''
    const types = filterType.length > 0 ? `type=${filterType.join('↕')}` : ''
    const price = minPrice > 1 || maxPrice < 50 || (minPrice > 1 && maxPrice < 50) ? `price=${minPrice}↕${maxPrice}` : ''
    const stock = minStock > 1 || maxStock < 145 || (minStock > 1 && maxStock < 145) ? `stock=${minStock}↕${maxStock}` : ''
    let queryString = `?${types}${types.length > 0 && leafs.length > 0 ? '&' : ''}${leafs}${(types.length > 0 && leafs.length > 0 && price) || (types.length > 0 && price) || (leafs.length > 0 && price) ? '&' : ''}${price}${(types.length > 0 && leafs.length > 0 && stock) || (types.length > 0 && leafs.length > 0 && price && stock) || (types.length > 0 && stock) || (leafs.length > 0 && stock) || (price && stock) ? '&' : ''}${stock}`
    
    navigate(queryString)
  }, [filterLeaf, filterType, minPrice, maxPrice, minStock, maxStock])

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
  }).filter(item => item.price <= maxPrice && item.price >= minPrice && item.stock >= minStock && item.stock <= maxStock).map((tea: Tea, i:number) => <ProductsCard key={i} tea={tea} />)
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
          <span className="products-amount__title">Found: </span>
          <span className="products-amount__count">{teasArr.length}</span>
          
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