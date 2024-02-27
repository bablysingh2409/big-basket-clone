import Image from 'next/image'
import React from 'react'


const snacks = [
    { name: 'Chai Time Snac', imgSrc: '/assests/images/chai-time-snac.png' },
    { name: 'Morning Starters', imgSrc: '/assests/images/morning-Starter.png' },
    { name: 'Pasta,Sauce & more', imgSrc: '/assests/images/pasta.png' },
    { name: 'Sweet Craving', imgSrc: '/assests/images/sweet-craving.png' }]
function SnacksStore() {
    return (
        <div className='w-full overflow-x-auto whitespace-nowrap mt-4 hide-scrollbar'>
            <h1 className='text-[#1B3C73] font-bold text-2xl'>Snacks Store</h1>
            <div className='w-full flex overflow-x-scroll gap-2 items-center mt-2 hide-scrollbar '>
                {
                    snacks.map((frts, i) => {
                        return (
                            <div key={i} className='w-[60%] h-[250px] p-4 flex flex-col justify-center items-center m-2 
                   shadow-xl gap-2 '>
                                <Image src={frts.imgSrc}
                                    width={100}
                                    height={100}
                                    alt='fruits'
                                    priority='true'
                                    className='w-[100%] h-[50%] rounded-2xl'
                                />

                                <h1 className='text-[#1B3C73] text-2xl p-4 font-semibold text-center'>{frts.name}</h1>
                                <p className='text-black text-xl font-bold text-center'>MIN 27% OFF</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default SnacksStore