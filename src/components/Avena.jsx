import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Avena = () => {
  return (
    <div className='md:min-h-[90%] p-0 lg:p-8 md:-mt-60 mt-0 '>
      <div className='relative z-10 pt-6 text-center `'>
        <h1 className='text-5xl font-bold tracking-widest mb-20' style={{textShadow: '0 0 10px rgba(225, 255, 255, 0.7), 0 0 20px rgba(167, 139, 250 , 0.5)'}}>Arena</h1>
      </div>

      <div className='lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8'>
        <div className='md:col-span-1 space-y-4 md:space-y-6'>
<div className='relative overflow-hidden rounded-3xl border border-white aspect-[4.4/4] transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
<div className='absolute  h-full w-full '>
<img src="public\images\bento-card1.png" alt="card-1" />
<button className='absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl  font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap '>
<FontAwesomeIcon icon={faStore} /> NFT Store</button>
</div>
</div>
<div className='relative overflow-hidden rounded-3xl border border-white aspect-[4.5/4] transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
<video src="public\videos\bento-card2.mp4" autoPlay muted loop playsInline className='w-full h-full object-cover'></video>
</div>
        </div>
    <div className='md:col-span-2 space-y-4 md:space-y-6'>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6'>

        <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
       <video src="public\videos\bento-card3.mp4" autoPlay muted loop playsInline className='w-full h-full object-cover'></video>
       <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-bold text-2xl  hover:text-yellow-400 transition-all duration-300 text-nowrap  '>Scoriox</h1>
        </div>
        
        <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
       <video src="public\videos\bento-card4.mp4" autoPlay muted loop playsInline className='w-full h-full object-cover'></video>
       <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-bold text-2xl  hover:text-yellow-400 transition-all duration-300 text-nowrap '>Foxix</h1>
        </div>
         <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105 cursor-pointer md:inline hidden'>
         <video src="public\videos\bento-card5.mp4" autoPlay muted loop playsInline className='w-full h-full object-cover'></video>
         <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-bold text-2xl  hover:text-yellow-400 transition-all duration-300 text-nowrap '>Elepantix</h1>
          </div>

      </div>
      <div className='relative overflow-hidden rounded-3xl border border-white aspect-[16/9] md:col-span-2 transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer'>
      <img src="public\images\bento-card5.png" alt="card-6" />
      <button className='absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap  '><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='relative right-2.5' />Buy Now</button>

      </div>
    </div>





      </div>
    </div>
  )
}

export default Avena