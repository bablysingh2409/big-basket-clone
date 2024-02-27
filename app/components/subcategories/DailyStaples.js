import Image from 'next/image'
import React from 'react'

const dailyStaples = [
    { name: 'Aata & Flour', imgSrc: '/assests/images/aata-flour.png' },
    { name: 'Rice & Rice Products', imgSrc: '/assests/images/rice-products.png' },
    { name: 'Dals & Pules', imgSrc: '/assests/images/dal-pulses.png' },
    { name: 'Cooking oils & Ghee', imgSrc: '/assests/images/ghee.png' },]
    // { name: 'Dry Fruits', imgSrc: '/assests/images/herbs.png' }]
function DailyStaples() {
    return (
        <div className='w-full overflow-x-auto whitespace-nowrap mt-4 hide-scrollbar'>
          <h1 className='text-[#1B3C73] font-bold text-2xl'>Your Daily Staples</h1>
          <div className='w-full flex overflow-x-scroll gap-2 items-center mt-2 hide-scrollbar '>
            {
              dailyStaples.map((frts,i) => {
                return (
                  <div key={i} className='w-[60%] h-[250px] p-2 flex flex-col justify-center items-center m-2 
                   shadow-xl gap-2 '>
                    <Image src={frts.imgSrc}
                      width={100}
                      height={100}
                      alt='fruits'
                      priority='true'
                      className='w-[100%] h-[50%] rounded-2xl'
                    />
                    
                    <h1 className='text-[#1B3C73] text-2xl p-4 font-semibold text-center'>{frts.name}</h1>
                    {/* <p className='text-black text-xl font-bold text-center'>MIN 27% OFF</p> */}
                  </div>
                )
              })
            }
    
          </div>
        </div>
      )
}

export default DailyStaples