import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App.jsx'
import Header from './website/Header';
import Banner from './website/Banner_Section';
import FetchData from './website/FetchDataComponent';
import Offer_Product from './website/Offer_Product';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Offer_Product />
    <FetchData />
  </React.StrictMode>
);
