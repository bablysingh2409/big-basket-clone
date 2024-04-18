"use client"
import React, { useState } from 'react'
//importing hook
import { useStateContext } from '@/app/StateContext';
function Page({params}) {
  const { cartCount, increaseCartCount, decreaseCartCount } = useStateContext()
    const id  = params.itemId;
    // console.log(id)
    // console.log({params})
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
        },
        {  
          id:5,
          pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/340d9756-933e-4a9d-9a2b-2f2a1db8f3d6.jpg?ts=1710487040",
          name:"Button Mushroom",
          price:"₹46",
          weight:"180 g - 250 g"
        },
        {  
          id:6,
          pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/27055af4-f9ca-49f5-a84b-cf407583be43.jpg?ts=1711019907",
          name:"Green Chilli (Hari Mirch)",
          price:"₹15",
          weight:"120g"
        }
    ];
    const cartData = JSON.parse(localStorage.getItem("cartData"))
    const findItemInLocal = cartData.items.length > 0 ? cartData?.items?.find(item => item.id ===  parseInt(id)) : null
    // console.log("findItemInLocal")
    // console.log(findItemInLocal)
    const [selectedItemId,setSelectedItemId] = useState(null)
    const [quantity,setQuantity] = useState(findItemInLocal? findItemInLocal?.quantity : 0)
    const foundItem = items.find(item => item.id === parseInt(id));
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
        localStorage.setItem("cartData", JSON.stringify(updatedCartData));
    };
    const handletemAddButton = (id) => {
      setSelectedItemId(id);
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
      localStorage.setItem("cartData", JSON.stringify(cartData))
      increaseCartCount()
      // console.log("items in cart",cartCount)
      setQuantity(1)
    }

    return (
        <div>
            {
                foundItem ? (
                    <div className='h-screen w-full px-3'>
                        <div className='h-[50%] w-full bg-blue-700 mt-2 '>
                          <img className='h-full w-full object-cover' src={foundItem.pic}/>
                        </div>
                        <div className='mt-3'><p className='text-sm font-medium'>{foundItem.name}</p></div>
                        <div className='mt-2'><p className='text-xs font-light'>{foundItem.weight}</p></div>
                        <div className='mt-1 flex flex-row justify-between text-center items-center justify-center'>
                         <p className='text-sm font-medium'>MRP {foundItem.price}</p>
                         <div className='bg-green-700 w-25 h-10 text-white font-semibold text-sm p-2 rounded-md cursor-pointer'>
                          {
                            quantity > 0 ? (
                              <div class="flex flex-row items-center">
                              <button class="pr-2 py-1 text-white rounded-l bg-green-700 font-semibold" onClick={()=>decrement(findItemInLocal.id)}>-</button>
                              {(quantity !== null) &&  (quantity !== 0) && (findItemInLocal.id === selectedItemId)? (
                                 <span id="quantity" class=" mx-1 px-1 py-0.5 h-full border-solid border-1 border-[#A18168] text-white font-bold">
                                   {quantity}
                                 </span>
                                 ) : (
                                  <span id="quantity" class="mx-1 px-1 py-0.5 border-solid border-1 border-[#A18168]  text-white font-bold">
                                  {cartData.items.find(product => findItemInLocal.id === product.id).quantity}
                                   </span>
                                )}
                              <button class="pl-1 py-1 text-white rounded-r bg-green-700 font-semibold" onClick={()=>increment(findItemInLocal.id)}>+</button>
                          </div>
                            ):(<button onClick={()=>handletemAddButton(foundItem.id)}>Add To Cart</button>)
                          }
                         </div>
                        </div>
                        <div className='mt-3'>
                          <p className='text-sm font-medium'>Description</p>
                          <ul className='text-xs'>
                            <li className='my-1'>Versatile Staple: Enhance Indian cuisine with Onion's unmistakable sharpness and fragrance, elevating every dish.</li>
                            <li className='my-1'>Natural Antiseptic: Harness Onion's antimicrobial and antibiotic properties to combat infections and promote healing.</li>
                            <li className='my-1'>Natural Antiseptic: Harness Onion's antimicrobial and antibiotic properties to combat infections and promote healing.</li>                          
                          </ul>
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
}

export default Page;
