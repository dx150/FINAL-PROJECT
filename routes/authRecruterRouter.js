const express = require('express');
const { registerRec, loginRec } = require('../controllers/recruteurController');
const { registerValidationRec, validationRec, loginValidationRec } = require('../middlewares/AuthRec');
const { isAuthRec } = require('../middlewares/ValidationRec');
const authRecruteurRouter = express.Router()

//Register
//method post
authRecruteurRouter.post('/registerRec',registerValidationRec,validationRec,registerRec)

//login
//method post
authRecruteurRouter.post('/loginRec',loginValidationRec,validationRec,loginRec)

//method get
authRecruteurRouter.get('/currentRec',isAuthRec,(req, res, next)=>{
    res.send({Recruteur:req.Recruteur})
})

module.exports = authRecruteurRouter;