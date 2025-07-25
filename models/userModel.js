const mysql = require("mysql")
const db = require("../db")
const validator = require("validator")

function userModel(data) {
    const errors = {};

    // Validate name
    if (!data.name || typeof data.name !== 'string') {
        errors.name = 'Name is required and must be a string.';
    } else if (data.name.length < 3 || data.name.length > 30) {
        errors.name = 'Name must be between 3 and 30 characters.';
    }

    // Validate email
    if (!data.email || typeof data.email !== 'string') {
        errors.email = 'Email is required and must be a string.';
    } else if (!validator.isEmail(data.email)) {
        errors.email = 'Email is not valid.';
    } else if (data.email.length < 4 || data.email.length > 200) {
        errors.email = 'Email must be between 4 and 200 characters.';
    }

    // Validate password
    if (!data.password || typeof data.password !== 'string') {
        errors.password = 'Password is required and must be a string.';
    }

    const isValid = Object.keys(errors).length === 0;

    return { isValid, errors };
}

module.exports = userModel;







/* // Using Schema to shape our documents
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
module.exports = userModel; */

/* 
    const mysql = require("mysql");
    const db = require("../db");
    const validator = require("validator");

    // Validation function to enforce min, max, and required
    function validateUser(user) {
    if (!user.name || validator.isEmpty(user.name.trim())) {
        return "Name is required";
    }
    if (!validator.isLength(user.name, { min: 3, max: 30 })) {
        return "Name must be between 3 and 30 characters";
    }

    if (!user.email || validator.isEmpty(user.email.trim())) {
        return "Email is required";
    }
    if (!validator.isEmail(user.email)) {
        return "Email is invalid";
    }
    if (!validator.isLength(user.email, { min: 4, max: 200 })) {
        return "Email must be between 4 and 200 characters";
    }

    if (!user.password || validator.isEmpty(user.password.trim())) {
        return "Password is required";
    }
    if (!validator.isLength(user.password, { min: 6, max: 200 })) {
        return "Password must be between 6 and 200 characters";
    }

    return null; // No errors
    }

    module.exports = {
    validateUser,
    };
 */