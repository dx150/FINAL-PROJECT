const { body, validationResult } = require('express-validator');

exports.registerValidationRec = [
    body("recruteurName",'Empty name ! please make a your personal name').notEmpty().trim(),
    body("email","please make a correct campany email").isEmail().trim(),
    body('password',"password must be at least 8 caracter").isLength({ min: 8 }).trim(),
    

];

exports.loginValidationRec = [
    body("email","please make a correct email").isEmail().trim(),
    body('password',"password must be at least 8 caracter").isLength({ min: 8 }).trim(),
];
exports.passwordValidationRec = [
    body('password',"Password must be at least 8 caracter").isLength({ min: 8 }).trim(),
];

exports.validationRec =(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
}