
import { StoreContext } from '@/context/StoreContext'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const PlaceOrder = () => {

  const { getTotalAmount, token, food_list, cartItems, url } = useContext(StoreContext)

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: ""
  })

  const PlaceOrder = async (event) => {
    event.preventDefault();

    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {

        let itemInfo = { ...item };
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address:data,
      items:orderItems,amount:getTotalAmount() + 2
      ,
    }
    
    
    
    let response = await axios.post(url+"/api/order/place" , orderData , {headers:{token}})
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url)

    }

    else{
      alert("Error")
    }

  }

  const navigate = useNavigate()
    useEffect(()=>{

      if(!token){
        navigate("/cart")

      }
      else if(getTotalAmount() === 0){
        navigate("/cart")

      }
    })



  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  }

 

  return (
    <div className="container mx-auto w-full max-w-[1080px] px-4 mt-32 grid grid-cols-1 md:grid-cols-2 gap-10 pb-36">

      {/* LEFT FORM */}
      <form onSubmit={PlaceOrder} className="left w-full">
        <h1 className="font-bold text-black text-2xl md:text-3xl mb-6">Delivery Information</h1>

        {/* NAME FIELDS */}
        <div className="input-fields flex flex-col md:flex-row gap-2">
          <input
            onChange={onChangeHandler}
            name="firstName"
            value={data.firstName}
            className="py-2 px-4 w-full rounded-sm border border-gray-400"
            type="text"
            placeholder="First Name"
          />

          <input
            onChange={onChangeHandler}
            name="lastName"
            value={data.lastName}
            className="py-2 px-4 w-full rounded-sm border border-gray-400"
            type="text"
            placeholder="Last Name"
          />
        </div>

        {/* EMAIL */}
        <input
          onChange={onChangeHandler}
          name="email"
          value={data.email}
          className="py-2 px-4 w-full my-2 rounded-sm border border-gray-400"
          type="email"
          placeholder="Email"
        />

        {/* STREET */}
        <input
          onChange={onChangeHandler}
          name="street"
          value={data.street}
          className="py-2 px-4 w-full my-2 rounded-sm border border-gray-400"
          type="text"
          placeholder="Street"
        />

        {/* CITY & STATE */}
        <div className="input-fields flex flex-col md:flex-row gap-2">
          <input
            onChange={onChangeHandler}
            name="city"
            value={data.city}
            className="py-2 px-4 w-full rounded-sm border border-gray-400"
            type="text"
            placeholder="City"
          />

          <input
            onChange={onChangeHandler}
            name="state"
            value={data.state}
            className="py-2 px-4 w-full rounded-sm border border-gray-400"
            type="text"
            placeholder="State"
          />
        </div>

        {/* ZIP */}
        <input
          onChange={onChangeHandler}
          name="zipCode"
          value={data.zipCode}
          className="py-2 px-4 w-full my-2 rounded-sm border border-gray-400"
          type="text"
          placeholder="Zip Code"
        />

        {/* COUNTRY */}
        <input
          onChange={onChangeHandler}
          name="country"
          value={data.country}
          className="py-2 px-4 w-full my-2 rounded-sm border border-gray-400"
          type="text"
          placeholder="Country"
        />

        {/* PHONE */}
        <input
          onChange={onChangeHandler}
          name="phone"
          value={data.phone}
          className="py-2 px-4 w-full my-2 rounded-sm border border-gray-400"
          type="text"
          placeholder="Phone"
        />

        {/* BUTTON MUST BE INSIDE FORM */}
        <button
          type="submit"
          className="mt-5 bg-red-400 text-white rounded-sm py-2 px-4 w-full"
        >
          PROCEED TO PAYMENT
        </button>
      </form>

      {/* RIGHT CART TOTAL */}
      <div className="right w-full md:ml-10">
        <div className="cart-total p-5 border rounded-lg shadow-sm bg-white">
          <h1 className="font-bold text-black text-xl">Cart Totals</h1>

          <div className="cart-total-details flex justify-between mt-3">
            <p>Subtotal</p>
            <p>₹{getTotalAmount()}</p>
          </div>

          <hr className="mt-1" />

          <div className="cart-total-details flex justify-between mt-3">
            <p>Delivery Fee</p>
            {getTotalAmount() > 0 ? <p>₹2</p> : <p>₹0</p>}
          </div>

          <hr className="mt-1" />

          <div className="cart-total-details flex justify-between mt-3">
            <b>Total</b>
            {getTotalAmount() > 0 ? <b>₹{getTotalAmount() + 2}</b> : <b>₹0</b>}
          </div>

        </div>
      </div>

    </div>
  )
}

export default PlaceOrder




