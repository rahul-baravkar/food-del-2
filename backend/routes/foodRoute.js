

import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { addFood, foodList, removeItems, updateItems } from "../controllers/foodController.js";

const foodRouter = express.Router();

// ---- CLOUDINARY CONFIG ----
cloudinary.config({
    cloud_name: 'dyqa7pche',
    api_key: "677686526437959",
    api_secret: "J_socyPTyAE2hptFEWKdoXz2kGU",
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
foodRouter.post("/add", (req, res, next) => {
    upload.single("image")(req, res, function (err) {
        if (err) {
            console.log("❌ UPLOAD ERROR:", err);
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
        next();
    });
}, addFood);
foodRouter.get("/list", foodList);
foodRouter.post("/remove", removeItems);
foodRouter.post("/update", updateItems);

export default foodRouter;