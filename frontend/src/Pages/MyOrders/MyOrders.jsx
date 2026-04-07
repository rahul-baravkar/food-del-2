import { StoreContext } from "@/context/StoreContext";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { assets } from "@/assets/admin_assets/assets";
const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);
  //   const currentDateTime = new Date().toLocaleDateString();
  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } },
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="container mx-auto w-full max-w-[1080px] px-4 mt-32  pb-36 ">
      <h1 className="font-bold text-black text-2xl">My Orders</h1>

      <div className="flex flex-col gap-4 mt-6">
        {data.map((order, index) => {
          return (
            <div
              key={index}
              className="p-2 border   rounded-xl items-center  bg-white grid grid-cols-[0.5fr_2fr_2fr_1fr_2fr_2fr_1fr] justify-between max-[900px]:grid max-[900px]:grid-cols-[1fr_2fr_1fr] max-[900px]:gap-y-[5px] max-[900px]:text-[12px]"
            >
              <img src={assets.parcel_icon} alt="" />
              <p className="text-[12px] ">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + " , ";
                  }
                })}
              </p>

              <p className="text-gray-500 text-sm">
                {new Date(order.date).toLocaleString("en-IN")}
              </p>
              <p className="text-sm text-gray-500 ml-8">${order.amount}.00</p>
              <p className="text-sm text-gray-500 ml-3">
                items: {order.items.length}
              </p>
              <p className=" text-[13px] ml-3">
                <span className="text-green-500 mr-1">&#x25cf;</span>
                <b>{order.status}</b>
              </p>
              <button
                onClick={fetchOrders}
                className="max-[900px]:text-[10px] h-8 text-sm px-2 bg-red-200 text-black rounded-sm "
              >
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
