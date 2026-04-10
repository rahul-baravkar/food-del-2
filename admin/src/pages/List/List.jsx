import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import UpdateItems from "./UpdateItems";
import { AdminContext } from "../../context/AdminContext";
const List = () => {
  const { url } = useContext(AdminContext);

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
    <div className="w-full px-4 mt-4 md:mt-10 pb-20">
      {/* 🔥 SCROLLABLE TABLE */}
      <div className="w-full overflow-x-auto overscroll-x-contain">
        {/* Header */}
        <div className="grid min-w-[600px] text-black font-semibold text-xs md:text-sm grid-cols-[2fr_2fr_1fr_1fr_1fr_1fr] gap-2">
          <p>Img</p>
          <p>Name</p>
          <p>Category</p>
          <p>₹</p>
          <p className="text-center">Delete</p>
          <p className="text-center">Edit</p>
        </div>

        <hr className="my-2" />

        {/* Items */}
        {list.map((item) => (
          <div key={item._id} className="border-b py-2">
            <div className="grid min-w-[600px] items-center grid-cols-[2fr_2fr_1fr_1fr_1fr_1fr] gap-2 text-xs md:text-sm">
              {/* Image */}
              <div className="flex items-center gap-2">
                <img
                  className="w-10 h-10 md:w-12 md:h-12 object-cover rounded"
                  src={`${url}/images/` + item.image}
                  alt=""
                />
              </div>

              {/* Name */}
              <p className="truncate">{item.name}</p>

              {/* Category */}
              <p className="truncate">{item.category}</p>

              {/* Price */}
              <p>₹{item.price}</p>

              {/* Delete */}
              <button
                onClick={() => removeFood(item._id)}
                className="text-red-500 font-bold text-sm text-center"
              >
                ✕
              </button>

              {/* Edit */}
              <button
                onClick={() => setSelectedItem(item)}
                className="text-blue-500 text-xs md:text-sm text-center"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
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
