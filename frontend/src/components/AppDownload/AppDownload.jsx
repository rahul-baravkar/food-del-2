import { assets } from '@/assets/frontend_assets/assets'
import React from 'react'

const AppDownload = () => {
  return (
<div className="app-container my-20 mx-auto text-center" id='mobile-app'>
    <p className='text-5xl font-semibold space-x-4'>
        For Better Experience Download <br /> Tomato App
    </p>

    <div className="app-download-platform flex justify-center gap-4 mt-6">
        <img className='w-40' src={assets.play_store} alt="" />
        <img className='w-40 ' src={assets.app_store} alt="" />
    </div>
</div>

  )
}

export default AppDownload