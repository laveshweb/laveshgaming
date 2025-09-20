import React from 'react'
import 'boxicons/css/boxicons.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { Logo} from '../../public'

const Header = () => {
    const ToggleMenu = () => {
        const Menu = document.getElementById('Menu')
       if(Menu.classList.contains('hidden')){   
        Menu.classList.remove('hidden')
       }else{
        Menu.classList.add('hidden')
       }
    }

    return (
        <header className='py-1 md:px-[80px] px-[40px] flex justify-between items-center fixed top-0 z-50 w-full
 border-b-[0.3px] border-[#babaff]'>
            <div className='flex lg:gap-14 gap-4 items-center'>
                <img className='md:w-16 w-12' src="/images/logo.png" alt="Logo-img" />
                <div className='hidden md:flex gap-5 items-center'>
                    <button className='h-8 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 
        transition-all duration-300'>Play Now</button>
                    <button className='h-8 px-6 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg font-medium text-nowrap hover:opacity-70 
        transition-all duration-300'>Play Now</button>
                </div>

            <div>
                </div>
                </div>
                <nav  className='hidden  md:pl-[50px] md:flex lg:gap-8 gap-4'>
                    <a className='relative py-1  text-lg hover:text-purple-300 transition-colors duration-300 after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-purple-300 after:left-0 after:bottom-0 
         after:transition-all hover:after:w-full text-nowrap' href="#"><i  class='bx bx-user-circle px-1.5'></i>Avatar</a>
                    <a className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-purple-300 after:left-0 after:bottom-0 
         after:transition-all hover:after:w-full text-nowrap' href="#"><i class='bx bx-diamond px-1.5' ></i>Arena</a>
                    <a className='relative py-1  text-lg hover:text-purple-300 transition-colors duration-300 after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-purple-300 after:left-0 after:bottom-0 
         after:transition-all hover:after:w-full text-nowrap' href="#"><i class='bx bx-chevrons-up px-1.5'></i>Beyond</a>
                    <a className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-purple-300 after:left-0 after:bottom-0 
         after:transition-all hover:after:w-full text-nowrap' href="#"><i class='bx bx-shopping-bag px-1.5'></i>Shop</a>
                </nav>


            <button onClick={ToggleMenu} className='tex-7xl p-2 md:hidden '>
            <FontAwesomeIcon icon={faBars} style={{ fontSize: '25px' }} />
            </button>
            <div id='Menu' className=' hidden  fixed top-[120px] right-0  left-0  p-7 md:hidden'>
                <nav className='flex flex-col gap-4 items-center'>
                <a className='relative py-2  text-lg hover:text-purple-300 transition-colors duration-300 after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-purple-300 after:left-0 after:bottom-0 
         after:transition-all hover:after:w-full text-nowrap' href="#"><i  className='bx bx-user-circle px-1.5'></i>Avatar</a>
                    <a className='relative py-2 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-purple-300 after:left-0 after:bottom-0 
         after:transition-all hover:after:w-full text-nowrap' href="#"><i class='bx bx-diamond px-1.5' ></i>Arena</a>
                    <a className='relative py-2  text-lg hover:text-purple-300 transition-colors duration-300 after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-purple-300 after:left-0 after:bottom-0 
         after:transition-all hover:after:w-full text-nowrap' href="#"><i class='bx bx-chevrons-up px-1.5'></i>Beyond</a>
                    <a className='relative py-2 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-purple-300 after:left-0 after:bottom-0 
         after:transition-all hover:after:w-full text-nowrap' href="#"><i class='bx bx-shopping-bag px-1.5'></i>Shop</a>
          <div className='flex flex-col   gap-3 w-[200px] mt-4 '>
                <button className='bg-purple-700  py-2 rounded  '>
                    Play Now
                </button>
                <button className='bg-gray-700  py-2 rounded '>
                    NFT Store
                </button>
                </div>
                </nav>
               
               
            </div>
        </header>
    )
}

export default Header