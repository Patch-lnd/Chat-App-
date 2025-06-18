const express = require("express")
const mysql = require("mysql")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const env = require("dotenv")

const app = express();

app.get("/",(req,res)=>{
    res.render("index")
})
app.listen(3001, ()=>{
    console.log("Server Started on port 3001")
})