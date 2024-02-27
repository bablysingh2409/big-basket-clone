import Image from 'next/image';
import { FaStar } from "react-icons/fa6";

const topSelling=[
    {name:'Tomato',imgSrc:'/assests/images/red-tomato.png',time:'22 mins', rating:4.5, price:'$5.79'},
    {name:'Garlic',imgSrc:'/assests/images/garlic-table.png', time:'25 mins', rating:4.2, price:'$8.89'},
    {name:'Broccoli',imgSrc:'/assests/images/broccoli.png', time:'30 mins', rating:4.1, price:'$6.89'},
    {name:'Potato',imgSrc:'/assests/images/white-potatoes.png', time:'25 mins', rating:3.8, price:'$4.22'},
    
]

function TopSellingProducts() {
  return (
    <div className='w-full overflow-x-auto whitespace-nowrap mt-4 hide-scrollbar '>
        <h1 className='text-[#1B3C73] font-bold text-2xl'>Top Selling</h1>
        <div className='w-full flex flex-wrap justify-between '>
            {
                topSelling.map((top,i)=>{
                    return(
                        <div key={i} className='w-[45%]  p-2 flex flex-col justify-center items-center m-2 
                        border-r-1 border-gray-400 shadow-lg'>
                            <Image src={top.imgSrc}
                             alt='vege img'
                              width={100}
                              height={100}
                              className='w-[100%] h-[50%] rounded-2xl  '
                            />
                            <div className=' flex flex-col items-center'>
                            <div className=''>
                                <h1 className='text-[#1B3C73] text-2xl font-semibold text-center' >{top.name}</h1>
                                <div className='flex p-2 '>
                                    <p className='text-lg text-gray-700 font-semibold pr-2'>{top.time}</p>
                                    <span className='text-yellow-400 text-lg'><FaStar/></span> 
                                    <span className='text-gray-700   text-lg font-bold'>{top.rating}</span>
                                </div>
                            </div>
                            <div>
                                <p className='text-[#1B3C73] font-bold text-3xl'>{top.price}<span>/kg</span></p>
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

export default TopSellingProducts