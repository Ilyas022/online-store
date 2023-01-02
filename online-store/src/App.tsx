import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CartPage from "./components/pages/CartPage/CartPage";
import MainPage from "./components/pages/MainPage/MainPage";
import Product from "./components/Product";

Product
const App = () => {
  return (
  <>
    <Header />
      <main className="main">
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product" element={<Product />} />
      
    </Routes>
      </main>
    <Footer />
  </>
  )
}

export default App