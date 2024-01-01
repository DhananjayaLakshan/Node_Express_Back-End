const asyncHandler = require('express-async-handler')//this package import to handle error
const User = require('../models/userModule')
const bcrypt = require('bcrypt')

//@desc Register user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {

    const { userName, email, password } = req.body

    if (!userName || !email || !password) {
        res.status(400)
        throw new Error('All fields are mandatory!')
    }

    const userAvailable = await User.findOne({ email })

    if (userAvailable) {
        res.status(400)
        throw new Error('User already registered!')
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("Hashed Password: ", hashedPassword);

    const user = User.create({
        userName,
        email,
        password: hashedPassword,
    })

    console.log(`User created ${user}`);

    if (user) {
        res.status(201).json({ _id: user.id, email: user.email })
    }else{
        res.status(400)
        throw new Error ("User data is not valid!")
    }

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