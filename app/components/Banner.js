import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='mt-4 w-full flex flex-col gap-2'>
        <h1 className='text-[#1B3C73] font-bold text-2xl'>Promo</h1>
        <div className=' '>
            <Image src='/assests/images/banner.png'
               alt='banner img'
               width={100}
               height={100}
               className='object-contain w-[100%]'
            />
        </div>
    </div>
  )
}

export default Banner