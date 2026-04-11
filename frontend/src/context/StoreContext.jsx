import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "https://food-del-2-backend-znom.onrender.com";

  // const url = "http://localhost:4000";

  // ✔ FIX: token should NOT be " "
  const [token, setToken] = useState("");

  const [cartItems, setCartItems] = useState({});
  const [food_list, setFoodList] = useState([]);

  // FETCH FOOD LIST

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      setFoodList(response.data.data);
    } catch (error) {
      console.log("Food list error:", error);
    }
  };

  // ADD TO CART

  const addToCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));

    if (token) {
      try {
        await axios.post(
          url + "/api/cart/add",
          { itemId },
          { headers: { token } },
        );
      } catch (error) {
        console.log("Add cart error:", error);
      }
    }
  };

  // REMOVE FROM CART

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 1) - 1,
    }));

    console.log(food_list);

    if (token) {
      try {
        await axios.post(
          url + "/api/cart/remove",
          { itemId },
          { headers: { token } },
        );
      } catch (error) {
        console.log("Remove cart error:", error);
      }
    }
  };

  // LOAD CART FROM DATABASE

  const loadCartData = async (token) => {
    try {
      const response = await axios.post(
        url + "/api/cart/get",
        {},
        { headers: { token } },
      );

      setCartItems(response.data.cartData || {});
    } catch (error) {
      console.log("Load cart error:", error);
    }
  };

  // ON PAGE REFRESH → LOAD FOOD + CART + TOKEN

  useEffect(() => {
    const init = async () => {
      await fetchFoodList();

      const localToken = localStorage.getItem("token");

      if (localToken) {
        setToken(localToken);
        await loadCartData(localToken);
      }
    };
    init();
  }, []);

  // TOTAL AMOUNT FUNCTION

  const getTotalAmount = () => {
    let total = 0;

    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        // console.log("cartItems" , cartItems)
        // console.log("itemId:" , itemId)
        // console.log("Totel item quitity: ",cartItems[itemId])
        const item = food_list.find((f) => f._id === itemId);
        // console.log("items: ",item)

        if (item) {
          total += item.price * cartItems[itemId];
        }
      }
    }
    return total;
  };

  // CONTEXT VALUE

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
