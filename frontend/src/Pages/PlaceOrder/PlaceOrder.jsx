import { StoreContext } from "@/context/StoreContext";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const PlaceOrder = () => {
  const { getTotalAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

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
      address: data,
      items: orderItems,
      amount: getTotalAmount() + 2,
    };

    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      console.log("Order Data:", response.data);
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      console.log(response.data.message);
      alert("Error");
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalAmount() === 0) {
      navigate("/cart");
    }
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <div className="mx-auto w-full max-w-[1080px] px-4 mt-4 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
      {/* LEFT FORM */}
      <form onSubmit={PlaceOrder} className="w-full space-y-3">
        <h1 className="font-bold text-black text-xl md:text-3xl mb-4">
          Delivery Information
        </h1>

        {/* NAME */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={data.firstName}
            className="py-2 px-3 w-full text-sm md:text-base rounded border border-gray-300"
            type="text"
            placeholder="First Name"
          />

          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={data.lastName}
            className="py-2 px-3 w-full text-sm md:text-base rounded border border-gray-300"
            type="text"
            placeholder="Last Name"
          />
        </div>

        {/* EMAIL */}
        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={data.email}
          className="py-2 px-3 w-full text-sm md:text-base rounded border border-gray-300"
          type="email"
          placeholder="Email"
        />

        {/* STREET */}
        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={data.street}
          className="py-2 px-3 w-full text-sm md:text-base rounded border border-gray-300"
          type="text"
          placeholder="Street"
        />

        {/* CITY + STATE */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="city"
            value={data.city}
            className="py-2 px-3 w-full text-sm md:text-base rounded border border-gray-300"
            type="text"
            placeholder="City"
          />

          <input
            required
            onChange={onChangeHandler}
            name="state"
            value={data.state}
            className="py-2 px-3 w-full text-sm md:text-base rounded border border-gray-300"
            type="text"
            placeholder="State"
          />
        </div>

        {/* ZIP */}
        <input
          required
          onChange={onChangeHandler}
          name="zipCode"
          value={data.zipCode}
          className="py-2 px-3 w-full text-sm md:text-base rounded border border-gray-300"
          type="number"
          placeholder="Zip Code"
        />

        {/* COUNTRY */}
        <input
          required
          onChange={onChangeHandler}
          name="country"
          value={data.country}
          className="py-2 px-3 w-full text-sm md:text-base rounded border border-gray-300"
          type="text"
          placeholder="Country"
        />

        {/* PHONE */}
        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={data.phone}
          className="py-2 px-3 w-full text-sm md:text-base rounded border border-gray-300"
          type="number"
          placeholder="Phone"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="mt-4 bg-red-400 text-white rounded py-2 w-full text-sm md:text-base"
        >
          PROCEED TO PAYMENT
        </button>
      </form>

      {/* RIGHT SECTION */}
      <div className="w-full">
        <div className="p-4 md:p-5 border rounded-lg shadow-sm bg-white md:sticky md:top-24">
          <h1 className="font-bold text-black text-lg md:text-xl">
            Cart Totals
          </h1>

          <div className="flex justify-between mt-3 text-sm md:text-base">
            <p>Subtotal</p>
            <p>₹{getTotalAmount()}</p>
          </div>

          <hr className="mt-1" />

          <div className="flex justify-between mt-3 text-sm md:text-base">
            <p>Delivery Fee</p>
            {getTotalAmount() > 0 ? <p>₹2</p> : <p>₹0</p>}
          </div>

          <hr className="mt-1" />

          <div className="flex justify-between mt-3 text-sm md:text-base">
            <b>Total</b>
            {getTotalAmount() > 0 ? <b>₹{getTotalAmount() + 2}</b> : <b>₹0</b>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
