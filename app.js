const express = require("express")
const cors = require("cors")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userRoute = require("./routes/user")
const db = require("./db")

require("dotenv").config()
const app = express();

app.use(express.json())
app.use(cors())
// Giving our API for users
app.use("/api/users", userRoute)

db.query("SELECT name FROM users",(err, row, fields)=>{
    if(err) throw err;
    console.log("The Users are :",row)
})

app.get("/", (req,res)=>{
    res.send("Welcome to We Chat !")
})


// Initialiszing the server port
const port = process.env.PORT ||  3002;
app.listen(port, (req,res)=>{
    console.log(`Server Started on port ${port}`)
})
