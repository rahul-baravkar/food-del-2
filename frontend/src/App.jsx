import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Menu from "./Pages/Menu";
import Contact_us from "./Pages/Contact_us";
import Mobile_app from "./Pages/Mobile_app";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/LoginPopUp/Login";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Cart from "./Pages/Cart/Cart";
import Verify from "./Pages/Verify/Verify";
import MyOrders from "./Pages/MyOrders/MyOrders";
import { ToastContainer, Slide, Zoom, Bounce, Flip } from "react-toastify";
import { useContext } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
          draggable
          transition={Bounce}
        />

        {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}

        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact-us" element={<Contact_us />} />
          <Route path="/mobile-app" element={<Mobile_app />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
