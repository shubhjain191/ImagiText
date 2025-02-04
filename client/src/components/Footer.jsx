import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between px-4 py-6'>
      <div className='flex items-center'>
        <img src={assets.logo} alt="" width={50} className='mr-4' />
        <span className='text-xl font-bold text-cyan-600 max-sm:hidden'>ImagiText</span>
      </div>
      <p className='flex-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
        Copyright @ImagiText | All right reserved.
      </p>
      <div className='flex gap-2.5'>
        <a href="#" className='hover:bg-gray-200 p-2 rounded-full transition-colors'>
          <img src={assets.facebook_icon} alt="Facebook" width={35} />
        </a>
        <a href="#" className='hover:bg-gray-200 p-2 rounded-full transition-colors'>
          <img src={assets.twitter_icon} alt="Twitter" width={35} />
        </a>
        <a href="#" className='hover:bg-gray-200 p-2 rounded-full transition-colors'>
          <img src={assets.instagram_icon} alt="Instagram" width={35} />
        </a>
      </div>
    </div>
  )
}

export default Footer