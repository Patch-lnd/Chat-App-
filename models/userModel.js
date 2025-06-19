const mysql = require("mysql")

// Using Schema to shape our documents
// We use the keyword "new" because this is a class and we use the keyword+Class to creat an Object
const userSchema = new mysql.schema({
    name: {type: String, required: true, minlength: 3, maxlength: 30},
    email: {type: String, required: true, minlength: 4, maxlength: 200, unique: true},
    password: {type: String, required: true, minlength: 6, maxlength: 200}
    },
    // timestamps just include the date or time a particular input was created
   {timestamps: true} 
)

// This model, gives us the mothodes to edit out database uf users
// The first parameter is the name of our collection (start with Cap letter)
// The second parameter is the variable for the schema
const userModel = mysql.model("User", userSchema)
module.exports = userModel;