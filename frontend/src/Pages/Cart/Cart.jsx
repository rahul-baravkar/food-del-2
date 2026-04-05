
import { StoreContext } from '@/context/StoreContext'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart , getTotalAmount , url } = useContext(StoreContext)

  const navigate = useNavigate()

  return (
    <div className="cart mx-auto w-full max-w-[1080px] px-4 pb-52 mt-32">

      <div className="cart-items">

        {/* Header - Hide on mobile */}
        <div
          className="cart-items-title text-black font-bold 
          hidden md:grid 
          grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr]"
        >
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p className="ml-12">Remove</p>
        </div>

        <br />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>

                {/* Cart Item */}
                <div
                  className="
                  grid items-center gap-4 
                  grid-cols-2 sm:grid-cols-1 md:grid-cols-2
                  lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr]
                "
                >
                  <img className='w-12 sm:w-16' src={url+"/images/"+item.image} alt="" />
                 

                  <p>{item.name}</p>
                  <p className="hidden md:block">${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p className="hidden lg:block">${item.price * cartItems[item._id]}</p>

                  <button
                    className="text-red-500 font-bold text-xl"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </button>
                </div>

                <hr />
              </div>
            )
          }
        })}

        <hr />
      </div>

      {/* Bottom Section: Responsive */}
      <div className="cart-bottom grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">

        {/* Cart Total */}
        <div className="cart-total">
          <h1 className="font-bold text-black text-xl">Cart Totals</h1>

          <div className="cart-total-details flex justify-between mt-3">
            <p>Subtotal</p>
            <p>${getTotalAmount()}</p>
          </div>

          <hr className="mt-1" />

          <div className="cart-total-details flex justify-between mt-3">
            <p>Delivery Fee</p>
            {getTotalAmount() > 0? <p>${2}</p>:<p>${0}</p>}
          </div>

          <hr className="mt-1" />

          <div className="cart-total-details flex justify-between mt-3">
            <b>Total</b>
            {getTotalAmount() > 0? <b>${getTotalAmount() + 2}</b>:<b>${0}</b>}
          </div>

          <button className="mt-5 bg-red-400 rounded-sm py-2 px-2 w-full md:w-auto" onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo code */}
        <div className="promocode md:ml-16">
          <p className="text-gray-500 text-md">If you have a promocode, enter it here</p>

          <div className="mt-4">
            <input
              className="py-2 px-6 bg-neutral-200 rounded-sm "
              type="text"
              placeholder="promo code"
            />
            <button className="bg-black text-white py-2 rounded-sm px-5 ml-2">
              Submit
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Cart
