import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeFilterType, setFilterType, removeFilterLeafType, setFilterLeafType } from "../../../../store/slices/filterSlice";
import { addTeas } from "../../../../store/slices/teaSlice";
import { RootState } from "../../../../store/store";
import { Tea } from "../../../../types";

export default function Filters() {
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

  return (
    <div className="catalog__filters filters">
      <div className="filters-list categories">
        <h3 className="filters__title">Categories</h3> 
        <div className="filters-list__item">
          <input onClick={onClickCategory} type="checkbox" name="" id="black"/>
          <label htmlFor="blackTea">Black tea</label>
        </div>
        <div className="filters-list__item">
          <input onClick={onClickCategory} type="checkbox" name="" id="yellow" />
          <label htmlFor="blackTea">Yellow tea</label>
        </div>
        <div className="filters-list__item">
          <input onClick={onClickCategory} type="checkbox" name="" id="puer" />
          <label htmlFor="blackTea">Puer</label>
        </div>
        <div className="filters-list__item">
          <input onClick={onClickCategory} type="checkbox" name="" id="oolong" />
          <label htmlFor="blackTea">Oolong</label>
        </div>
        <div className="filters-list__item">
          <input onClick={onClickCategory} type="checkbox" name="" id="white" />
          <label htmlFor="blackTea">White</label>
        </div>
        <div className="filters-list__item">
          <input onClick={onClickCategory} type="checkbox" name="" id="green" />
          <label htmlFor="blackTea">Green</label>
        </div>
      </div>
      <div className="filters-list astringency">
        
      </div>
      <div className="filters-list leaf-size">
        <h3 className="filters__title">Leaf size</h3> 
        <div className="filters-list__item">
          <input onClick={onClickLeaf} type="checkbox" name="" id="big" />
          <label htmlFor="BigLeaf">Big Leaf</label>
        </div>
        <div className="filters-list__item">
          <input onClick={onClickLeaf} type="checkbox" name="" id="medium" />
          <label htmlFor="mediumLeaf">Medium Leaf</label>
        </div>
      </div>
      <div className="filters-list price">
        <h3 className="filters__title">Price</h3>
          <div className="filters-list__item filters-count">
            <div className="filters-count__min">
              0
            </div>
            <div className="filters-count__max">
              100
            </div>
          </div>
          <div className="filters-list__item filters-ranges">
            <div className="filters-ranges__bar"></div>
            
              <input onInput={(e) => console.log((e.target as HTMLInputElement).value)} className="filters-ranges__range" type="range" min="0" step="10"></input>
              <input onInput={(e) => console.log((e.target as HTMLInputElement).value)} className="filters-ranges__range" type="range" max="100" step="10"></input>
          </div>
          
        
      </div>
      <div className="filters-list stock">
        <h3 className="filters__title">Stock</h3>
          <div className="filters-list__item filters-count">
            <div className="filters-count__min">
              0
            </div>
            <div className="filters-count__max">
              100
            </div>
          </div>
          <div className="filters-list__item filters-ranges">
            <div className="filters-ranges__bar"></div>
            
              <input onInput={(e) => console.log((e.target as HTMLInputElement).value)} className="filters-ranges__range" type="range" min="0" step="10"></input>
              <input onInput={(e) => console.log((e.target as HTMLInputElement).value)} className="filters-ranges__range" type="range" max="100" step="10"></input>
          </div>
          
        
      </div>
      
      
    </div>
  )
}