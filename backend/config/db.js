import mongoose  from "mongoose";

export const connectDB = async () => {

    // await mongoose.connect("mongodb+srv://codemitra:Rahul123@cluster0.2kzcsfy.mongodb.net/FOOD-DELIVERY-APP").then(()=>console.log("db Connected"))
    await mongoose.connect("mongodb+srv://codemitra:Rahul123@cluster0.2kzcsfy.mongodb.net/FOOD-DELIVERY-APP").then(()=>console.log("db Connected"))
}