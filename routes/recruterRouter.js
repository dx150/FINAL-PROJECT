const express = require('express');
const { addJob, getMyJobs, updateJob, deleteJob, getCvCandidat, getAllCandidatures } = require('../controllers/offreController');
const { updateAccountRec, deleteAccountRec, getMyProfilRec, updatePassRec, updatePhotoRec } = require('../controllers/recruteurCrudController');
const { passwordValidationRec, validationRec } = require('../middlewares/AuthRec');
const { upload } = require('../middlewares/Upload');
const { isAuthRec } = require('../middlewares/ValidationRec');
const recruteurRouter = express.Router()

//Afficher Mon profil
//method get 
recruteurRouter.get('/myProfilRec/:id',isAuthRec,getMyProfilRec)

// Modifier Profil
// mothod update
recruteurRouter.put('/updateAccountRec',isAuthRec,updateAccountRec) 
// Modifier photo de Profil Rec
// mothod update
recruteurRouter.put('/updatePhotoRec',isAuthRec,upload.single('imageRec'),updatePhotoRec)

// Modifier Password
// mothod update
recruteurRouter.put('/updatePasswordRec',isAuthRec,passwordValidationRec,validationRec,updatePassRec)

// suprimer compte
// mothod delete
recruteurRouter.delete('/deleteAccoutRec',isAuthRec,deleteAccountRec)

//Ajouter offre
//method post
recruteurRouter.post('/addJob',isAuthRec,addJob) 

//Supprimer Offre
//method delete
recruteurRouter.delete('/deleteJob/:id',isAuthRec,deleteJob)

//Modifier Offre
//method update
recruteurRouter.put('/updateJob/:id',isAuthRec,updateJob)

// liste de mes offres
//method get
recruteurRouter.get('/myJobs',isAuthRec,getMyJobs)

//Rechercher un CV candidat
//method get 
recruteurRouter.get('/CVcandidats/:specialite',isAuthRec,getCvCandidat)

//Consulter les candidatures réçus
//method get
recruteurRouter.get('/candidatures/:id',isAuthRec,getAllCandidatures)

module.exports = recruteurRouter;