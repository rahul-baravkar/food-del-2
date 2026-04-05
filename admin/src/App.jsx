import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components1/Navbar/Navbar";
import Sidebar from "./components1/Sidebar/Sidebar";
import Orders from "./pages/Orders/Orders";
import List from "./pages/List/List";
import Add from "./pages/Add/Add";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateItems from "./pages/List/UpdateItems";

const App = () => {
  return (
    <div>
      <ToastContainer />
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
    </div>
  );
};

export default App;
