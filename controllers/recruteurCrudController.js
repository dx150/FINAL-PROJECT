const Offres = require('../models/Offre')
const Recruteurs = require('../models/Recruteur')
const bcrypt = require("bcrypt");


//method Get
//API : /myProfilRec/:id
exports.getMyProfilRec=async(req,res)=>{
    try {
        const myInfo = await Recruteurs.findById(req.params.id)
        res.status(200).send({msg:"My info : ",myInfo})
    } catch (error) {
        res.status(500).send('could not get recruteur info')        
    }
}
// method Delete
// API : /deleteAccountRec
exports.deleteAccountRec=async(req,res)=>{
    try {
        await Recruteurs.findByIdAndDelete(req.Recruteur._id)
        await Offres.deleteMany({recruteurId:req.Recruteur._id})
        res.status(200).send({msg:"account deleted"})
    } catch (error) {
        res.status(500).send({msg:"could not delete"})
    }
}

// method Update
// API : /updateAccountRec
exports.updateAccountRec=async(req,res)=>{    
    try {
        
        const updated=  await Recruteurs.findByIdAndUpdate(req.Recruteur._id,{$set:req.body},{new:true})
    res.status(200).send({msg:"account updated successfully",updated})        
    } catch (error) {
        res.status(500).send({msg:"could not updated"})        
    }
}
//method Update
// API : /updatePhotoRec
exports.updatePhotoRec=async(req,res)=>{
    
    try {
        const updated= await Recruteurs.findByIdAndUpdate(req.Recruteur._id, {$set:{...req.body,imageRec:req.file.filename}} ,{new:true})
    res.status(200).send({msg:"Photo Campany updated successfully",updated})        
    } catch (error) {
        res.status(500).send({msg:"could not update photo"})        
    }
}

// method Update
// API : /updatePasswordRec
exports.updatePassRec=async(req,res)=>{
   
    try {
        const salt = 10;
        const password = bcrypt.hashSync(req.body.password,salt)
        const updatedPassRec= await Recruteurs.findByIdAndUpdate(req.Recruteur._id, {password:password},{new:true})

    res.status(200).send({msg:"password updated successfully",updatedPassRec})        
    } catch (error) {
        res.status(500).send({msg:"password not updated"})        
    }
}
