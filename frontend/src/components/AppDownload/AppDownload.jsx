import { assets } from '@/assets/frontend_assets/assets'
import React from 'react'

const AppDownload = () => {
  return (
    <div className="app-container py-10 md:py-16 px-4 text-center" id="mobile-app">
      
      {/* Heading */}
      <p className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
        For Better Experience Download Tomato App
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
        <img className="w-36 sm:w-40 cursor-pointer" src={assets.play_store} alt="" />
        <img className="w-36 sm:w-40 cursor-pointer" src={assets.app_store} alt="" />
      </div>

    </div>
  )
}

export default AppDownload