
import { useSearchParams } from 'react-router-dom'
import React, { useContext, useEffect } from 'react'
import { StoreContext } from '@/context/StoreContext';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Verify = () => {



    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")

    const {url} = useContext(StoreContext)
    const navigate = useNavigate();


    const verifyPayment = async () => {
        const response = await axios.post(url+"/api/order/verify", { success, orderId })
        console.log(response.data.success)
        if (response.data.success) {
            
            navigate("/myorders")
            

        } else {
            navigate("/")
        }

    }

    useEffect(() => {
        verifyPayment();

    }, [])
    return (
        <div className='h-[500px] w-full flex items-center justify-center text-4xl text-black '>
            <div className='w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin'>

            </div>
        </div>
    )
}

export default Verify
