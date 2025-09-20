import React from 'react'

const Hero = () => {
  return (
    <main className='relative w-full h-screen overflow-hidden  flex justify-center mb-[10%]'>
        <video src="public\videos\hero.mp4"  autoPlay muted loop playsInline className='w-full h-screen object-cover absolute top-0 first-letter:left-0 -z-10' ></video>
<div className='absolute bottom-[15%] flex flex-col items-center gap-5 '>
    <img src="/images/illu-text.png" className='md:w-[30rem] w-[20rem] ' alt="" />
<h1 className='md:text-2xl text-1xl font-bold'>Explore, Capture , Conquer</h1>
<div className='md:w-[75%] w-[60%] h-[0.1px] bg-[#baba]'>
</div>
<button className='h-10 px-16    bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 
        transition-all duration-300'>Play Now</button>
        {/* <div className='flex items-center gap-5 text-3xl font-extrabold text-gray-200'>
            <img src="public\images\illu-logo.png" className='md:h-16 h-12 ' alt="" />Zero
        </div> */}
        <p className='max-w-[80%] text-center  text-[#babaff]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iusto.
        </p>
</div>

    </main>
  )
}

export default Hero




