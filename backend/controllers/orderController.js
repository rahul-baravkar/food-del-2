import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";

  try {
    const newOrder = new orderModel({
      userId: req.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();

    await userModel.findByIdAndUpdate(req.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: Number(item.price) * 100,
      },
      quantity: Number(item.quantity),
    }));

    // ✅ DELIVERY LOGIC
    const deliveryCharge =
      req.body.amount > 1000 ? 100 : 200;


    // ✅ ADD DELIVERY ITEM
    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
           name: "Delivery Charges",
           description: "₹1000 से ऊपर ऑर्डर पर ₹100 डिलीवरी, अन्यथा ₹200।",
        
           },
        
        unit_amount: deliveryCharge * 100,
      },
      quantity: 1,
    });


    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], // recommended
      line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });

  } catch (error) {
    console.log("STRIPE ERROR:", error);
    res.json({ success: false, message: error.message });
  }
};

// ✅ THIS MUST BE OUTSIDE placeOrder
const verifyOrder = async (req, res) => {
  let { orderId, success } = req.body;

  try {
    // Convert string "true" into real boolean
    success = success === "true" || success === true;

    if (success) {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      return res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      return res.json({ success: false, message: "Not paid" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error verifying order" });
  }
};

// USERS ORDER 
const userOrders = async (req,res) => {

 

  try {
     //first i have get userId and store data in one variable
    const orders = await orderModel.find({userId:req.userId});
    res.json({success:true , data:orders})
    
  } catch (error) {
    console.log(error)
    res.json({success:false , message:"Error"})
    
  }
}

//LIST OF ORDERSDATA FOR ADMIN PANEL
  const listOrders = async (req,res) => {
 
    try {
    //get all the data in mongodb database 
    const orders = await orderModel.find({})
    // send response to the frontend (admin panel)
    res.json({success:true , data:orders})

      
    } catch (error) {

      console.log(error)
      res.json({success:false , message:"Error"})
      
    }
  
  }

  // CHANGE STATUS IN DATABASE 
  const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    await orderModel.findByIdAndUpdate(
      orderId,                 // 👈 ID only
      { status: status },      // 👈 update object
      { new: true }            // optional but recommended
    );

   

    res.json({ success: true, message: `Status: ${status}`,});

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error" });
  }
};


// REMOVE ORDERS FROM ADMIN PANEL
const removeOrders = async (req , res) => {

  const {id} = req.body
  try {
    await orderModel.findByIdAndDelete(id)
    res.json({success:true , message:"Order Removed Successfull"})

    
  } catch (error) {
    res.json({success:false , message:"Error"})
  }

}

export { placeOrder, verifyOrder , userOrders , listOrders , updateStatus , removeOrders };
