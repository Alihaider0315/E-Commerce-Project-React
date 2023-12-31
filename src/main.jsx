import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { CartItemsProvider} from './Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartItemsProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CartItemsProvider>
  
)
