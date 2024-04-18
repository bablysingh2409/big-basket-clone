"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useStateContext } from '@/app/StateContext';

function page({addToCart}) {
  const {cartCount, increaseCartCount, decreaseCartCount } = useStateContext()
  const [activeCategory,setActiveCategory] = useState(false)
  const [selectedCategoryId,setSelectedCategoryId] = useState(null)
  const [selectedItemId,setSelectedItemId] = useState(null)
  const [itemId,setItemId] = useState(null)
  const [quantity,setQuantity] = useState(null)
  const cartData = JSON.parse(localStorage.getItem("cartData"))
  const router = useRouter();
  const subCategories = [
    {
     id:1,
     pic:"https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702463308432-3",
     name:"Fresh Vegetables"
    },
    {
      id:2,
      pic:"https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702734004998-8",
      name:"Fresh Fruits",
    },
    {
      id:3,
      pic:"https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1712577388325-3",
      name:"Mangoes & Melons",
    },
  ]
  const items = [
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
    },    {  
      id:5,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/340d9756-933e-4a9d-9a2b-2f2a1db8f3d6.jpg?ts=1710487040",
      name:"Button Mushroom",
      price:"₹46",
      weight:"180 g - 250 g"
    },    {  
      id:6,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/27055af4-f9ca-49f5-a84b-cf407583be43.jpg?ts=1711019907",
      name:"Green Chilli (Hari Mirch)",
      price:"₹15",
      weight:"120g"
    }]
  const handlesubCategory = (id) => {
    setSelectedCategoryId(id);
  }
  const handletemAddButton = (id) => {
    setItemId(id)
    const cartData = JSON.parse(localStorage.getItem("cartData"))
    const itemToAdd = items?.find(item => item.id === id)
            const newitem = {
                "id":id,
                "quantity": 1,
                "pic" : itemToAdd.pic,
                "name" : itemToAdd.name,
                "weight" : itemToAdd.weight,
                "price" : itemToAdd.price
            }
    cartData.items.push(newitem)
    increaseCartCount()
    localStorage.setItem("cartData", JSON.stringify(cartData))
  }
  const handleItemTap = (itemId) => {
    router.push(`/item/${itemId}`)
  }

  const decrement = (passid) => {
    let updatedCartData = JSON.parse(localStorage.getItem("cartData")) || {};
    const quan = updatedCartData?.items?.find((item)=>item.id === passid).quantity;
      updatedCartData.items = updatedCartData.items.map((item) => {
        if (item.id === passid && item.quantity > 1) {
          item.quantity--;
          setQuantity(quan-1);
          console.log("decresing the count button")
          setSelectedItemId(passid)
        }
        else if(item.id === passid && item.quantity === 1){
          console.log("i gonna remove the count button")
          setQuantity(0)
          decreaseCartCount()
          return null;
        }
        return item;
      }).filter((item) => item !== null); ;
      localStorage.setItem("cartData", JSON.stringify(updatedCartData)); 
  };
  const increment = (passid) => {
    let updatedCartData = JSON.parse(localStorage.getItem("cartData")) || {};
    const quan = updatedCartData?.items?.find((item)=>item.id === passid).quantity;
      updatedCartData.items = updatedCartData.items.map((item) => {
        if (item.id === passid) {
          item.quantity++;
          setQuantity(quan+1);
          setSelectedItemId(passid);
        }
        return item;
      });
  
      // Update the localStorage
      localStorage.setItem("cartData", JSON.stringify(updatedCartData));
  };
  
  const storageData = localStorage.getItem("cartData")
  if(!storageData){
    const cartData = {"items":[]}
    localStorage.setItem("cartData",JSON.stringify(cartData));
  }
  
  return (
    <div className='w-full'>
      <div className='text-sm font-medium justify-start mt-3 mb-4 mx-2'>
        <p>Vegetables and Fruits</p>
      </div>
      <div className='flex flex-row'>
        <div className='w-1/5 flex flex-col'>
            {
                subCategories.map((subcategory)=>(
                    <div className='flex flex-col mx-1 mb-1 rounded-sm' key={subcategory.id} onClick={() => handlesubCategory(subcategory.id)}>
                    <div className={`${selectedCategoryId === subcategory.id  ? 'justify-center items-center h-14 w-14 rounded-md bg-green-300' : 'justify-center h-14 w-14 items-center rounded-md bg-green-100 overflow-hidden'}`}>
                       <img className={`${selectedCategoryId === subcategory.id ? 'w-full object-cover p-2' : 'w-full object-cover p-2  object-top'}` } src={subcategory.pic}/>
                    </div>
                    <p className={`${selectedCategoryId === subcategory.id ? 'text-center text-xs font-medium mt-1 md:text-lg md:my-2' : 'text-center text-xs mt-1 md:text-lg md:my-2'}`}>{subcategory.name}</p>
                  </div>
                ))
            }
        </div>
        <div className='w-4/5 grid grid-cols-2 bg-slate-200'>
        {
                items.map((item)=>(
                    <div className='bg-white px-1 ml-1 mb-1 rounded-md' key={item.id}>
                    <div className='h-2/4' onClick={()=>handleItemTap(item.id)}>
                        <img className='rounded-md w-full h-full object-cover' src={item.pic}/>
                    </div>
                    <div className='flex flex-col justify-between h-2/4'>
                    <div className='' onClick={()=>handleItemTap(item.id)}>
                        <p className='text-xs font-medium mt-1'>{item.name}</p>
                        <p className='text-xs mt-1'>{item.weight}</p>
                    </div>
                    <div className='justify-between flex flex-row items-center m-1 text-xs'>
                        <p>{item.price}</p>
                        <div className='border-solid border-green flex justify-center items-center border-2 w-12 text-center h-7 rounded-md'>
                       { 
                            (cartData && cartData.items.some(product => product.id === item.id))? (
                                <div class="flex items-center">
                                    <button class="px-1 py-0.5 text-white rounded-l bg-green-700" onClick={()=>decrement(item.id)}>-</button>
                                    {(quantity !== null) &&  (quantity !== 0) && (item.id === selectedItemId)? (
                                       <span id="quantity" class="px-1 py-0.5 bg-gray-100 border-solid border-1 border-[#A18168] font-medium text-[#A18168]">
                                         {quantity}
                                       </span>
                                       ) : (
                                        <span id="quantity" class="px-1 py-0.5 bg-gray-100 border-solid border-1 border-[#A18168] font-medium text-[#A18168]">
                                        {cartData.items.find(product => item.id === product.id).quantity}
                                         </span>
                                      )}
                                    <button class="px-1 py-0.5 text-white rounded-r bg-green-700" onClick={()=>increment(item.id)}>+</button>
                                </div>
                            ):(
                                <button className='' onClick={()=>handletemAddButton(item.id)}>ADD</button>
                            )
                        }
                        </div>
                    </div>
                    </div>
                </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default page


// import React from 'react'

// function page() {
//   return (
//     <div className='w-full'>
//       <div className='bg-red-700 text-xs font-medium justify-start mt-3 mb-4'>
//         <p>Vegetables and Fruits</p>
//       </div>
//       <div className='flex flex-row bg-blue-800'>
//         <div className='bg-green-800 w-1/5 flex flex-col'>
//         <div className='flex flex-col p-1 m-1 rounded-sm'>
//          <div className='justify-center items-center bg-[#E5FCF9] rounded-md'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-f73c666f-5a67-4ffd-abde-e6693e6cf6ab.png?tr=w-54px,q=80,h-54px'/>
//          </div>
//          <p className='text-center text-xs mt-1 md:text-lg md:my-2'>Fruits & Vegetables</p>
//        </div>
//        <div className='flex flex-col p-1 m-1 rounded-sm'>
//          <div className='justify-center items-center bg-[#E5FCF9] rounded-md'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-f73c666f-5a67-4ffd-abde-e6693e6cf6ab.png?tr=w-54px,q=80,h-54px'/>
//          </div>
//          <p className='text-center text-xs mt-1 md:text-lg md:my-2'>Fruits & Vegetables</p>
//        </div>
//        <div className='flex flex-col p-1 m-1 rounded-sm'>
//          <div className='justify-center items-center bg-[#E5FCF9] rounded-md'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-f73c666f-5a67-4ffd-abde-e6693e6cf6ab.png?tr=w-54px,q=80,h-54px'/>
//          </div>
//          <p className='text-center text-xs mt-1 md:text-lg md:my-2'>Fruits & Vegetables</p>
//        </div>
//         </div>
//         <div className='bg-yellow-800 w-4/5 grid grid-cols-2'>
//             <div className='bg-blue-700 h-full p-2 m-1 rounded-md'>
//                 <div className='bg-yellow-700 h-3/5'>
//                     <img className='rounded-md w-full h-full object-cover' src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/a1ba074a-c085-4dd1-b4a4-2f247d6f211d.jpg?ts=1711010249'/>
//                 </div>
//                 <div className='bg-white flex flex-col justify-between h-2/5'>
//                 <div>
//                     <p className='text-sm font-medium mt-1'>Onion 1 kg (Pyaz)</p>
//                     <p className='mt-1'>1 kg</p>
//                 </div>
//                 <div className='justify-between flex flex-row  items-center m-1'>
//                     <p>33</p>
//                     <button className='border-solid border-green border-2 px-2 py-1 rounded-md'>ADD</button>
//                 </div>
//                 </div>
//             </div>
//             <div className='bg-blue-700 h-full p-2 m-1 rounded-md'>
//                 <div className='bg-yellow-700 h-3/5'>
//                     <img className='rounded-md w-full h-full object-cover' src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/a1ba074a-c085-4dd1-b4a4-2f247d6f211d.jpg?ts=1711010249'/>
//                 </div>
//                 <div className='bg-white flex flex-col justify-between h-2/5'>
//                 <div>
//                     <p className='text-sm font-medium mt-1'>Onion 1 kg (Pyaz)</p>
//                     <p className='mt-1'>1 kg</p>
//                 </div>
//                 <div className='justify-between flex flex-row  items-center m-1'>
//                     <p>33</p>
//                     <button className='border-solid border-green border-2 px-2 py-1 rounded-md'>ADD</button>
//                 </div>
//                 </div>
//             </div>
//             <div className='bg-blue-700 h-full p-2 m-1 rounded-md'>
//                 <div className='bg-yellow-700 h-3/5'>
//                     <img className='rounded-md w-full h-full object-cover' src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/a1ba074a-c085-4dd1-b4a4-2f247d6f211d.jpg?ts=1711010249'/>
//                 </div>
//                 <div className='bg-white flex flex-col justify-between h-2/5'>
//                 <div>
//                     <p className='text-sm font-medium mt-1'>Onion 1 kg (Pyaz)</p>
//                     <p className='mt-1'>1 kg</p>
//                 </div>
//                 <div className='justify-between flex flex-row  items-center m-1'>
//                     <p>33</p>
//                     <button className='border-solid border-green border-2 px-2 py-1 rounded-md'>ADD</button>
//                 </div>
//                 </div>
//             </div>
//             <div className='bg-blue-700 h-full p-2 m-1 rounded-md'>
//                 <div className='bg-yellow-700 h-3/5'>
//                     <img className='rounded-md w-full h-full object-cover' src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/a1ba074a-c085-4dd1-b4a4-2f247d6f211d.jpg?ts=1711010249'/>
//                 </div>
//                 <div className='bg-white flex flex-col justify-between h-2/5'>
//                 <div>
//                     <p className='text-sm font-medium mt-1'>Onion 1 kg (Pyaz)</p>
//                     <p className='mt-1'>1 kg</p>
//                 </div>
//                 <div className='justify-between flex flex-row  items-center m-1'>
//                     <p>33</p>
//                     <button className='border-solid border-green border-2 px-2 py-1 rounded-md'>ADD</button>
//                 </div>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default page
