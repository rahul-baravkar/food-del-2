
// used to APIs build and web server 
import express from 'express'
import path from 'path'
import {connectDB} from './config/db.js'
// used to frontend call to backend without cors APIs block 
import cors from "cors"
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import   "dotenv/config"
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


// create express application in app
const app = express()

// run on port 4000 --> http://localhost:4000/
const port = 4000;

//middleware

//used to read json 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())




// db connection
connectDB()

// FOOD  API END POINT  
app.use("/api/food" , foodRouter)

// USER API END POINT
app.use("/api/user" , userRouter)

// CART API END POINT
app.use("/api/cart" , cartRouter)

//ORDER API END POINT
app.use("/api/order" , orderRouter)

app.use("/images" , express.static("uploads"))

//for testing route
app.get("/" , (req ,res) => {
    res.send("API Working")
})

//start the server
app.listen(port, ()=>{

    console.log(`Server Started on http://localhost:${port}`)
})


export default app;
