require('dotenv').config();
const mysql = require("mysql")


// Initializing the MYSQL Data Base
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
})

// Connecting tjo the Data Base
db.connect((err)=>{
    if(err){
        // Displays the error message with the error variable in case of DB connection error
        console.error("Erreur de connexion MYSQL: ",err.stack)
        return;
    }
     console.log("MYSQL Connecté !")
})
module.exports = db;
