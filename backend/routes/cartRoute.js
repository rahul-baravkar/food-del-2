import cartMiddleware from '../middleware/auth.js'
import { addToCart, getCart, removeToCart } from '../controllers/cartController.js'
import express from 'express'

const cartRouter = express.Router()

cartRouter.post("/add" , cartMiddleware ,  addToCart)

cartRouter.post("/remove" , cartMiddleware, removeToCart)

cartRouter.post("/get", cartMiddleware ,  getCart)



export default cartRouter