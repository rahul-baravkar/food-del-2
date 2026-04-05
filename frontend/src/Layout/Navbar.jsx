import React, { useContext, useState } from 'react'
import { assets } from '../assets/admin_assets/assets'
import { Button } from '../components/ui/button'
import logo from "@/assets/frontend_assets/logo.png";
import { NavLink, Link } from 'react-router-dom';
import { StoreContext } from '@/context/StoreContext';

import { useNavigate } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
 
    const navigate = useNavigate();

    const [menu, setMenu] = useState("home")
    const { getTotalAmount, token, setToken } = useContext(StoreContext)

    const logout = () => {

        localStorage.removeItem("token")
        setToken("")
        useNavigate("/")
    }
    return (



        <div className="w-full fixed top-0 left-0 bg-white shadow z-[999]  ">
            <div className="max-w-6xl mx-auto h-20 grid grid-cols-[1fr_1fr_1fr] px-6 items-center ">

                {/* Logo */}
                <Link to="/"><img src={logo} alt="" className="h-38 w-38" /></Link>

                {/* Menu */}
                <ul className="text-black flex items-center justify-evenly">
                    <NavLink to="/"><li>Home</li></NavLink>
                    <a href='#menu-bar'><li>Menu</li></a>
                    <a href='#mobile-app'><li>Mobile-app</li></a>
                    <a href='#footer'><li>Contact-us</li></a>
                </ul>

                <div className='flex justify-end gap-4'>
                    <img className='w-10 h-10' src="/src/assets/Icons/search.png" alt="" />
                    <Link to="/cart"><img className='w-10 h-10  ' src="/src/assets/Icons/cart.png" alt="" /></Link>

                    {getTotalAmount() > 0 &&
                        <div className="  bg-red-600 w-2 h-2 -ml-7 rounded-full "></div>
                    }

                    {!token ? <Button onClick={() => setShowLogin(true)} className="w-20 ml-3" variant="outline">
                        Sign in
                    </Button>
                        : <div className='profile-handler relative group'>
                            {/* Profile Image */}
                            <img className='w-12 h-12 cursor-pointer' src={assets.profile_image} alt="" />

                            {/* Dropdown */}
                            <div className='
                        absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-lg p-2
                        opacity-0 invisible
                        group-hover:opacity-100 group-hover:visible
                        transition-all duration-200
                         '>
                                <ul className='space-y-2'>
                                    <li onClick={()=>navigate('/myorders')} className='flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer'>
                                        <img className='w-5' src={assets.bag_icon} alt="" />
                                        <p>Order</p>
                                    </li>

                                    <hr />

                                    <li className='flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer'>
                                        <img className='w-5' src={assets.logout_icon} alt="" />
                                        <p onClick={logout}>Logout</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    }


                </div>

            </div>
        </div>


    )
}

export default Navbar


