const express = require('express');
const { register, login } = require('../controllers/userController');
const { registerValidation, validation, loginValidation } = require('../middlewares/AuthUser');
const { isAuth } = require('../middlewares/validationUser');
const authUserRouter = express.Router()

//Register
//method post
authUserRouter.post('/register',registerValidation,validation,register)

//login
//method post
authUserRouter.post('/login',loginValidation,validation,login)

//method get
authUserRouter.get('/current',isAuth,(req, res, next)=>{
    res.send({user:req.user})
})

module.exports = authUserRouter;