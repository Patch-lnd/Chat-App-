const express = require("express")
const cors = require("cors")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userRoute = require("./routes/user")
const db = require("./db")

require("dotenv").config()
const app = express();

// Sets "EJS" view engine for my app
app.set("view engine", "ejs");
    
// Ensures that the values we are grabbing from the form comes as JSON
app.use(express.json())
// Makes sure I can take data from any form
app.use(express.urlencoded({extended: true}))


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

app.get("/register", (req,res)=>{
    res.render("register")
})


// Initialiszing the server port
const port = process.env.PORT ||  3002;
app.listen(port, (req,res)=>{
    console.log(`Server Started on port ${port}`)
})
