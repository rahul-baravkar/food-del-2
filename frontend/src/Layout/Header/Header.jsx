import React from 'react'
import { Button } from '@/components/ui/button'
import headerImg from "@/assets/frontend_assets/header_img.png"

const Header = () => {
    return (
        <div className="my-28 w-full" >
            <div className="relative m-[30px]">

                <img className="h-[34vw] ml-24 " src={headerImg} alt="Header" />

                <div className="absolute top-1/2 left-32 -translate-y-1/2 text-white space-y-4">
                    <h1 className="font-bold text-6xl leading-tight">
                        Order your favourite <br /> food here
                    </h1>

                    <p className="leading-relaxed">
                        Choose from a diverse menu featuring a delectAble array of dishes crafted with the finest <br />
                        ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your <br />
                        dining experience, one delicious meal at a time.
                    </p>

                    <Button className="bg-white text-black mt-8" variant="outline">
                        View Menu
                    </Button>
                </div>

            </div>
        </div>

//     <div className="my-20 w-full">
//   <div className="relative mx-4">

//     {/* HEADER IMAGE */}
//     <img
//       className="w-full max-w-[600px] mx-auto h-[50vw] sm:h-[40vw] md:h-[34vw] object-cover"
//       src={headerImg}
//       alt="Header"
//     />

//     {/* TEXT SECTION */}
//     <div
//       className="absolute inset-0 flex flex-col justify-center text-white 
//                  px-4 sm:px-10 md:px-0 md:left-32 md:-translate-y-1/2
//                  top-1/2 transform -translate-y-1/2 space-y-4"
//     >
//       <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl leading-tight">
//         Order your favourite <br /> food here
//       </h1>

//       <p className="text-sm sm:text-base leading-relaxed max-w-[400px] md:max-w-none">
//         Choose from a diverse menu featuring a delectable array of dishes crafted with
//         the finest ingredients and culinary expertise. Our mission is to satisfy your
//         cravings and elevate your dining experience, one delicious meal at a time.
//       </p>

//       <Button className="bg-white text-black mt-4 sm:mt-6 w-fit px-5 py-2" variant="outline">
//         View Menu
//       </Button>
//     </div>

//   </div>
// </div>


  
    )
}

export default Header
