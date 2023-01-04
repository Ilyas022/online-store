import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import CartPage from "./components/pages/cartPage/CartPage";
import MainPage from "./components/pages/mainPage/MainPage";
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