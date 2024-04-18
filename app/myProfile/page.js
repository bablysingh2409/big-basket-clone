"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useStateContext } from '../StateContext'

function page() {
    const router = useRouter()
    const { cartCount, increaseCartCount, decreaseCartCount, showNavAndCart,setShowNavAndCart } = useStateContext()
    setShowNavAndCart(false)
    const handleBack = () => {
    router.push("/")
    }
   return (
    <div className='w-full flex flex-col h-screen'>
    <div className='h-2/5 w-full relative'>
      <img className='object-cover w-full h-full' src='./assests/images/scroll2.png' alt='Your Image'/>
    <div className='absolute top-4 left-4 bg-white p-3 rounded-3xl' onClick={()=>handleBack()}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='h-6 w-6 text-black'><path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" data-name="4-Arrow Left"/></svg>
    </div>
    </div>

      <div className='h-3/5 w-full rounded-t-md'>
        <div className='h-1/4 w-full mt-4 flex justify-center items-center'>
            <div className='h-full w-25 h-25'>
                <img className='h-full w-full object-cover' src='./assests/images/logo.png'/>
            </div>
        </div>
        <div className='h-1/4 w-full flex flex-col justify-center items-center py-2'>
            <p className=' text-lg font-bold p-1'>Your Favourite Local Store</p>
            <p className=' font-semibold text-md p-1'>Log in or Sign up</p>
        </div>
        <div className='h-2/4 w-full flex flex-col'>
            <div className=' h-1/3 w-full py-2 px-10'>            
                <input
                type="tel"
                className="appearance-none border w-full h-full rounded-md py-2 px-3 text-black leading-tight bg-slate-100 shadow-inner w-full"
                placeholder="Enter phone number"
                // value={value}
                // onChange={onChange}
            />
            </div>
            <div className='h-1/3 w-full py-2 px-10'>            
            <button
                type="tel"
                className=" h-full text-white bg-green-700 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full"
            >Continue</button>
            </div>
            <div className='h-1/3 w-full  py-2 px-7 text-xs'>            
            </div>
            </div>
        </div>
    </div>
  )
}

export default page
