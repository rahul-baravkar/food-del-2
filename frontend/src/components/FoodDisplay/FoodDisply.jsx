import { StoreContext } from "@/context/StoreContext";
import React, { useContext } from "react";
import rating_starts from "@/assets/frontend_assets/rating_starts.png";
import { assets } from "@/assets/frontend_assets/assets";

const FoodDisply = ({ category }) => {
  const { food_list, cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="foodlist px-4 md:px-10">
      {/* Heading */}
      <h1 className="mt-8 font-bold text-black text-xl md:text-3xl">
        Fresh Vegetables Near You
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-5">
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <div key={item._id}>
                {/* Card */}
                <div className="p-3 md:px-6 md:py-6 shadow rounded-lg bg-white">
                  {/* Image */}
                  <div>
                    <img
                      className="w-full h-32 md:h-40 object-cover rounded"
                      src={item.image}
                      alt="food_image"
                    />
                  </div>

                  {/* Info */}
                  <div className="mt-2">
                    {/* Name + Rating */}
                    <div className="flex justify-between items-center">
                      <h1 className="font-bold text-sm md:text-lg text-gray-700">
                        {item.name}
                      </h1>
                      <img
                        className="w-12 md:w-16 h-4 md:h-5"
                        src={rating_starts}
                        alt=""
                      />
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-xs md:text-sm mt-1 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Price + Cart */}
                    <div className="flex justify-between items-center mt-2">
                      <p className="font-bold text-red-400 text-sm md:text-lg">
                        {item.price}₹ kg
                      </p>

                      {!cartItems[String(item._id)] ? (
                        <img
                          className="w-7 h-7 md:w-8 md:h-8 cursor-pointer"
                          onClick={() => addToCart(item._id)}
                          src={assets.add_icon_white}
                        />
                      ) : (
                        <div className="flex items-center gap-2 md:gap-4 shadow px-2 py-1 rounded-xl">
                          <img
                            className="w-6 h-6 cursor-pointer"
                            onClick={() => removeFromCart(item._id)}
                            src={assets.remove_icon_red}
                            alt=""
                          />
                          <h1 className="text-sm md:text-base">
                            {cartItems[item._id]}
                          </h1>
                          <img
                            className="w-6 h-6 cursor-pointer"
                            onClick={() => addToCart(item._id)}
                            src={assets.add_icon_green}
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisply;
