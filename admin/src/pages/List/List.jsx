
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import UpdateItems from "./UpdateItems";
const List = () => {
  const url = "https://food-del-2-backend-znom.onrender.com";

  const [list, setList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // ✅ FOR MODAL

  // FETCH LIST
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  // DELETE FOOD
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {
      id: [foodId],
    });

    await fetchList();

    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list mt-12 ml-16 w-[1060px]">
      
      {/* Header */}
      <div className="food-list">
        <p className="font-bold text-black text-xl">All Food List</p>

        <div className="grid grid-cols-6 mt-4 text-gray-700 font-semibold px-4">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p className="text-center">Action</p>
          <p className="text-center">Edit</p>
        </div>

        <hr className="mt-2 border-gray-400" />
      </div>

      {/* Food Items */}
      {list.map((item) => (
        <div
          key={item._id}
          className="grid grid-cols-6 items-center gap-5 border border-gray-300 px-4 py-2 mt-2 rounded-md"
        >
          <img
            className="w-14 h-14 object-cover rounded-md border"
            src={`${url}/images/` + item.image}
            alt=""
          />

          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>{item.price}₹ kg</p>

          {/* DELETE */}
          <div className="flex justify-center">
            <button
              onClick={() => removeFood(item._id)}
              className="text-red-600 text-sm hover:text-red-800"
            >
              ✕
            </button>
          </div>

          {/* EDIT */}
          <div className="flex justify-center">
            <button
              onClick={() => setSelectedItem(item)} // ✅ OPEN MODAL
              className="text-blue-600 text-sm hover:text-blue-800"
            >
              Edit
            </button>
          </div>
        </div>
      ))}

      {/* ✅ POPUP MODAL */}
      {selectedItem && (
        <UpdateItems
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          fetchList={fetchList}
        />
      )}
    </div>
  );
};

export default List;
