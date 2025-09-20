import React from 'react'
import { useState , useRef} from 'react';
import { Star } from 'lucide-react';
import { motion  , AnimatePresence} from 'framer-motion';
import Spline from '@splinetool/react-spline';







const Character = () => {
  // tTrack which avatar you selected
  const [selectedAvatar, setSelectedAvatar] = useState("VIKI");

  const Avatars = {
    VIKI: {
      name : "VIKI",
      power : 75,
      stable : 95,
      penetrate : 30,
      portable : 80,
      stars : 3,
    },
    EVA: {
      name : "EVA",
      power : 90,
      stable : 80,
      penetrate : 70,
      portable : 60,
      stars : 4,
    }
  }

  const currentAvatar = Avatars[selectedAvatar];
  return (
    <div className='relative w-full min-h-screen overflow-hidden mb-[10%]'>

<div className='relative z-10 pt-6 text-center'>
    <h1 className='text-5xl font-bold  tracking-wide' style={{textShadow: '0 0 10px rgba(255, 255, 255, 0.7)'}}>Fighters</h1>
</div>

<div className='relative  z-10 flex  md:flex-row flex-col items-center w-full h-full p-4'>
{/* LEFT SIDE */}
<div className='w-full md:w-2/4 flex flex-col md:ml-10'>
{/* Avatar info card */}
<div className='bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mt-6 relative md:bottom-[50px] 0px  border border-gray-800 shadow-[0,0,15px rgba(167, 139, 2501 , 0.5)]'>
<h1 className='md:text-3xl text-2xl font-semibold mb-3'>{currentAvatar.name}</h1>

{/* Avatar statistics */}
<div className='space-y-3 mb-16'>
  <div className='flex items-center'>
    <span className='w-24   md:text-[20px] text-[16px]  text-gray-400'>Power</span>
    <div className='flex-1 h-4 relative right-1 bg-gray-800 rounded-full  overflow-hidden'><div className='h-full bg-gradient-to-r from-violet-600 to-white' style={{width: `${currentAvatar.power}%`}}></div></div>
  </div>
  <div className='flex items-center'>
    <span className='w-24   md:text-[20px] text-[16px]   text-gray-400'>Stable</span>
    <div className='flex-1 h-4 relative right-1 bg-gray-800 rounded-full  overflow-hidden'><div className='h-full bg-gradient-to-r from-violet-600 to-white' style={{width: `${currentAvatar.stable}%`}}></div></div>
  </div>
  <div className='flex items-center'>
    <span className='w-24   md:text-[20px] text-[16px]   text-gray-400'>Penetrate</span>
    <div className='flex-1 h-4 relative right-1 bg-gray-800 rounded-full  overflow-hidden'><div className='h-full bg-gradient-to-r from-violet-600 to-white' style={{width: `${currentAvatar.penetrate}%`}}></div></div>
  </div>
  <div className='flex items-center'>
    <span className=' w-24   md:text-[20px] text-[16px]    text-gray-400'>Portable</span>
    <div className='flex-1 h-4 relative right-1 bg-gray-800 rounded-full  overflow-hidden'><div className='h-full bg-gradient-to-r from-violet-600 to-white' style={{width: `${currentAvatar.portable}%`}}></div></div>
  </div>
</div>
{/* Button */}
<div className='flex md:gap-4 gap-2 '>
  <button className='px-6 py-2 md:text-[18px] text-[14px] relative bottom-4 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70'>Proficient</button>
  <button className='px-6 py-2 md:text-[18px] text-[14px] relative bottom-4 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70'>Redemption</button>


</div>
</div>

<div className='grid grid-cols-2 gap-4 mt-4 relative md:bottom-[60px] -mb-3 '>
  <div className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300 ' onClick={() => setSelectedAvatar("VIKI")}>
<div className='text-lg mb-2'>VIKI</div>
<div className='w-20 h-20 bg-gray-800  rounded-md flex items-center justify-center mb-2'>
  <img src="public\images\VIKI.png" alt="" />
  </div>
  <div className='flex'>{[...Array(3)].map((_,i) =>(
    <Star key={i} className='w-4  h-4 fill-violet-400 text-violet-500'/>
  ))}</div>
{selectedAvatar === "VIKI" && (
  <div className='absolute inset-0 border-2 border-violet-500 rounded-lg pointer-events-none'>
      
    </div>
  )}
    </div>
    <div className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300 ' onClick={() => setSelectedAvatar("EVA")}>
<div className='text-lg mb-2'>EVA</div>
<div className='w-20 h-20 bg-gray-800  rounded-md flex items-center justify-center mb-2'>
  <img src="public\images\EVA.png" alt="" />
  </div>
  <div className='flex'>{[...Array(4)].map((_,i) =>(
    <Star key={i} className='w-4  h-4 fill-violet-400 text-violet-500'/>
  ))}</div>
{selectedAvatar === "EVA" && (
  <div className='absolute inset-0 border-2 border-violet-500 rounded-lg pointer-events-none'>
      
    </div>
  )}
    </div>
 
      </div>


</div>
{/* Right side */}
<div className='relative md:w-2/4 w-full  md:h-screen h-[500px]  md:mb-20  md:mr-4 mr-0 md:-mt-10 mt-20 flex items-center justify-center overflow-hidden '>
<AnimatePresence mode='wait'>
{selectedAvatar === "VIKI" ?(
  <motion.div
  key="VIKI"
  className='absolute inset-0'
  initial={{x: "100%"}}
  animate={{x: 0}}
  exit={{x: "-100%"}}
  transition={{duration: 0.5}}


  >
       <Spline scene="https://prod.spline.design/8LIrgvfGHX41RgkF/scene.splinecode" />


  </motion.div>
)  : (
  <motion.div
  key="EVA"
  className='absolute inset-0 w-full h-full'
  initial={{x: "100%"}}
  animate={{x: 0}}
  exit={{x: "-100%"}}
  transition={{duration: 0.5}}

  
  >
  <Spline scene="https://prod.spline.design/g8BDk7D0ITxt84uP/scene.splinecode" />

  </motion.div>
)}
</AnimatePresence>
</div>
</div>
</div>
  ) 
}

export default Character