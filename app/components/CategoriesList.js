import Link from 'next/link';
import React from 'react'

const categories=['Vegetable','Fruit','Meat','Beauty & Hygiene','Beverages','Bakery','Foodgrains']

function CategoriesList() {
    
  return (
    <div className='w-full overflow-x-auto whitespace-nowrap mt-4 hide-scrollbar'>
        <h1 className='text-[#1B3C73] font-bold text-2xl'>Categories</h1>
         <div className='flex overflow-x-scroll gap-2 items-center mt-2 hide-scrollbar'>
            {
                categories.map((category,i)=>{
                  return (
                    <Link href=`/${category}`>
                    <div className='border-2 bg-white  border-[#1B3C73] rounded-3xl shadow-xl ' key={i} >
                    <h1 className='text-[#1B3C73] font-satoshi font-bold
                    p-3 text-xl'>{category}</h1>
                    
                    </div>
                    </Link>
                  )
                })
            }
         </div>
    </div>
  )
}

export default CategoriesList;

// 40679E