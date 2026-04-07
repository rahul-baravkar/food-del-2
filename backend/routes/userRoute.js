import { adminUser, loginUser, registerUser } from "../controllers/userController.js";
import express from "express";

// CREATE ROUTE
const userRouter = express.Router()


// LOGIN ROUTER
userRouter.post("/login" , loginUser)


// REGISTER ROUTER
userRouter.post("/register" , registerUser)

userRouter.post("/admin" , adminUser)


export default userRouter