const express = require('express');
const { getAllJobs, postJob, getFindJobs } = require('../controllers/offreController');
const { updateAccountCand, deleteAccountCand, getMyProfil, updatePassCand, updatePhotoCand } = require('../controllers/userCrudController');
const { passwordChangeValidation, validation } = require('../middlewares/AuthUser');
const { upload } = require('../middlewares/Upload');
const { isAuth } = require('../middlewares/validationUser');
const candidatRouter = express.Router()

//Afficher Mon profil
//method get
candidatRouter.get('/myProfilUser/:id',isAuth,getMyProfil)

// Modifier Profil
// mothod update
candidatRouter.put('/updateAccountCand',isAuth,updateAccountCand)
// Modifier photo de Profil user
// mothod update
candidatRouter.put('/updatePhotoCand',isAuth,upload.single('imageCand'),updatePhotoCand)
// Modifier Password
// mothod update
candidatRouter.put('/updatePasswordCand',isAuth,passwordChangeValidation,validation,updatePassCand)

// suprimer compte
// mothod delete
candidatRouter.delete('/deleteAccountCand',isAuth,deleteAccountCand)

//Consuler les offres
//method get
candidatRouter.get('/jobs',getAllJobs)

//Postuler pour un offre
//method post
candidatRouter.post('/postuler/:id',isAuth,postJob)
//Rechercher  un offre
//method get
candidatRouter.get('/FindJobs/:offreName',getFindJobs)
module.exports = candidatRouter;