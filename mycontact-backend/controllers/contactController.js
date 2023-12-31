//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).jason({ message: "Get all contacts" })
}

//@desc Get a contact
//@route GET /api/contacts
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` })
}

//@desc Create a contact
//@route POST /api/contacts
//@access public
//201 = resource created
const createContact = (req, res) => {
    res.status(201).json({ message: 'Create contacts' })
}

//@desc Update a contact
//@route PUT /api/contacts
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` })
}

//@desc delete a contact
//@route DELETE /api/contacts
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` })
}

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}