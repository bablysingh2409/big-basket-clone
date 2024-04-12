'use client';

import Image from "next/image";

const fruitsAndVege = [
  { name: 'Fresh Fruits', imgSrc: '/assests/images/fruits.png' },
  { name: 'Fresh Vegetables', imgSrc: '/assests/images/basket-full-vegetables.png' },
  { name: 'Cuts & Exotics', imgSrc: '/assests/images/cuts-and-exotics.png' },
  { name: 'Herbs & Seasonings', imgSrc: '/assests/images/herbs.png' },
  { name: 'Fresh Fruits', imgSrc: '/assests/images/fruits.png' },
  { name: 'Fresh Vegetables', imgSrc: '/assests/images/basket-full-vegetables.png' },
  { name: 'Cuts & Exotics', imgSrc: '/assests/images/cuts-and-exotics.png' },
  { name: 'Herbs & Seasonings', imgSrc: '/assests/images/herbs.png' },
  

]


function Category({ params }) {
  // {params.categories} 

  return (
    <div className="bg-slate-500 w-full mt-4">
      <div className="w-full p-1 flex flex-col justify-center gap-3 bg-yellow-400">
        {
          fruitsAndVege.map((vege,i) => {
            return (
              <div key={i} className="flex m-2 bg-blue-400 gap-5 p-2">
                <div>
                  <Image
                  src={vege.imgSrc}
                   width={100}
                   height={100}
                   alt='fruits'
                   priority='true'
                   className='w-[100%] h-[100%] rounded-2xl'
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-xl font-bold text-[#1B3C73]">{vege.name}</h1>
                  <p className="text-gray-500">500g</p>
                  <h1 className="text-lg text-[#1B3C73] font-bold">$12.5</h1>
                  <div className="w-[150px] bg-[#1B3C73] flex justify-between border-2 border-[#1B3C73]">
                    <button className="bg-white w-[30%] p-2 text-lg font-bold">-</button>
                    <span className="p-2 font-bold text-lg text-white">3</span>
                    <button className="bg-white  w-[30%] p-2 text-lg font-bold">+</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Category