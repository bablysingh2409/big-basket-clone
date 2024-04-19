"use client"
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useStateContext } from '@/context/StateContext.js'
import { Base_url,Item_url,uri } from '@/constants/Links.js'
import Link from 'next/link'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

const Category = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cartCount, increaseCartCount, decreaseCartCount, showNav ,setShowNav, showCart, setShowCart } = useStateContext();

  //useffect for cart
  useEffect(()=>{
    setShowNav(true)
    setShowCart(true)
   },[])

  //useEffect for fetch categories
   useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.mulltiply.com/offers/active-offers-stats-new/1l3wevj76lta69ma2?type=topCategories"
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        setData(responseData?.data);
        console.log(responseData?.data)
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
  };
  })

  return (
    <div className='pt-2 px-1 '>
        <div className='mb-3 font-medium text-md'>Shop By Category</div>
        <div className='grid grid-cols-4 md:grid-cols-6 '>
          {
            data.map((item,index) => (
              <Link href={`/category/${item.items[0]?.categoriesTree[0]}`} key={index}>
              <div className='flex flex-col p-1 rounded-sm'>
              <div className='justify-center items-center bg-[#E5FCF9] rounded-md h-[70%]'>
                 <img className='h-full w-full object-cover p-2' src={`${Base_url}${item?.items[0]?.itemImages[0]}`}/>
              </div>
              <p className='text-center text-xs md:text-lg md:my-2'>{item.category}</p>
            </div>
            </Link>
            ))
          }
        </div>
    </div>
  )
}

export default Category


// import React from 'react'

// const Category = () => {
//   return (
//     <div className='pt-2 bg-violet-600'>
//         <div className='bg-pink-600 mt-2 mb-5 font-medium' >Shop By Category</div>
//         <div className='bg-red-700 grid grid-cols-4'>
//        <div className='bg-green-500 flex flex-col p-1 m-1'>
//          <div className='bg-blue-600'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-f73c666f-5a67-4ffd-abde-e6693e6cf6ab.png?tr=w-54px,q=80,h-54px'/>
//          </div>
//          <p className='bg-yellow-800 text-center text-xs md:text-md'>Fruits & Vegetables</p>
//        </div>
//        <div className='bg-green-500 flex flex-col p-1 m-1'>
//          <div className='bg-blue-600'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-f4d19e97-51a8-4df7-92af-c683ef817b50.png?tr=w-54px,q=80,h-54px 1x, https://www.bigbasket.com/media/assets/asset-media-f4d19e97-51a8-4df7-92af-c683ef817b50.png?tr=w-54px,q=80,h-54px 2x'/>
//          </div>
//          <p className='bg-yellow-800 text-center text-xs md:text-md'>Bakery, Cakes & Dairy</p>
//        </div>  
//        <div className='bg-green-500 flex flex-col p-1 m-1'>
//          <div className='bg-blue-600'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-f4d19e97-51a8-4df7-92af-c683ef817b50.png?tr=w-54px,q=80,h-54px 1x, https://www.bigbasket.com/media/assets/asset-media-f4d19e97-51a8-4df7-92af-c683ef817b50.png?tr=w-54px,q=80,h-54px 2x'/>
//          </div>
//          <p className='bg-yellow-800 text-center text-xs md:text-md'>Bakery, Cakes & Dairy</p>
//        </div>     
//        <div className='bg-green-500 flex flex-col p-1 m-1'>
//          <div className='bg-blue-600'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-16afceb8-19fd-4ffe-8e62-50f5b2ad3d73.png?tr=w-54px,q=80,h-54px'/>
//          </div>
//          <p className='bg-yellow-800 text-center text-xs md:text-md'>Breakfast, Sauce & Spread</p>
//        </div>       
//        <div className='bg-green-500 flex flex-col p-1 m-1'>
//          <div className='bg-blue-600'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-f19e5ba0-cfea-483c-9817-0ba91dd4038b.png?tr=w-54px,q=80,h-54px 1x, https://www.bigbasket.com/media/assets/asset-media-f19e5ba0-cfea-483c-9817-0ba91dd4038b.png?tr=w-54px,q=80,h-54px 2x'/>
//          </div>
//          <p className='bg-yellow-800 text-center text-xs md:text-md'>Eggs, Meat & Fish</p>
//        </div>       
//        <div className='bg-green-500 flex flex-col p-1 m-1'>
//          <div className='bg-blue-600'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-4f76cf1e-f81f-436e-bc11-c159c819585a.png?tr=w-54px,q=80,h-54px 1x, https://www.bigbasket.com/media/assets/asset-media-4f76cf1e-f81f-436e-bc11-c159c819585a.png?tr=w-54px,q=80,h-54px 2x'/>
//          </div>
//          <p className='bg-yellow-800 text-center text-xs'>Masalas, Oils & Dry Fruits</p>
//        </div>       
//        <div className='bg-green-500 flex flex-col p-1 m-1'>
//          <div className='bg-blue-600'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-94823cad-191d-4637-9696-bbaf3c61c878.png?tr=w-54px,q=80,h-54px 1x, https://www.bigbasket.com/media/assets/asset-media-94823cad-191d-4637-9696-bbaf3c61c878.png?tr=w-54px,q=80,h-54px 2x'/>
//          </div>
//          <p className='bg-yellow-800 text-center text-xs'>Atta, Rice & Dals</p>
//        </div>       
//        <div className='bg-green-500 flex flex-col p-1 m-1'>
//          <div className='bg-blue-600'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-16afceb8-19fd-4ffe-8e62-50f5b2ad3d73.png?tr=w-54px,q=80,h-54px'/>
//          </div>
//          <p className='bg-yellow-800 text-center text-xs'>Breakfast, Sauce & Spread</p>
//        </div>       
//        <div className='bg-green-500 flex flex-col p-1 m-1'>
//          <div className='bg-blue-600'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-16afceb8-19fd-4ffe-8e62-50f5b2ad3d73.png?tr=w-54px,q=80,h-54px'/>
//          </div>
//          <p className='bg-yellow-800 text-center text-xs'>Breakfast, Sauce & Spread</p>
//        </div>       
//        <div className='bg-green-500 flex flex-col p-1 m-1'>
//          <div className='bg-blue-600'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-16afceb8-19fd-4ffe-8e62-50f5b2ad3d73.png?tr=w-54px,q=80,h-54px'/>
//          </div>
//          <p className='bg-yellow-800 text-center text-xs'>Breakfast, Sauce & Spread</p>
//        </div>       
//        <div className='bg-green-500 flex flex-col p-1 m-1'>
//          <div className='bg-blue-600'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-16afceb8-19fd-4ffe-8e62-50f5b2ad3d73.png?tr=w-54px,q=80,h-54px'/>
//          </div>
//          <p className='bg-yellow-800 text-center text-xs'>Breakfast, Sauce & Spread</p>
//        </div>      
//        <div className='bg-green-500 flex flex-col p-1 m-1'>
//          <div className='bg-blue-600'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-16afceb8-19fd-4ffe-8e62-50f5b2ad3d73.png?tr=w-54px,q=80,h-54px'/>
//          </div>
//          <p className='bg-yellow-800 text-center text-xs'>Breakfast, Sauce & Spread</p>
//        </div>      
//        <div className='bg-green-500 flex flex-col p-1 m-1'>
//          <div className='bg-blue-600'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-16afceb8-19fd-4ffe-8e62-50f5b2ad3d73.png?tr=w-54px,q=80,h-54px'/>
//          </div>
//          <p className='bg-yellow-800 text-center text-xs'>Breakfast, Sauce & Spread</p>
//        </div>       
//        <div className='bg-green-500 flex flex-col p-1 m-1'>
//          <div className='bg-blue-600'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-16afceb8-19fd-4ffe-8e62-50f5b2ad3d73.png?tr=w-54px,q=80,h-54px'/>
//          </div>
//          <p className='bg-yellow-800 text-center text-xs'>Breakfast, Sauce & Spread</p>
//        </div>       
//        <div className='bg-green-500 flex flex-col p-1 m-1'>
//          <div className='bg-blue-600'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-16afceb8-19fd-4ffe-8e62-50f5b2ad3d73.png?tr=w-54px,q=80,h-54px'/>
//          </div>
//          <p className='bg-yellow-800 text-center text-xs'>Breakfast, Sauce & Spread</p>
//        </div>       
//        <div className='bg-green-500 flex flex-col p-1 m-1'>
//          <div className='bg-blue-600'>
//             <img className='h-full w-full object-cover p-2' src='https://www.bigbasket.com/media/assets/asset-media-16afceb8-19fd-4ffe-8e62-50f5b2ad3d73.png?tr=w-54px,q=80,h-54px'/>
//          </div>
//          <p className='bg-yellow-800 text-center text-xs'>Breakfast, Sauce & Spread</p>
//        </div>
//         </div>
//     </div>
//   )
// }

// export default Category
