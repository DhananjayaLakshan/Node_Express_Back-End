const asyncHandler = require('express-async-handler')//this package import to handle error

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler ( async (req, res) => {
    res.status(200).jason({ message: "Get all contacts" })
})

//@desc Get a contact
//@route GET /api/contacts
//@access public
const getContact = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` })
})

//@desc Create a contact
//@route POST /api/contacts
//@access public
//201 = resource created
const createContact = asyncHandler (async (req, res) => {
    console.log("The request body is : ", req.body);
    const {name, email, phone} = req.body

    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All the fields are mandatory !")
    }
    res.status(201).json({ message: 'Create contacts' })
})

//@desc Update a contact
//@route PUT /api/contacts
//@access public
const updateContact = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` })
})

//@desc delete a contact
//@route DELETE /api/contacts
//@access public
const deleteContact = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` })
})

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}