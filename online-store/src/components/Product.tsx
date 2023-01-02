import React from "react";

export default function Product() {
  return (
    <div className="product">
      <div className="product__container _container">
        <div className="product__bread-crumbs bread-crumbs">
        </div>
          <h1 className="product__title">Black tea</h1>
          <div className="product__body">
            <div className="product-images">
              <div className="product-slides">
                <img className="product-slides__image" src="https://i.dummyjson.com/data/products/2/1.jpg" alt="" />
              </div>
              <div className="product-photo">
                <img className="product-photo__image" src="https://i.dummyjson.com/data/products/2/1.jpg" alt="" />
              </div>
              
              
            </div>
            <div className="product-inf">
              <div className="product-inf-item">
                  <h3 className="product-inf-item__title">Description:</h3>
                  <div className="product-inf-item__content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos autem voluptas, sapiente pariatur debitis incidunt. Dicta aliquid pariatur a adipisci, quae dolore sint minus sequi fugiat cum atque ullam quasi!
                  </div>
                  
              </div>
                <div className="product-inf-item">
                  <h3 className="product-inf-item__title">Discount Percentage:</h3>
                  <div className="product-inf-item__content">
                    17%
                  </div>
                </div>
                <div className="product-inf-item">
                  <h3 className="product-inf-item__title">Rating:</h3>
                  <div className="product-inf-item__content">
                    4.9
                  </div>
                </div>
                <div className="product-inf-item">
                  <h3 className="product-inf-item__title">Stock:</h3>
                  <div className="product-inf-item__content">
                    50
                  </div>
                </div>
                <div className="product-inf-item">
                  <h3 className="product-inf-item__title">Manufacturer:</h3>
                  <div className="product-inf-item__content">
                    India
                  </div>
                </div>
                <div className="product-inf-item">
                  <h3 className="product-inf-item__title">Category:</h3>
                  <div className="product-inf-item__content">
                    Black tea
                  </div>
                </div>
            </div>
            <div className="product-add-cart">
              <div className="product-add-cart__amout">
                <span>Amount:</span>
                <span>500$</span>
              </div>
              <button className="product-add-cart__button button">Add to cart</button>
              <button className="product-add-cart__button button">Buy now</button>
              
            </div>
            
          </div>
      </div>
    </div>
  )
}