const express = require("express")
// As we exported "{register}" in an object, we must do so when importing 
const {register} = require("../controllers/user")

// Creating a mini app. A small version of express which is a router
const router = express.Router()
// To have Clarity in our work and see our routes, we will add a controller
// Controller is just a fonction which will pass in our "post" parameters 
// So tha twe can have the logic in a different file
router.post("/register", register)
module.exports = router;