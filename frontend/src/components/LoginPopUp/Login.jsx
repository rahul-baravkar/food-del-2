import React, { useState, useContext } from 'react'
import { assets } from '@/assets/frontend_assets/assets'
import { StoreContext } from '@/context/StoreContext';
import axios from "axios"
const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const { url, setToken } = useContext(StoreContext)

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })


  // FUNCTION FOR INPUT FIELDS
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData(data => ({ ...data, [name]: value }));
  }





  // Create function for store Login and Register data on database
  const onLogin = async (event) => {

    // page relode handle
    event.preventDefault()
    let newUrl = url;

    if (currState === "Login") {

      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register"
    }

    //api call
    const response = await axios.post(newUrl, data);
    

    if (response.data.success) {

      setData({ name: "", email: "", password: "" });

      setShowLogin(false);
      setToken(response.data.token)
      localStorage.setItem("token", response.data.token)



    } else {
      alert(response.data.message)

    }

  }
  return (
    // Overlay
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

      {/* Popup */}
      <form onSubmit={onLogin}>
        <div className="bg-white w-[400px] p-8 rounded-2xl shadow-xl relative">


          {/* Title + Close Button */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">{currState}</h1>

            <img
              src={assets.cross_icon}
              alt="close"
              onClick={() => setShowLogin(false)}
              className="w-6 h-6 cursor-pointer hover:scale-110 transition"
            />
          </div>

          {/* Inputs */}
          <div className="flex flex-col gap-4">
            {currState === "Login" ? null : (
              <input
                onChange={onChangeHandler}
                name="name"
                value={data.name}
                type="text"
                placeholder="Enter your name"
                className="border p-2 rounded-lg w-full"
              />
            )}

            <input
              onChange={onChangeHandler}
              name="email"
              value={data.email}
              type="email"
              placeholder="Enter your email"
              className="border p-2 rounded-lg w-full"
            />

            <input
              onChange={onChangeHandler}
              name='password'
              value={data.password}
              type="password"
              placeholder="Password"
              className="border p-2 rounded-lg w-full"
            />
          </div>

          {/* Button */}
          <button type='submit' className="w-full mt-6 bg-red-400 text-white py-2 rounded-lg hover:bg-red-500 transition">
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>

          {/* Checkbox */}
          <div className="flex items-start gap-2 text-sm mt-4">
            <input type="checkbox" required className="mt-1" />
            <p className="text-gray-600">
              By continuing, I agree to the Terms of Use & Privacy Policy.
            </p>
          </div>

          {/* Switch Login / Signup */}
          <p className="text-center mt-4 text-sm">
            {currState === "Login" ? (
              <>
                Create a new account?
                <span
                  className="text-red-500 cursor-pointer ml-1 hover:underline"
                  onClick={() => setCurrState("Sign Up")}
                >
                  Click here
                </span>
              </>
            ) : (
              <>
                Already have an account?
                <span
                  className="text-red-500 cursor-pointer ml-1 hover:underline"
                  onClick={() => setCurrState("Login")}
                >
                  Click here
                </span>
              </>
            )}
          </p>

        </div>

      </form>

    </div>
  );
};

export default Login;
