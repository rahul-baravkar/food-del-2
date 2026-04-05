
import userModel from "../models/userModel.js";

// ADD CART
const addToCart = async (req, res) => {
  try {
    const userId = req.userId;       // 
    const itemId = req.body.itemId;

    let userData = await userModel.findById(userId);
    let cartData = userData.cartData;

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// REMOVE CART
const removeToCart = async (req, res) => {
  try {
    const userId = req.userId;       // <-- FIXED
    const itemId = req.body.itemId;

    let userData = await userModel.findById(userId);
    let cartData = userData.cartData;

    if (cartData[itemId] > 0) {
      cartData[itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Removed from cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// GET CART
const getCart = async (req, res) => {
  try {
    const userId = req.userId;      // <-- FIXED

    const userData = await userModel.findById(userId);
    const cartData = userData.cartData;

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addToCart, removeToCart, getCart };
