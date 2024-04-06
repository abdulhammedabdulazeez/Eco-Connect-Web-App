import React, { Fragment } from 'react'
import './css/app.css';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom'
import {DrinkWarePage} from './components/pages/DrinkWarePage'
import {KitchenWarePage} from './components/pages/KitchenWarePage'
import {BagsPage} from './components/pages/BagsPage'
import { CartPage } from './components/pages/CartPage'


let App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='drinkware' element={<DrinkWarePage />} />
      <Route path='kitchenware' element={<KitchenWarePage />} />
      <Route path='ecofriendly-bags' element={<BagsPage />} />
      <Route path='cart' element={<CartPage />} />
    </Routes>
  );
}

export default App;
