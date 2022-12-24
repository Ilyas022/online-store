import React from "react";

export default function Filters() {
  return (
    <div className="catalog__filters filters">
      <div className="filters-list categories">
        <h3 className="filters_title">Categories</h3> 
        <div className="filters-list__item">
          <input type="checkbox" name="" id="blackTea" />
          <label htmlFor="blackTea">Black tea</label>
        </div>
        <div className="filters-list__item">
          <input type="checkbox" name="" id="blackTea" />
          <label htmlFor="blackTea">Black tea</label>
        </div>
        <div className="filters-list__item">
          <input type="checkbox" name="" id="blackTea" />
          <label htmlFor="blackTea">Black tea</label>
        </div>
      </div>
      <div className="filters-list astringency">
        
      </div>
      <div className="filters-list leaf-size">
        <h3 className="filters_title">Leaf size</h3> 
        <div className="filters-list__item">
          <input type="checkbox" name="" id="bigLeaf" />
          <label htmlFor="BigLeaf">Big Leaf</label>
        </div>
        <div className="filters-list__item">
          <input type="checkbox" name="" id="mediumLeaf" />
          <label htmlFor="mediumLeaf">Medium Leaf</label>
        </div>
      </div>
      <div className="filters-list fermentation">
        <h3 className="filters_title">Degree of tea fermentation</h3> 
        <div className="filters-list__item">
          <input type="checkbox" name="" id="strongFermentation" />
          <label htmlFor="strongFermentation">Strong</label>
        </div>
        <div className="filters-list__item">
          <input className="filters-check" type="checkbox" name="" id="mediumFermentation" />
          <label htmlFor="mediumFermentation">Medium</label>
        </div>
        <div className="filters-list__item">
          <input type="checkbox" name="" id="liteFermentation" />
          <label htmlFor="liteFermentation">Lite</label>
        </div>
      </div>
      
    </div>
  )
}