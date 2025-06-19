const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userRoute = require("./routers/user")

require("dotenv").config()
const app = express();

app.use(express.json())
app.use(cors())
// Giving our API for users
app.use("/api/users", userRoute)

// Initializing the MYSQL Data Base
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    database: 'We-Chat'
})

// Connecting tjo the Data Base
db.connect((err)=>{
    if(err){
        // Displays the error message with the error variable in case of DB connection error
        console.error("Erreur de connexion MYSQL: ".err.stack)
        return;
    }
     console.log("MYSQL Connecté !")
})

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
