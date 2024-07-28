import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/component/Header';
import ProductList from '../src/component/ProductList';
import Cart from '../src/component/Card';
import Checkout from '../src/component/CheckOut';
import AppComponent from './component/AppReactJs';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route element={<AppComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
