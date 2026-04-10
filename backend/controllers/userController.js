import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import validator from 'validator'
import jwt from "jsonwebtoken";
import adminModel from "../models/adminModel.js";


// Generate Token
const createToken = (id) => {
    // eslint-disable-next-line no-undef
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// LOGIN FUNCTION 
const loginUser = async (req, res) => {

    const {email , password} = req.body
    try {

        const user = await userModel.findOne({email})
     
    // CHECK USER EXITS OR NOT WITH INPUT EMAIL
    if(!user){
        return res.json({success:false ,message:"User Dose't exits" })
    } 

    // CHECK PASSWORD MATCH
    const isMatch = await bcrypt.compare(password , user.password)
    
    if(!isMatch){
        return res.json({success:false , message:"Invalid credentials"})
    }

    const token = createToken(user._id)
    
   
    res.json({success:true , token , message:"User Login Successfully ✅"})

        
    } catch (error) {

        console.log(error)
        res.json({success:false , message:"Error"})
        
    }
}

// REGISTER FUNCTION 
const registerUser = async (req, res) => {

    const { name, password, email } = req.body
    
    try {

        //Checking is User already Exits
        const exist = await userModel.findOne({ email })
        if (exist) {
            return res.json({ success: false, message: "User  already exits" })
        }

        //Validating Email Format & Strong Password

        // CHECK VALID EMAIL
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }
        // CHECK VALID PASSWORD
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }


        // HASH THE PASSWORD
        const salt = await bcrypt.genSalt(10)
        
        const hashedPassword = await bcrypt.hash(password, salt)
        

        // CREATE NEWUSER AND SAVE IN DATABASE
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
       
        
        res.json({ success: true, token , message:"User Register Successfull ✅" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error " })

    }



}


const adminUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // DEBUG (add this 👇)
    

    if (email !== adminEmail) {
      return res.json({ success: false, message: "Admin not Exist" });
    }

    // if plain password
    if (password !== adminPassword) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    const token = createToken(email);

    res.json({
      success: true,
      token,
      message: "Admin Login Successfully",
    });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser , adminUser }