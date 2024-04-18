"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

function page() {
  const router = useRouter();
  const responseData = [
    {  
      id:1,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/0074b9f6-c141-44b0-a00c-0278d5d315ca.jpg?ts=1711473366",
      name:"Potato - New Crop (Aloo)",
      price:"₹39",
      weight:"1 kg"
    },
    {  
      id:2,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/eee5bf7f-5f3b-4b46-9745-b4f6fc09bb83.jpg?ts=1711014898",
      name:"Cauliflower (Phool Gobhi)",
      price:"₹20",
      weight:"1 piece (400 g - 600 g)"
    },
    {  
      id:3,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/a1ba074a-c085-4dd1-b4a4-2f247d6f211d.jpg?ts=1711010249",
      name:"Onion - New Crop (Pyaz)",
      price:"₹35",
      weight:"1 kg"
    },
    {  
      id:4,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/9e3b39e4-8b08-4266-a386-520d63085ce4.jpg?ts=1711473132",
      name:"Lemon",
      price:"₹45",
      weight:"220 g - 250 g"
    }]   
    const Bill = [{
      id:1,
      TotalPrice : "₹969",
      DeliveryCharges : " ₹16",
      HandlingCharges : "₹4",
      GrandTotal: "₹989"
  }]
    const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem("cartData")) || { items: [] });

    const decrement = (itemId) => {
        const updatedCartData = { ...cartData };
        const itemIndex = updatedCartData.items.findIndex(item => item.id === itemId);
        
        if (itemIndex !== -1 && updatedCartData.items[itemIndex].quantity > 1) {
            updatedCartData.items[itemIndex].quantity--;
            setCartData(updatedCartData);
        }
    };

    const increment = (itemId) => {
        const updatedCartData = { ...cartData };
        const itemIndex = updatedCartData.items.findIndex(item => item.id === itemId);
        
        if (itemIndex !== -1) {
            updatedCartData.items[itemIndex].quantity++;
            setCartData(updatedCartData);
        }
    };

    const handleItemTap = (itemId) => {
      router.push(`/item/${itemId}`)
    }
  

    return (
      <div className='w-full bg-slate-200 mb-20 pb-10 '>
        <div className='bg-white mt-3 mx-3 py-3 px-3 rounded-md overflow-hidden'>
            {cartData.items.map((item) => (
                <div className='mb-2 flex flex-row w-full' key={item.id}>
                  <div className='w-full flex flex-row bg-red-700' onClick={()=>handleItemTap(item.id)} >
                    <div className='py-2 pr-2 w-20 h-20 rounded-md'>
                        <img className='h-full w-full object-cover rounded-md' src={item.pic} alt={item.name}/>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <p className='text-sm font-semibold'>{item.name}</p>
                        <p className='font-light text-xs mt-0.5'>{item.weight}</p>
                        <p className='text-sm mt-1 font-semibold'>{item.price}</p>
                    </div>
                    </div>
                    <div className="bg-blue-800 ml-1 items-center flex justify-end w-[20%]">
                      <div className='bg-green-700 rounded-lg w-full flex items-center justify-center px-2'>
                      <button className="pr-2 py-0.5 text-white rounded-l bg-green-700" onClick={() => decrement(item.id)}>-</button>
                        <span className="px-1 py-0.5 border-solid border-1 border-[#A18168] font-medium text-white">
                            {cartData.items.find(product => item.id === product.id)?.quantity || 0}
                        </span>
                        <button className="pl-2 py-0.5 text-white rounded-r bg-green-700" onClick={() => increment(item.id)}>+</button>
                      </div>
                    </div>
                </div>
            ))}
        </div>
        <div className='bg-white mt-3 mx-3 py-3 px-3 rounded-lg bg-slate-100'>
            {Bill.map((item) => (
              <div key={item.id}>
                <div className='flex flex-row w-full' >
                  <div className='w-[80%] mt-1 flex flex-row items-center' >
                    <div className='w-4 h-4 rounded-md'>
                        <img className='h-full w-full object-cover rounded-md' src={item.pic} alt={item.name}/>
                    </div>
                    <div className='flex flex-col text-xs ml-1 justify-center'>
                        <p className='text-sm font-semibold'>Item total</p>
                    </div>
                    </div>
                    <div className="items-center text-sm text-semibold flex justify-end w-[20%]">
                      <div className='rounded-lg flex items-center justify-center px-2'>
                        <p>{item.TotalPrice}</p>
                      </div>
                    </div>
                </div>
                <div className='flex flex-row w-full' >
                                <div className='w-[80%] mt-1  flex flex-row items-center' >
                                  <div className='w-4 h-4 rounded-md'>
                                      <img className='h-full w-full object-cover rounded-md' src={item.pic} alt={item.name}/>
                                  </div>
                                  <div className='flex flex-col text-xs ml-1  justify-center'>
                                      <p className='text-sm font-semibold'>Delivery charges</p>
                                  </div>
                                  </div>
                                  <div className="items-center flex justify-end w-[20%]">
                                    <div className='rounded-lg flex text-sm text-semibold items-center justify-center px-2'>
                                      <p>{item.DeliveryCharges}</p>
                                    </div>
                                  </div>
                </div>
                <div className='flex flex-row w-full' >
                                <div className='w-[80%] flex mt-1 flex-row items-center' >
                                  <div className='w-4 h-4 rounded-md'>
                                      <img className='h-full w-full object-cover rounded-md' src={item.pic} alt={item.name}/>
                                  </div>
                                  <div className='flex flex-col text-xs ml-1 justify-center'>
                                      <p className='text-sm font-semibold'>Handling charges</p>
                                  </div>
                                  </div>
                                  <div className="items-center flex justify-end w-[20%]">
                                    <div className='rounded-lg flex text-sm text-semibold items-center justify-center px-2'>
                                      <p>{item.HandlingCharges}</p>
                                    </div>
                                  </div>
                </div>
                <div className='flex flex-row w-full' >
                                <div className='w-[80%] flex flex-row items-center' >
                                  <div className='flex flex-col mt-2 text-md pl-5 justify-center'>
                                      <p className='text-md font-bold'>Grand Total</p>
                                  </div>
                                  </div>
                                  <div className="items-center flex justify-end w-[20%]">
                                    <div className='text-md font-medium flex items-center px-2'>
                                      <p>{item.GrandTotal}</p>
                                    </div>
                                  </div>
                </div>
                </div>
            ))}
        </div>
      </div>
    );
}

export default page;

// "use client"
// import React from 'react'

// function page() {
//   const cartData = JSON.parse(localStorage.getItem("cartData"))
//   console.log(cartData)
//     return (
//     <div>
//       {
//         cartData && cartData.items.length > 0 ? (<div className='bg-red-600 m-2 w-full h-full'>
//           {
//             cartData.items.map((item) => (
//               <div className='bg-blue-600 m-2' key={item.id}>
//                 <div>
//                   <img src={cartData.pic}/>
//                 </div>
//               </div>
//             ))
//           }
//         </div>) : null
//       }
//     </div>
//   )
// }

// export default page
