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
                  <div className='w-full flex flex-row' onClick={()=>handleItemTap(item.id)} >
                    <div className='py-2 pr-2 w-20 h-20 rounded-md'>
                        <img className='h-full w-full object-cover rounded-md' src={item.pic} alt={item.name}/>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <p className='text-sm font-semibold'>{item.name}</p>
                        <p className='font-light text-xs mt-0.5'>{item.weight}</p>
                        <p className='text-sm mt-1 font-semibold'>{item.price}</p>
                    </div>
                    </div>
                    <div className=" ml-1 items-center flex justify-end w-[20%]">
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
                    <svg viewBox="0 0 24 24" className='object-cover' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.5 11L17 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 11H7.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 7.5H7.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 14.5H7.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 14.5H16M10.5 14.5H13.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 7.5H14M10.5 7.5H11.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M21 7V6.37006C21 5.17705 21 4.58055 20.842 4.09946C20.5425 3.18719 19.8468 2.47096 18.9606 2.16261C18.4933 2 17.9139 2 16.755 2H7.24502C6.08614 2 5.50671 2 5.03939 2.16261C4.15322 2.47096 3.45748 3.18719 3.15795 4.09946C3 4.58055 3 5.17705 3 6.37006V15M21 11V20.3742C21 21.2324 20.015 21.6878 19.3919 21.1176C19.0258 20.7826 18.4742 20.7826 18.1081 21.1176L17.625 21.5597C16.9834 22.1468 16.0166 22.1468 15.375 21.5597C14.7334 20.9726 13.7666 20.9726 13.125 21.5597C12.4834 22.1468 11.5166 22.1468 10.875 21.5597C10.2334 20.9726 9.26659 20.9726 8.625 21.5597C7.98341 22.1468 7.01659 22.1468 6.375 21.5597L5.8919 21.1176C5.52583 20.7826 4.97417 20.7826 4.6081 21.1176C3.985 21.6878 3 21.2324 3 20.3742V19" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                    </div>
                    <div className='flex flex-col text-xs ml-2 justify-center'>
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
                                <div className='w-[80%] mt-1 flex flex-row items-center' >
                                  <div className='w-4 h-4 rounded-md'>
                                    <svg viewBox="0 0 400 400" className='object-cover' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M252.644 56.915C295.342 38.4482 320.69 113.363 271.651 123.522C231.551 131.832 216.845 78.0154 247.144 58.0544" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M330.482 265.712C341.911 277.397 345.967 295.564 330.334 311.241C305.977 335.671 271.834 312.649 271.756 285.037" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M192.293 285.199C193.35 293.668 190.602 302.807 182.127 311.229C159.576 333.641 128.721 316.163 123.655 291.812" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M231 133C206.612 161.128 194.495 179.606 187 209" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M231.268 139C230.078 174.935 230.842 200.382 278 181.706" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M270.454 181.27C277.648 203.747 292.95 234.179 296.436 257.918" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M198.698 209.851C179.8 211.119 147.038 219.427 133.916 234.11C126.125 242.825 100.697 270.714 108.106 285.446C112.07 293.339 163.502 289.662 170.276 288.7C200.718 284.374 240.691 289.662 270.337 285.446C276.764 284.532 267.42 277.198 275.865 277.198C288.469 277.198 350.064 262.896 339.366 250.123C314.559 220.523 257.393 244.451 266.097 274.746" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M200.303 212.449C207.9 229.886 214.057 274.576 214.593 278.703" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M200.303 208.553C255.045 208.309 257.332 233.927 223.294 274.806" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M169.124 213.748C142.024 230.768 99.6067 221.459 67.7939 231.936" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M60 128.007C68.4342 143.576 60 224.334 63.5625 228.038" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M63.8965 128.233C105.69 123.275 132.857 122.22 136.014 128.233C139.17 134.247 139.17 171.658 130.567 218.945" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                  </div>
                                  <div className='flex flex-col text-xs ml-2 justify-center'>
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
                                    <svg viewBox="0 0 24 24" fill="none" className='object-cover' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5285 6C16.5098 5.9193 16.4904 5.83842 16.4701 5.75746C16.2061 4.70138 15.7904 3.55383 15.1125 2.65C14.4135 1.71802 13.3929 1 12 1C10.6071 1 9.58648 1.71802 8.88749 2.65C8.20962 3.55383 7.79387 4.70138 7.52985 5.75747C7.50961 5.83842 7.49016 5.9193 7.47145 6H5.8711C4.29171 6 2.98281 7.22455 2.87775 8.80044L2.14441 19.8004C2.02898 21.532 3.40238 23 5.13777 23H18.8622C20.5976 23 21.971 21.532 21.8556 19.8004L21.1222 8.80044C21.0172 7.22455 19.7083 6 18.1289 6H16.5285ZM8 11C8.57298 11 8.99806 10.5684 9.00001 9.99817C9.00016 9.97438 9.00044 9.9506 9.00084 9.92682C9.00172 9.87413 9.00351 9.79455 9.00718 9.69194C9.01451 9.48652 9.0293 9.18999 9.05905 8.83304C9.08015 8.57976 9.10858 8.29862 9.14674 8H14.8533C14.8914 8.29862 14.9198 8.57976 14.941 8.83305C14.9707 9.18999 14.9855 9.48652 14.9928 9.69194C14.9965 9.79455 14.9983 9.87413 14.9992 9.92682C14.9996 9.95134 14.9999 9.97587 15 10.0004C15 10.0004 15 11 16 11C17 11 17 9.99866 17 9.99866C16.9999 9.9636 16.9995 9.92854 16.9989 9.89349C16.9978 9.829 16.9957 9.7367 16.9915 9.62056C16.9833 9.38848 16.9668 9.06001 16.934 8.66695C16.917 8.46202 16.8953 8.23812 16.8679 8H18.1289C18.6554 8 19.0917 8.40818 19.1267 8.93348L19.86 19.9335C19.8985 20.5107 19.4407 21 18.8622 21H5.13777C4.55931 21 4.10151 20.5107 4.13998 19.9335L4.87332 8.93348C4.90834 8.40818 5.34464 8 5.8711 8H7.13208C7.10465 8.23812 7.08303 8.46202 7.06595 8.66696C7.0332 9.06001 7.01674 9.38848 7.00845 9.62056C7.0043 9.7367 7.00219 9.829 7.00112 9.89349C7.00054 9.92785 7.00011 9.96221 7 9.99658C6.99924 10.5672 7.42833 11 8 11ZM9.53352 6H14.4665C14.2353 5.15322 13.921 4.39466 13.5125 3.85C13.0865 3.28198 12.6071 3 12 3C11.3929 3 10.9135 3.28198 10.4875 3.85C10.079 4.39466 9.76472 5.15322 9.53352 6Z" fill="#0F0F0F"></path> </g></svg>
                                  </div>
                                  <div className='flex flex-col text-xs ml-2 justify-center'>
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
