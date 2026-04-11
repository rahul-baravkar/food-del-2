import foodModel from "../models/foodModel.js";
import fs from 'fs'

/**************************************** ADD FOOD *************************************/
// const addFood = async (req, res) => {

//        if (!req.file) {
//         return res.status(400).json({
//             success: false,
//             message: "Image file is required"
//         });
//     }


//     console.log(req.body)
//     console.log(req.file)
//     let image_filename = `${req.file.filename}`;

//     const food = new foodModel({
//         name: req.body.name,
//         description: req.body.description,
//         price: Number(req.body.price),
//         category: req.body.category,
//         image: image_filename
//     })

//  try {
//     const savedFood = await food.save();

//     console.log("✅ SAVED:", savedFood); // 👈 MUST PRINT

//     res.json({ success: true, message: "Food Added" });

// } catch (error) {
//     console.log("❌ SAVE ERROR FULL:", error); // 👈 FULL ERROR
//     res.status(500).json({ success: false, message: error.message });
// }

// }

const addFood = async (req, res) => {

    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "Image file is required"
        });
    }

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    try {
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: Number(req.body.price), // ✅ IMPORTANT FIX
            category: req.body.category,
            image: req.file.path
        });

        const savedFood = await food.save();

        console.log("✅ SAVED:", savedFood);

        res.json({ success: true, message: "Food Added" });

    } catch (error) {
        console.log("❌ FULL ERROR:", error); // 👈 THIS WILL REVEAL EVERYTHING
        res.status(500).json({ success: false, message: error.message });
    }
};


/**************************************** LIST FOOD *************************************/

 const foodList = async (req , res) => {

    try {
        const foods = await foodModel.find({})
        res.json({success:true , data:foods})

        
    } catch (error) {
        console.log(error)
        res.json({success:false , message:"Error"})

        
    }
    

    }


/**************************************** REMOVE FOOD *************************************/

const removeItems = async (req , res) => {

    try {

        const food = await foodModel.findById(req.body.id)
        // remove image into uploads folder using fs (file system)
        fs.unlink(`uploads/${food.image}` ,() => {})

        //remove food from database using id
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true , message:" Food Removed "})
        
    } catch (error) {
        console.log(error)
        res.json({success:false , message:"Error"})
        
    }

}


const updateItems = async (req, res) => {
  try {
    const { id, name, category, price } = req.body;

    await foodModel.findByIdAndUpdate(id, {
      name,
      category,
      price,
    });

    res.json({ success: true, message: "Food Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
export { addFood  , foodList , removeItems , updateItems}
