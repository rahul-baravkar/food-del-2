import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AdminContext } from "../../context/AdminContext";

const UpdateItems = ({ item, onClose, fetchList }) => {
  const { url } = useContext(AdminContext);
  const [data, setData] = useState({
    name: "",
    category: "",
    price: "",
  });

  // ✅ Prefill data
  useEffect(() => {
    if (item) {
      setData({
        name: item.name,
        category: item.category,
        price: item.price,
      });
    }
  }, [item]);

  // ✅ Handle change
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Update API
  const updateFood = async () => {
    try {
      const response = await axios.post(`${url}/api/food/update`, {
        id: item._id,
        ...data,
      });

      if (response.data.success) {
        toast.success("Updated Successfully");
        fetchList(); // refresh list
        onClose(); // close modal
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error");
    }
  };

  return (
    // 🔥 BACKDROP
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
      {/* MODAL BOX */}
      <div className="bg-white w-full max-w-md p-4 md:p-6 rounded-lg shadow-lg">
        <h2 className="text-lg md:text-xl font-bold mb-4 text-center md:text-left">
          Update Food
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={onChangeHandler}
          placeholder="Food Name"
          className="w-full border p-2 md:p-3 mb-3 rounded text-sm md:text-base"
        />

        {/* Category */}
        <input
          type="text"
          name="category"
          value={data.category}
          onChange={onChangeHandler}
          placeholder="Category"
          className="w-full border p-2 md:p-3 mb-3 rounded text-sm md:text-base"
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          value={data.price}
          onChange={onChangeHandler}
          placeholder="Price"
          className="w-full border p-2 md:p-3 mb-3 rounded text-sm md:text-base"
        />

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 bg-gray-300 rounded text-sm md:text-base"
          >
            Cancel
          </button>

          <button
            onClick={updateFood}
            className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded text-sm md:text-base"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateItems;
