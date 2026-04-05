import { assets } from '../../assets/assets'
import React from 'react'
import './Sidebar.css'
import { NavLink , Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
      
        <div className="sidebar-option hover:bg-red-100 transition-all duration-300 hover:border-red-300">
          <img src={assets.add_icon} alt="" />
          <NavLink to="/add"><p>Add Items</p></NavLink>
        </div>
         <div className="sidebar-option hover:bg-red-100 transition-all duration-400  hover:border-red-300">
          <img src={assets.order_icon} alt="" />
          <NavLink to="/list"><p>List Items</p></NavLink>
        </div>
         <div className="sidebar-option hover:bg-red-100 transition-all duration-400  hover:border-red-300">
          <img src={assets.order_icon} alt="" />
          <NavLink to="/order"><p>Orders Items</p></NavLink>
        </div>
        
       
      </div>
      

        
    </div>
  )
}

export default Sidebar