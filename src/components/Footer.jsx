import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter  ,faDiscord , faInstagram , faSnapchat } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='flex items-center justify-between lg:mt-[10%] mt-[20%] py-8 md:px-16 px-8 border-t-[0.3px] border-[#babaff]' >
        <img className='h-10 md:inline hidden' src="public\images\illu-text.png" alt="" />
        <img className='h-16'  src="public\images\illu-logo.png" alt="" />
        <div className='flex gap-4'>
<a  className='md:text-3xl text-2xl hover:text-violet-600 duration-300' href="#"><FontAwesomeIcon icon={faInstagram} /></a>
<a  className='md:text-3xl text-2xl hover:text-violet-600 duration-300' href="#"><FontAwesomeIcon icon={faDiscord} /></a>
<a  className='md:text-3xl text-2xl hover:text-violet-600 duration-300' href="#"><FontAwesomeIcon icon={faTwitter} /> </a>
<a  className='md:text-3xl text-2xl hover:text-violet-600 duration-300' href="#"><FontAwesomeIcon icon={faSnapchat} /></a>


        </div>
    </footer>
  )
}

export default Footer