const express = require('express');
const { addContact } = require('../controllers/guestController');
const { contactValidation, validation } = require('../middlewares/AuthUser');
const guestRouter = express.Router()


//Contact Us 
//method post
guestRouter.post('/contact',contactValidation,validation,addContact)

module.exports = guestRouter;