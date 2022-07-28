const jwt = require('jsonwebtoken');
const Recruteurs = require('../models/Recruteur');

exports.isAuthRec = async (req, res, next)=>{
    const token = req.headers['authorization']
    try {
        if(!token){
            return res.send("you are not autorized")
        }
        const decoded = jwt.verify(token, process.env.secretOrKey);
        const  Recruteur = await Recruteurs.findById(decoded.id);
        req.Recruteur = Recruteur;
        next()
    } catch (error) {
        console.log("server error") 
    }
}