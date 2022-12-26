import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CartPage from "./components/pages/CartPage/CartPage";
import MainPage from "./components/pages/MainPage/MainPage";


const App = () => {
  return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
        
      <Route path="/cart" element={<CartPage />} />
    </Routes>
    <Footer />
  </>
  )
}

export default App