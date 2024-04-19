"use client"
import React from 'react'
import { useState, createContext, useContext } from 'react'

const StateContext = createContext();


//wrapper export
export const StateProvider = ({children}) => {
    // Handling cartData
const cartDataString = localStorage.getItem("cartData");
const cartData = cartDataString ? JSON.parse(cartDataString) : { items: [] };

// Handling cartLength
const cartLength = cartData.items.length ?? 0;

  const [cartCount,setCartCount] = useState(cartLength);
  const [showNav,setShowNav]= useState(true)
  const [showCart,setShowCart] = useState(true)
  const increaseCartCount = () => {
    setCartCount(prevCount => prevCount + 1);
    console.log("state count of cart increasing",cartCount)
  };

  const decreaseCartCount = () => {
    setCartCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    console.log("state count of cart decreasing",cartCount)
  };
  return (
    <StateContext.Provider value={{cartCount, increaseCartCount, decreaseCartCount,showNav,setShowNav, showCart, setShowCart}}>
        {children}
    </StateContext.Provider>
  )
}
//hook export
export const useStateContext = () => useContext(StateContext)
