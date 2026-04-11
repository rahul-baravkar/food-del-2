import React, { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components1/Navbar/Navbar";
import Sidebar from "./components1/Sidebar/Sidebar";
import Orders from "./pages/Orders/Orders";
import List from "./pages/List/List";
import Add from "./pages/Add/Add";
import UpdateItems from "./pages/List/UpdateItems";
import AdminLogin from "./pages/AdminLogin";

import { ToastContainer, Bounce } from "react-toastify";
import { AdminContext } from "./context/AdminContext";

const App = () => {
  const { token, setToken } = useContext(AdminContext);

  const [isOpen, setIsOpen] = useState(false);

  // load token on refresh
  useEffect(() => {
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <div>
      {/* Toast */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        transition={Bounce}
      />

      {token ? (
        <>
          <Navbar setIsOpen={setIsOpen} />

          {/* Overlay (mobile) */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/30 md:hidden z-30"
              onClick={() => setIsOpen(false)}
            />
          )}

          <div className="flex">
            {/* Sidebar */}
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* Main Content */}
            <div className="flex-1 min-w-0 md:ml-[220px] p-4">
              <Routes>
                <Route path="/order" element={<Orders />} />
                <Route path="/list" element={<List />} />
                <Route path="/add" element={<Add />} />
                <Route path="/update/:id" element={<UpdateItems />} />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <AdminLogin setToken={setToken} />
      )}
    </div>
  );
};

export default App;
