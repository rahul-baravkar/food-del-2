import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components1/Navbar/Navbar";
import Sidebar from "./components1/Sidebar/Sidebar";
import Orders from "./pages/Orders/Orders";
import List from "./pages/List/List";
import Add from "./pages/Add/Add";
import UpdateItems from "./pages/List/UpdateItems";
import AdminLogin from "./pages/AdminLogin";

import { ToastContainer, Slide, Zoom, Bounce, Flip } from "react-toastify";import { useContext } from "react";
import { AdminContext } from "./context/AdminContext";

const App = () => {
  const { token, setToken } = useContext(AdminContext);
  // load token on refresh
  useEffect(() => {
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        
        transition={Bounce}
      />

      {token ? (
        <>
          <Navbar />
          <hr />
          <div className="app-content">
            <Sidebar />

            <Routes>
              <Route path="/order" element={<Orders />} />
              <Route path="/list" element={<List />} />
              <Route path="/add" element={<Add />} />
              <Route path="/update/:id" element={<UpdateItems />} />
            </Routes>
          </div>
        </>
      ) : (
        <AdminLogin setToken={setToken} />
      )}
    </div>
  );
};

export default App;
