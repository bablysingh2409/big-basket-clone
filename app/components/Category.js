"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useStateContext } from '../StateContext'

const Category = () => {
    const router = useRouter();
    const { cartCount, increaseCartCount, decreaseCartCount, showNavAndCart,setShowNavAndCart } = useStateContext()
    setShowNavAndCart(true)
    const handleCategory = () => {
        router.push('/fruits');
    }
    const categories  = [{
      id:1,
      pic:"https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702618300089-5",
      name:"Vegetables & Fruits"
    },{
      id:2,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/14_1678949221877.png",
      name:"Dairy & Breakfast"
    },{
      id:3,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/1237_1670927167688.png",
      name:"Munchies"
    },
    {
      id:4,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/332_1680269002502.png",
      name:"Cold Drinks & Juices"
    },
    {
      id:5,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/15_1676610279582.png",
      name:"Instant & Frozen Food"
    },
    {
      id:6,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/12_1670926444151.png",
      name:"Tea, Coffee & Health Drinks"
    },
    {
      id:7,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/9_1693202755712.png",
      name:"Sweet Tooth"
    },
    {
      id:8,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/16_1670926686695.png",
      name:"Atta, Rice & Dal"
    },
    {
      id:9,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/1557_1670927467171.png",
      name:"Dry Fruits, Masala & Oil"
    },
    {
      id:10,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/972_1678176421554.png",
      name:"Sauces & Spreads"
    },
    {
      id:11,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/4_1670925897047.png",
      name:"Chicken, Meat & Fish"
    },
    {
      id:12,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/229_1697713631135.png",
      name:"Paan Corner"
    },
    {
      id:13,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/175_1670926891460.png",
      name:"Organic & Premium"
    },
    {
      id:14,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/7_1688712826553.png",
      name:"Baby Care"
    },
    {
      id:15,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/287_1684822344371.png",
      name:"Pharma & Wellness"
    },
    {
      id:16,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/18_1692167327246.png",
      name:"Cleaning Essentials"
    },
    {
      id:17,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/1379_1670927201924.png",
      name:"Home & Office"
    },
    {
      id:18,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/163_1698986628342.png",
      name:"Personal Care"
    },
    {
      id:19,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/5_1686741293107.png",
      name:"Pet Care"
    },
    {
      id:20,
      pic:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/888_1688712847171.png",
      name:"Bakery & Biscuits"
    },
  ]
    
  return (
    <div className='pt-2 px-1 '>
        <div className='mb-3 font-medium text-md'>Shop By Category</div>
        <div className='grid grid-cols-4 md:grid-cols-6'>
          {
            categories.map((category) => (
              <div className='flex flex-col p-1 rounded-sm' key={category.id} onClick={()=>handleCategory()}>
              <div className='justify-center items-center bg-[#E5FCF9] rounded-md'>
                 <img className='h-full w-full object-cover p-2' src={category.pic}/>
              </div>
              <p className='text-center text-xs md:text-lg md:my-2'>{category.name}</p>
            </div>
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
