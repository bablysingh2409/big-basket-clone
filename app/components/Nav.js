import Image from 'next/image'
import Link from 'next/link'
// import logo from '@public/assest/images/logo.png'
import { FaShoppingCart } from "react-icons/fa";


function Nav() {
  return (
    <div className="flex-between w-full
    pt-3">
      <div className='w-full'>
        <div className='w-full flex justify-between p-4 items-center'>
          <div className=''>
            <Link href='/' className="flex gap-2 flex-center">

              {/* <Image src='/assests/images/web-logo.png'
                alt="Promptia logo"
                width={50}
                height={50}
                className="object-contain rounded-full "
              /> */}
              <p className="text-[#1B3C73] font-extrabold text-4xl cursor-pointer">GRO<span className='text-orange-500'>HOUSE </span></p>
            </Link>
          </div>
          <div className='text-[#1B3C73] text-4xl cursor-pointer shadow-sm'>
          <FaShoppingCart />
          </div>
        </div>
        <div className='w-full mt-3'>
          
          <input
                    type="text"
                    placeholder="Search here..."
                    // value=''
                    // onChange={handleSearchChange}
                    required
                    className="search_input peer "
                />
         
        </div>
      </div>
    </div>
  )
}

export default Nav