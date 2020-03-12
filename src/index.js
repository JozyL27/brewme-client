import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { BeerProvider } from './context/beerContext'

ReactDOM.render(
<BrowserRouter forceRefresh={true}>
    <BeerProvider>
        <App />
    </BeerProvider>
</BrowserRouter>
, document.getElementById('root'));