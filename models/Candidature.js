const mongoose = require('mongoose')



const candidatureSchema = new mongoose.Schema(
{
    diplome : 
    {
        type:String,
        required:true,

    },
    formation : String,
    experience : 
    {
        type: String
    },
    nbre_experience : String,
    langues : String,
    offreId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Offre"
    },
    candidatId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },

})
module.exports = mongoose.model('Candidature',candidatureSchema)

