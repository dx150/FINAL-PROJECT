const mongoose = require('mongoose')

const recruteurSchema = new mongoose.Schema(
    {
        recruteurName:
            {
                type:String,
                required:true
            },
        
        email: 
            {
                type: String,
                required: true, 
                unique: true,
            },
        password:
            {
                type: String,
                required: true,
            },
        numContact :
            {
                type: Number
            },
        adress : {
            type:String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },   
        imageRec:String,
       
    })

    module.exports = mongoose.model('Recruteur',recruteurSchema)