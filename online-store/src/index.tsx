import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './scss/main.scss'
import App from './App';

import { store } from "./store/store"
import { Provider } from "react-redux";

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter basename='/online-store/online-store'>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  
);