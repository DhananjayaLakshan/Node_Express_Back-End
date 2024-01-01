const asyncHandler = require('express-async-handler')//this package import to handle error


//@desc Register user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Register the user' })
})

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler((req, res) => {
    res.json({ message: 'Login the user' })
})

//@desc Current user info
//@route POST /api/users/register
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Current user information' })
})


module.exports = {
    registerUser,
    loginUser,
    currentUser

}