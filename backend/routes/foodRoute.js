
// import express from "express";
// import multer from "multer";
// import { addFood, foodList, removeItems, updateItems } from "../controllers/foodController.js";

// const foodRouter = express.Router();

// // ---- MULTER STORAGE ----
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });

// const upload = multer({ storage });

// // ---- ROUTE ----

// // this route add food items in database
// foodRouter.post("/add", upload.single("image"), addFood);

// // and this list route will be fetch/ find all the food list into the database
// foodRouter.get("/list" , foodList )

// // remove item route
// foodRouter.post("/remove" , removeItems)

// // Edit item route
// foodRouter.post("/update" , updateItems)


// export default foodRouter;


import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { addFood, foodList, removeItems, updateItems } from "../controllers/foodController.js";

const foodRouter = express.Router();

// ---- CLOUDINARY CONFIG ----
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

// ---- MULTER CLOUDINARY STORAGE ----
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "food_uploads",
        allowed_formats: ["jpg", "png", "jpeg"],
    },
});

const upload = multer({ storage });

// ---- ROUTES ----
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", foodList);
foodRouter.post("/remove", removeItems);
foodRouter.post("/update", updateItems);

export default foodRouter;