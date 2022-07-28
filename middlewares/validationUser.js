const jwt = require('jsonwebtoken');
const users = require('../models/Candidat');

exports.isAuth = async (req, res, next)=>{
    const token = req.headers['authorization']
    try {
        if(!token){
            return res.status(401).send("you are not autorized")
        }
        const decoded = jwt.verify(token, process.env.secretOrKey);
        const user = await users.findById(decoded.id);
      
        req.user = user;
        next()
    } catch (error) {
        return res.status(401).send("you are not autorized")
    }
} 