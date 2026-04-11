import axios from "axios";
import { assets } from "../../assets/assets";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";

const Add = () => {
  const {url} = useContext(AdminContext)
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", Number(data.price));
      formData.append("category", data.category);
      formData.append("image", image);

      const response = await axios.post(`${url}/api/food/add`, formData);

      // SUCCESS
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(false);

        toast.success("Food item added successfully! 🍕");
        return;
      }

      // FAIL (but API returned a valid response)
      toast.error("Failed to add food ❌");
    } catch (error) {
      // SERVER ERROR (500, network, axios error)
      toast.error("Server Error ❗");
      console.error(error);
    }
  };

 

return (
  <form
    onSubmit={onSubmitHandler}
    className="max-w-[900px] mx-auto px-4 mt-4 md:mt-10 space-y-6"
  >

    {/* Upload Image */}
    <div>
      <h1 className="text-gray-500 mb-2">Upload Image</h1>

      <label htmlFor="image" className="cursor-pointer inline-block">
        <img
          className="w-28 h-20 object-cover border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition"
          src={image ? URL.createObjectURL(image) : assets.upload_area}
          alt=""
        />
      </label>

      <input
        onChange={(e) => setImage(e.target.files[0])}
        id="image"
        type="file"
        hidden
        required
      />
    </div>

    {/* Product name */}
    <div>
      <h1 className="text-gray-500">Product name</h1>
      <input
        name="name"
        onChange={onChangeHandler}
        value={data.name}
        className="w-full py-2 px-3 mt-1 outline-none border border-gray-300 rounded-md focus:border-black"
        type="text"
        placeholder="Type here"
      />
    </div>

    {/* Description */}
    <div>
      <h1 className="text-gray-500">Product description</h1>
      <textarea
        name="description"
        onChange={onChangeHandler}
        value={data.description}
        className="w-full mt-1 p-3 outline-none border border-gray-300 rounded-md resize-none focus:border-black"
        placeholder="Write content here"
        rows="4"
      ></textarea>
    </div>

    {/* Price + Category */}
    <div className="flex flex-col sm:flex-row gap-4">

      {/* Category */}
      <div className="w-full">
        <h1 className="text-gray-500">Product category</h1>
        <select
          name="category"
          value={data.category}
          onChange={onChangeHandler}
          className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md outline-none focus:border-black"
        >
          <option value="Salad">पत्तेदार</option>
          <option value="Rolls">जड़</option>
          <option value="Deserts">फल</option>
          <option value="Sandwich">Seeds & Pods</option>
          <option value="Cake">Bulb</option>
          <option value="Pure Veg">Flower</option>
          <option value="Pasta">Grains</option>
          <option value="Noodles">Others</option>
        </select>
      </div>

      {/* Price */}
      <div className="w-full">
        <h1 className="text-gray-500">Product price</h1>
        <input
          name="price"
          onChange={onChangeHandler}
          value={data.price}
          className="w-full py-2 px-3 mt-1 outline-none border border-gray-300 rounded-md focus:border-black"
          type="number"
          placeholder="Price"
        />
      </div>

    </div>

    {/* Button */}
    <button
      className="bg-black w-full sm:w-40 text-white py-2 rounded-md hover:bg-gray-900 transition"
      type="submit"
    >
      ADD
    </button>

  </form>
);

};

export default Add;
