import React, { useEffect } from "react";
import ProductsCard from "./productsCard/ProductsCard";
import { Tea } from "../../../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useDispatch } from "react-redux";
import { addTeas } from "../../../../store/slices/teaSlice";
import { useNavigate } from "react-router-dom";
import { setFilterLeafType, setFilterType } from "../../../../store/slices/filterSlice";
export default function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const teas = useSelector((state: RootState) => state.teas.teas)
  const filterLeaf = useSelector((state: RootState) => state.filter.leaf)
  const filterType = useSelector((state: RootState) => state.filter.type)

  console.log(filterLeaf, filterType)

  useEffect(() => {
    if(window.location.search) {
      const wls = window.location.search
      .substring(1)
      .split('&')
      if(wls.find(item => item.includes('type'))) {
        const types = wls.find(item => item.includes('type'))!
      .slice(5)
      .split('%E2%86%95')
      .forEach(item => dispatch(setFilterType(item)))
      console.log('wls', types)
      }
      if (wls.find(item => item.includes('leafSize'))) {
        const leafs = wls.find(item => item.includes('leafSize'))!
      .slice(9)
      .split('%E2%86%95')
      .forEach(item => dispatch(setFilterLeafType(item)))
      }
      
      // console.log('wls', types)

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
    let queryString = `?${types}${types.length > 0 && leafs.length > 0 ? '&' : ''}${leafs}`
    // filterLeaf.length > 0 || filterType.length > 0 || (filterLeaf.length > 0 && filterType.length > 0) ? `?type=${filterType.join('↕')}&leafSize=${filterLeaf.join('↕')}` : ''
    console.log('querystring',queryString)
    navigate(queryString)
  }, [filterLeaf, filterType])

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
          <span className="products-amount__title">Found: </span>
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