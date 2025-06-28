const userModel = require("../models/userModel.js") 
const bcrypt =  require("bcryptjs")
const validator =  require("validator")
const jwt =  require("jsonwebtoken")
//const { use } = require("react")

const creatToken = (_id)=>{
    const jwtKey = process.env.JWT_SECRET_KEY;
    return jwt.sign({_id}, jwtKey, {expiresIn: "3days"})
}



// As I am using "await" need to ass "async" before the fonction containing it
const register = async(req,res)=>{
    try{
        
    // Extracting the desired data from the html form in the body 
    const {name, email, password} = req.body 
    let user = await userModel.findOne({email})
    if (user) return res.status(400).json("User with the given Email Already Existing");
    if(!name || !email || !password) return res.status(400).json("All fields are required")
    
    // Using validator Package
    if(!validator.isEmail(email)) return res.status(400).json("email must be valid")
    if(!validator.isStrongPassword(password)) return res.status(400).json("The password is weak")

    // Saving nuw User
    //user = "INSERT ".userModel({name,email,password})

    const salt = await bcrypt.genSalt(10)
   // user.password = await bcrypt.hash(user.password, salt);
   password = await bcrypt.hash(password, salt);
      // Saving nuw User
    user = "INSERT ".userModel({name,email,password})

    const token = creatToken(user._id)
    res.status(200).json({_id: user.id, name, email, token})
    }catch(err){
        console.log(err);
        res.status(500).json({err})
    }
}
// We included "register" in an Object when exporting since we will ad other exports like login, ect
module.exports = {register}