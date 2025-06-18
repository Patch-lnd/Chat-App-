const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

require("dotenv").config()

const app = express();

app.use(express.json())
app.use(cors())

/* app.get("/",(req,res)=>{
    res.render("index")
}) */

const port = process.env.PORT ||  3002;
app.listen(port, (req,res)=>{
    console.log(`Server Started on port ${port}`)
})
const db = mysql.connect()