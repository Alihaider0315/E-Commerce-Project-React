import React from 'react'
import {Routes , Route} from "react-router-dom";
import Home from '../Home';
import About from '../About';
import Products from '../Products';
import Contact from '../Contact';
import Singleproduct from '../Singleproduct';
import Cart from '../Cart'
import Error from '../Error';

const Router = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/singleproduct/:id" element={<Singleproduct/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="*" element={<Error/>}/>

    </Routes>
  )
}

export default Router
