// import { assets } from '@/assets/frontend_assets/assets'
// import React from 'react'

// const Footer = () => {
//     return (
//         <div className='footer-container  bg-gray-600 py-9  ' id='footer'>

//             <div className='footer-content  flex  mt-2 py-8 text-white justify-between mx-auto w-[1080px] max-[400px]:grid-cols-2'>
//                 <div className='footer-left-side -mt-4 gap-4 ml-6 space-y-3'>
//                     <div>

//                     <img src={assets.logo} alt="" />
//                     <p className='mt-3'> 
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
//                         Libero laudantium dicta fugiat. 
//                          veniam doloribus alias dolorem, <br />
//                          suscipit earum aspernatur eveniet.
//                     </p>

//                     </div>
                  

//                     <div className='social-icon flex gap-4 mt-3'>
//                         <li className='list-none'>
//                             <img src={assets.facebook_icon} alt="" />
//                         </li>
//                         <li className='list-none'>
//                             <img src={assets.twitter_icon} alt="" />
                            
//                         </li>
//                         <li className='list-none'>
//                             <img src={assets.linkedin_icon} alt="" />
//                         </li>
//                     </div>


//                 </div>

//                 <div className='footer-center mr-5 -mt-5'>

//                     <h1 className='font-bold text-3xl '>COMPANY</h1>
//                     <ul className='mt-3 space-y-2 '>
//                         <li>Home</li>
//                         <li>About us</li>
//                         <li>Delivery</li>
//                         <li>Privary policy</li>
//                     </ul>

//                 </div>
                
//                 <div className='footer-right mr-8 -mt-4 '>

//                     <h1 className='font-bold text-3xl -mt-3'>GET IN TOUCH</h1>
//                     <ul className='mt-3 space-y-2'>
//                         <li>+91-123-456-7890</li>
//                         <li>contact@tomato.com</li>
//                     </ul>

//                 </div>
                 

//             </div>

//              <hr className="border-t-2 border-gray-400 w-full mt-2" />

//             <p className='text-center text-white mt-7'>copyright 2025 @ tomato.com - All Right Reserved</p>
               
          
//         </div>
//     )
// }

// export default Footer


import { assets } from '@/assets/frontend_assets/assets'
import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gray-600 py-10 text-white" id="footer">

            <div className="mx-auto w-[90%] max-w-[1180px]">

                <div className="
                    flex justify-between gap-10
                    flex-wrap
                    max-[768px]:flex-col max-[768px]:text-center">

                    {/* LEFT SIDE */}
                    <div className="space-y-4 max-[768px]:mx-auto">

                        <img
                            src={assets.logo}
                            alt="logo"
                            className="w-32 mx-auto max-[768px]:block"
                        />

                        <p className="leading-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                            Libero laudantium dicta fugiat.
                            veniam doloribus alias dolorem, <br />
                            suscipit earum aspernatur eveniet.
                        </p>

                        <div className="flex gap-5 justify-center max-[768px]:justify-center">
                            <img src={assets.facebook_icon} alt="" className="w-7 cursor-pointer" />
                            <img src={assets.twitter_icon} alt="" className="w-7 cursor-pointer" />
                            <img src={assets.linkedin_icon} alt="" className="w-7 cursor-pointer" />
                        </div>
                    </div>

                    {/* CENTER */}
                    <div className="space-y-3 max-[768px]:mx-auto">
                        <h1 className="font-bold text-2xl">COMPANY</h1>

                        <ul className="space-y-2 cursor-pointer">
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-3 max-[768px]:mx-auto">
                        <h1 className="font-bold text-2xl">GET IN TOUCH</h1>

                        <ul className="space-y-2">
                            <li>+91-123-456-7890</li>
                            <li>contact@tomato.com</li>
                        </ul>
                    </div>

                </div>

                <hr className="border-gray-400 mt-8" />

                <p className="text-center mt-6 text-sm">
                    Copyright 2025 © tomato.com — All Rights Reserved
                </p>

            </div>
        </div>
    )
}

export default Footer
