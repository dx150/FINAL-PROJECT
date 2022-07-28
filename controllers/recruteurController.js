//register
//method post
// API : /register
const Recruteurs = require('../models/Recruteur')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

exports.registerRec=async(req,res)=>{
    const {email, password}=req.body
    try {
        const found = await  Recruteurs.findOne({email})
        if (found){
            res.status(400).send({msg:"Recruteur already exist"})
        }
        const newRec= new Recruteurs(req.body)         
        //bycrypt : cryptage password
        const salt = 10;
        const hashPassword = bcrypt.hashSync(password, salt)
        newRec.password = hashPassword
       
        //jwt
        const payload = {id:newRec._id}        
        const token = jwt.sign(payload,process.env.secretOrKey)       
        await newRec.save()
        
        res.status(200).send({msg:"registred with success",newRec, token}) 
    } catch (error) {
        console.log({error})
        res.status(500).send({msg:'could not register'})
        
    }

}

exports.loginRec=async(req,res)=>{
    const {email , password} = req.body
    try {
        const foundRec = await Recruteurs.findOne({email})
        if(!foundRec){
            return res.status(400).send({
                errors: [
                    {
                      msg: "Account does not exist! Please register first",
                      location: "password",
                      param: "password",
                      value: password,
                    },
                  ]
            })
        }
        const match = await bcrypt.compareSync(password, foundRec.password);
        if(!match){
            return res.status(400).send({
                errors: [
                    {
                      msg: "bad credentials",
                      location: "password",
                      param: "password",
                      value: password,
                    },
                  ]
            })
        }
        //jwt
        const payload = {id:foundRec._id}
        const token = jwt.sign(payload,process.env.secretOrKey)

        res.status(200).send({msg:'login with success',foundRec, token})
    } catch (error) {
        res.status(500).send({msg:'could not login'}) 
    }
}