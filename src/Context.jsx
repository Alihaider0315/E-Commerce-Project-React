// import {createContext, useContext, useEffect, useState} from "react";
// import axios from "axios";
// const MyContext = createContext();
// const API = "https://fakestoreapi.com/products"
// export const useMyContext = () => {
//     return useContext(MyContext);
// };

import { createContext, useState } from "react";
import axios from "axios";

// export const MyContextProvider = ({children}) => {

//     const getProducts = async (url) => {
//         const res = await axios.get(url);
//         const product = await res.data;
//     }

//     useEffect(()=>{
//         getProducts(API);
//     },[])

//     const [cart, setCart] = useState([]);

//     const allObj = {
//         cart,
//         setCart
//     }

//     return <MyContext.Provider value={allObj}>{children}</MyContext.Provider>;

    

// };

const CartItemsContext = createContext({})

const CartItemsProvider = ({children})=>{

    let [itemsQuantity , setItemsQuantity] = useState(0)

    const incrementQuantity = () => {
        setItemsQuantity(++itemsQuantity)
    }
    const [myData , setMyData] = useState([]);
    const fetchproduct = () =>{
      axios.get("https://api.pujakaitem.com/api/products")
      .then((res) => setMyData(res.data));
    }

let objToSend = {
    itemsQuantity,
    incrementQuantity,
    fetchproduct,
    myData,
}

    return <CartItemsContext.Provider value={objToSend}>{children}</CartItemsContext.Provider>
}

export {CartItemsContext , CartItemsProvider}