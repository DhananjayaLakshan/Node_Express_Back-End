const express = require("express")
const router = express.Router()
const {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact } = require('../controllers/contactController')
const validateToken = require("../middleware/validateTokenHandler")

router.use(validateToken)//make all the apis private if user not logged in any of the CRUD can not done    
router.route("/").get(getContacts).post(createContact)
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)

module.exports = router