
import { assets } from "../../assets/assets";
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between mx-auto w-[1300px] py-2'>
      <img className='logo w-36 h-16' src={assets.logo} alt="" />
      <img className='profile w-12 h-12 mt-2' src={assets.profile_image} alt="" />

    </div>
  )
} 

export default Navbar