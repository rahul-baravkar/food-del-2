import { StoreContext } from "@/context/StoreContext";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalAmount, url } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="mx-auto w-full max-w-[1080px] px-4 pb-20 mt-8 md:mt-24">
      {/* 🔥 SCROLLABLE TABLE */}
      <div className="overflow-x-auto">
        {/* Header */}
        <div className="grid min-w-[520px] text-black font-semibold text-xs md:text-sm grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-2">
          <p>Item</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr className="my-2" />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index} className="border-b py-2">
                <div className="grid min-w-[520px] items-center grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-2 text-xs md:text-sm">
                  {/* Image + Name */}
                  <div className="flex items-center gap-2">
                    <img
                      className="w-10 h-10 md:w-12 md:h-12 object-cover rounded"
                      src={item.image}
                      alt=""
                    />
                    <p className="truncate">{item.name}</p>
                  </div>

                  {/* Price */}
                  <p>₹{item.price}</p>

                  {/* Qty */}
                  <p>{cartItems[item._id]}</p>

                  {/* Total */}
                  <p className="font-medium">
                    ₹{item.price * cartItems[item._id]}
                  </p>

                  {/* Remove */}
                  <button
                    className="text-red-500 font-bold text-sm"
                    onClick={() => removeFromCart(item._id)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Cart Total */}
        <div>
          <h1 className="font-bold text-black text-lg md:text-xl">
            Cart Totals
          </h1>

          <div className="flex justify-between mt-3">
            <p>Subtotal</p>
            <p>₹{getTotalAmount()}</p>
          </div>

          <hr className="mt-1" />

          <div className="flex justify-between mt-3">
            <p>Delivery Fee</p>
            {getTotalAmount() > 0 ? <p>₹2</p> : <p>₹0</p>}
          </div>

          <hr className="mt-1" />

          <div className="flex justify-between mt-3">
            <b>Total</b>
            {getTotalAmount() > 0 ? <b>₹{getTotalAmount() + 2}</b> : <b>₹0</b>}
          </div>

          <button
            className="mt-5 bg-red-400 rounded-sm py-2 px-4 w-full md:w-auto"
            onClick={() => navigate("/order")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo */}
        <div>
          <p className="text-gray-500 text-sm">
            If you have a promocode, enter it here
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <input
              className="py-2 px-4 bg-neutral-200 rounded-sm w-full"
              type="text"
              placeholder="promo code"
            />
            <button className="bg-black text-white py-2 px-5 rounded-sm w-full sm:w-auto">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
