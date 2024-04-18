"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useStateContext } from '../StateContext'
const Cart = () => {
    const [cartData , setCartData] = useState()
    const { cartCount, increaseCartCount, decreaseCartCount, showNavAndCart,setShowNavAndCart } = useStateContext()
    const router = useRouter();
    useEffect(()=>{
        const localData = JSON.parse(localStorage.getItem("cartData"));
        setCartData(localData);
    },[])
    const handleCart = () => {
        router.push('/maincart');
    }

  return (
        (cartCount > 0 && showNavAndCart) ? (
        <div className="fixed bottom-0 mb-3 m-2 w-full h-16 rounded-md py-1 px-2 md:hidden">
            <div className='p-2 bg-green-700 w-full h-full rounded-xl flex flex-row justify-between' onClick={()=>handleCart()}>
                <div className='flex flex-row'>
                    <div className='bg-green-500 rounded-md p-3 h-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='h-full w-full object-cover'><path fill="#ffffff" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                    </div>
                    <div className='flex flex-col mx-2 text-sm font-medium text-white'>
                        <div><p>{cartCount} items</p></div>
                        <div><p>$437</p></div>
                    </div>
                </div>
                <div className='mr-2 pr-2 text-white flex justify-center items-center'>
                    <p>View Cart</p>
                </div>
            </div>
        </div>
        ) : null
  )
}

export default Cart
