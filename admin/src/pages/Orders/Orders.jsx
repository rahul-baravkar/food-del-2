import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";

const Orders = () => {
  const [data, setData] = useState([]);
  const {url} = useContext(AdminContext)

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    setData(response.data.data);
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    console.log(event.target.value);

    if (response.data.success) {
      fetchAllOrders();
    }
  };

  return (
    <div className="container mx-auto w-full max-w-[1080px] px-4 mt-10 pb-36">
      <h1 className="font-bold text-black text-2xl">My Orders</h1>

      <div className="flex flex-col gap-4 mt-6">
        {data.map((order, index) => (
          <div
            key={index}
            className="
              bg-white border rounded-xl p-4
              flex flex-col gap-4
              md:grid md:grid-cols-[1fr_3fr_1fr_1fr_1fr] md:items-center
            "
          >
            {/* Image */}
            <img src={assets.parcel_icon} alt="" className="w-12 h-12" />

            {/* Order items + address */}
            <div className="flex flex-col gap-1">
              <p className="text-sm md:text-[15px] text-gray-700">
                {order.items.map((item, index) =>
                  index === order.items.length - 1
                    ? item.name + " x " + item.quantity
                    : item.name + " x " + item.quantity + ", ",
                )}
              </p>

              <div className="text-xs md:text-sm text-gray-500">
                <p>{order.address.firstName + " " + order.address.lastName}</p>

                <p>{order.address.street}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    " - " +
                    order.address.zipCode}
                </p>

                <p className="mt-1">{order.address.phone}</p>
                <p className="text-gray-500 text-sm">
                  {new Date(order.date).toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            {/* Item count */}
            <p className="text-sm md:text-sm text-gray-500">
              items: {order.items.length}
            </p>

            {/* Amount */}
            <p className="text-sm md:text-sm text-gray-500">
              ₹{order.amount}.00
            </p>

            {/* Status select */}
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="bg-green-100 px-2 py-2 rounded text-sm"
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
