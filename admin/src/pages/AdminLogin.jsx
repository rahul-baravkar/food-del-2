import React, { useState, useContext } from "react";
import axios from "axios";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLogin = ({ setToken }) => {
  const { url } = useContext(AdminContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // handle input change
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // handle submit
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${url}/api/user/admin`, data);

      if (response.data.success) {
        // save token
        localStorage.setItem("adminToken", response.data.token);
        setToken(response.data.token);
        toast("Login Successful ✅");

        // redirect
        navigate("/order");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error ❌");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300">
      <form
        onSubmit={onSubmitHandler}
        className="bg-white p-8 rounded-2xl shadow-xl w-[350px] space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Admin Login 🔐
        </h2>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={data.email}
            onChange={onChangeHandler}
            required
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={data.password}
            onChange={onChangeHandler}
            required
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition duration-300 disabled:bg-gray-400"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Footer text */}
        <p className="text-center text-sm text-gray-500">
          Admin Panel Access Only
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;
