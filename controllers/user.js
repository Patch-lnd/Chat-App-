const userModel = require("../models/userModel.js")
const bcrypt =  require("bcryptjs")
const validator =  require("validator")
const jwt =  require("jsonwebtoken")
// As I am using "await" need to ass "async" before the fonction containing it
const register = async(req,res)=>{
    // Extracting the desired data from the html form in the body 
    const {name, email, password} = req.body 
    let user = await userModel.findOne({email})
    if (user) return res.status(400).json("User with the given Email Already Existing");
}
// We included "register" in an Object when exporting since we will ad other exports like login, ect
module.exports = {register};