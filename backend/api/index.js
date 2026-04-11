import express from 'express'
import { connectDB } from '../config/db.js'
import cors from "cors"
import foodRouter from '../routes/foodRoute.js'
import userRouter from '../routes/userRoute.js'
import cartRouter from '../routes/cartRoute.js'
import orderRouter from '../routes/orderRoute.js'
import "dotenv/config"

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// DB connection
connectDB()

// routes
app.use("/api/food", foodRouter)
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

// static images
app.use("/images", express.static("uploads"))

// test route
app.get("/", (req, res) => {
  res.send("API Working")
})

// ✅ VERY IMPORTANT (for Vercel)
export default app