import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeFilterType, setFilterType, removeFilterLeafType, setFilterLeafType, setMinPrice, setMaxPrice, setMinStock, setMaxStock, resetFilters } from "../../../../store/slices/filterSlice";
import { addTeas } from "../../../../store/slices/teaSlice";
import { RootState } from "../../../../store/store";
import { Tea } from "../../../../types";

export default function Filters() {
  const minStock = useSelector((state: RootState) => state.filter.minStock)
  const maxStock = useSelector((state: RootState) => state.filter.maxStock)
  const minPrice = useSelector((state: RootState) => state.filter.minPrice)
  const maxPrice = useSelector((state: RootState) => state.filter.maxPrice)
  const filterLeaf = useSelector((state: RootState) => state.filter.leaf)
  const filterType = useSelector((state: RootState)  => state.filter.type)
  const dispatch = useDispatch();

  const onClickCategory = (e: React.FormEvent) => {
    if (filterType.includes(e.currentTarget.id)) {
      dispatch(removeFilterType(e.currentTarget.id))
    } else {
      dispatch(setFilterType(e.currentTarget.id))
    }
  }
  const onClickLeaf = (e: React.FormEvent) => {
    if (filterLeaf.includes(e.currentTarget.id)) {
      dispatch(removeFilterLeafType(e.currentTarget.id))
    } else {
      dispatch(setFilterLeafType(e.currentTarget.id))
    }
  }
  const copyHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentTarget = e.currentTarget
    navigator.clipboard.writeText(window.location.href)
    currentTarget.innerHTML = 'Copied!'
    setTimeout(() => {
      currentTarget.innerHTML = 'Copy link'
    }, 2000);
  }

  return (
    <div className="catalog__filters filters">
      <div className="filters-buttons">
        <button className="reset-button button" onClick={() => dispatch(resetFilters())}>Reset filters</button>
        <button className="copy-button button" onClick={(e) => copyHandler(e)} >Copy link</button>
      </div>
      <div className="filters-list categories">
        <h3 className="filters__title">Categories</h3> 
        <div className="filters-list__item">
          <input onChange={onClickCategory} type="checkbox" name="" id="black" checked={filterType.includes('black') ? true : false} />
          <label htmlFor="blackTea">Black tea</label>
        </div>
        <div className="filters-list__item">
          <input onChange={onClickCategory} type="checkbox" name="" id="yellow" checked={filterType.includes('yellow') ? true : false} />
          <label htmlFor="blackTea">Yellow tea</label>
        </div>
        <div className="filters-list__item">
          <input onChange={onClickCategory} type="checkbox" name="" id="puer" checked={filterType.includes('puer') ? true : false} />
          <label htmlFor="blackTea">Puer</label>
        </div>
        <div className="filters-list__item">
          <input onChange={onClickCategory} type="checkbox" name="" id="oolong" checked={filterType.includes('oolong') ? true : false} />
          <label htmlFor="blackTea">Oolong</label>
        </div>
        <div className="filters-list__item">
          <input onChange={onClickCategory} type="checkbox" name="" id="white" checked={filterType.includes('white') ? true : false} />
          <label htmlFor="blackTea">White</label>
        </div>
        <div className="filters-list__item">
          <input onChange={onClickCategory} type="checkbox" name="" id="green" checked={filterType.includes('green') ? true : false} />
          <label htmlFor="blackTea">Green</label>
        </div>
      </div>
      <div className="filters-list astringency">
        
      </div>
      <div className="filters-list leaf-size">
        <h3 className="filters__title">Leaf size</h3> 
        <div className="filters-list__item">
          <input onChange={onClickLeaf} type="checkbox" name="" id="big" checked={filterLeaf.includes('big') ? true : false} />
          <label htmlFor="BigLeaf">Big Leaf</label>
        </div>
        <div className="filters-list__item">
          <input onChange={onClickLeaf} type="checkbox" name="" id="medium" checked={filterLeaf.includes('medium') ? true : false} />
          <label htmlFor="mediumLeaf">Medium Leaf</label>
        </div>
      </div>
      <div className="filters-list price">
        <h3 className="filters__title">Price</h3>
          <div className="filters-list__item filters-count">
            <div className="filters-count__min">
              {minPrice}
            </div>
            <div className="filters-count__max">
              {maxPrice}
            </div>
          </div>
          <div className="filters-list__item filters-ranges">
            <div className="filters-ranges__bar"></div>
              <input onInput={(e) => dispatch(setMinPrice(Number(e.currentTarget.value)))} className="filters-ranges__range" type="range" min="1" max="50" step="1" value={minPrice} />
              <input onInput={(e) => dispatch(setMaxPrice(Number(e.currentTarget.value)))} className="filters-ranges__range" type="range" max="50" step="1" value={maxPrice} />
          </div>
      </div>
      <div className="filters-list stock">
        <h3 className="filters__title">Stock</h3>
          <div className="filters-list__item filters-count">
            <div className="filters-count__min">
              {minStock}
            </div>
            <div className="filters-count__max">
              {maxStock}
            </div>
          </div>
          <div className="filters-list__item filters-ranges">
            <div className="filters-ranges__bar"></div>
              <input onInput={(e) => dispatch(setMinStock(Number(e.currentTarget.value)))} className="filters-ranges__range" type="range" min="1" max="145" step="1" value={minStock} />
              <input onInput={(e) => dispatch(setMaxStock(Number(e.currentTarget.value)))} className="filters-ranges__range" type="range" max="145" step="1" value={maxStock} />
          </div>
      </div>
      
      
    </div>
  )
}