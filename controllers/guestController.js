const contacts = require("../models/ContactUs");

// method POST
// API : /contact
exports.addContact= async (req,res)=>{
    try {
        const newMsg = new contacts(req.body);
        await newMsg.save();
        res.status(200).send({msg:"Message sent successfully",newMsg})
    } catch (error) {
        res.status(500).send({msg :'could not send the message'})
    }
}