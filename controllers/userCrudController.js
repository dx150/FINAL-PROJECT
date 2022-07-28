const users = require("../models/Candidat")
const bcrypt = require("bcrypt");

//method Get
//API : /myProfilUser/:id
exports.getMyProfil=async(req,res)=>{
    try {
        const myinfo = await users.findById(req.params.id)
        res.status(200).send({msg:"My info : ",myinfo})
    } catch (error) {
        res.status(500).send('could not get user info')        
    }
}
// method Delete
// API : /deleteccountCand
exports.deleteAccountCand=async(req,res)=>{
    try {
     await users.findByIdAndDelete(req.user._id)
        res.status(200).send({msg:"account deleted",})
    } catch (error) {
        res.status(500).send({msg:"could not delete"}) 
    }
}

// method Update
// API : /updateAccountCand
exports.updateAccountCand=async(req,res)=>{
    
    try {
        const updated= await users.findByIdAndUpdate(req.user._id, {$set:req.body} ,{new:true})
    res.status(200).send({msg:"account updated successfully",updated})        
    } catch (error) {
        res.status(500).send({msg:"could not update"})         
    }
}
//method Update
// API : /updatePhotoCand
exports.updatePhotoCand=async(req,res)=>{
    
    try {
        const updated= await users.findByIdAndUpdate(req.user._id, {$set:{...req.body,imageCand:req.file.filename}} ,{new:true})
    res.status(200).send({msg:"photo updated successfully",updated})        
    } catch (error) {
        res.status(500).send({msg:"could not update photo"})        
    }
}
// method Update
// API : /updatePasswordCand
exports.updatePassCand=async(req,res)=>{
    
    try {
        const salt = 10;
        const password = bcrypt.hashSync(req.body.password,salt)
        const updatedPass= await users.findByIdAndUpdate(req.user._id, {password:password},{new:true})

    res.status(200).send({msg:"password updated successfully",updatedPass})        
    } catch (error) {
        res.status(500).send({msg:"password not update"})        
    }
}
