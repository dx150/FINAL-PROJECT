const mongoose = require('mongoose')

const candidatSchema = new mongoose.Schema(
{
    firstName:
        {
            type:String,
            required:true
        },
    lastName:
        {
            type:String,
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
    numTel :
        {
            type: Number,
            trim:true,
            min: 10000000,
            max: 99999999       
        },
    age:{type:Number,
            min:16,
            max:99},
    adress : {
        type: String,
        trim: true
    },  
    bio:{
        type:String,
        trim:true
    },
    specialite:{
        type:String,
        trim:true,
        toLowerCase:true
    },
    skills:{
        type:String,
        trim:true
    },
    imageCand:String, 
    cvCand:String, 
    role:{
        type:String,enum:['user','admin'],default:"user"
    }
})

module.exports = mongoose.model('user',candidatSchema)