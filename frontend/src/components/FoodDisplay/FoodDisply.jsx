import { StoreContext } from "@/context/StoreContext";
import React, { useContext, useState } from "react";
import rating_starts from "@/assets/frontend_assets/rating_starts.png";
import { assets } from "@/assets/frontend_assets/assets";

const FoodDisply = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="foodlist ">
      <h1 className="mt-8 font-bold text-black text-3xl mx-24">
        Top dishes near you
      </h1>

      <div className="mx-24 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6 mt-5">
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            console.log(item._id);
            return (
              <div key={item._id} className=" ">
                <div className="px-6 py-10 shadow rounded-lg ">
                  <div className="food_image">
                    <img
                      className="rounded "
                      src={url + "/images/" + item.image}
                      alt="food_image"
                    />
                  </div>
                  <div className="food_item_info mt-2">
                    <div className="food-item-name-rating flex justify-between">
                      <h1 className="font-bold text-xl text-gray-700 mt-1">
                        {item.name}
                      </h1>
                      <img
                        className="w-16 h-5 mt-2"
                        src={rating_starts}
                        alt=""
                      />
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      {item.description}
                    </p>
                    <div className="flex justify-between">
                      <p className="font-bold text-red-400 mt-2 text-xl">
                        {item.price}₹ kg
                      </p>

                      {!cartItems[String(item._id)] ? (
                        <img
                          className="w-8 h-8 mt-2"
                          onClick={() => addToCart(item._id)}
                          src={assets.add_icon_white}
                        />
                      ) : (
                        <div className="flex mt-3 shadow gap-4 rounded-xl ">
                          <img
                            className=" w-7 h-7 "
                            onClick={() => removeFromCart(item._id)}
                            src={assets.remove_icon_red}
                            alt=""
                          />
                          <h1 className="">{cartItems[item._id]}</h1>
                          <img
                            className=" w-7 h-7 "
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
