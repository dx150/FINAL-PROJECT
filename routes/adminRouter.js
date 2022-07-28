const express = require('express');
const { getAllRecruteurs, deleteUser, deleteRecruteur, getMsgs, deleteMsg } = require('../controllers/adminController');
const { getAllJobs, deleteJob,  getAllUsers } = require('../controllers/offreController');
const adminRouter = express.Router();
const { isAdmin } = require('../middlewares/AuthAdmin');
const { isAuth } = require('../middlewares/validationUser');


//Afficher tous les candidats
//method Get
adminRouter.get('/allUsers',isAuth,isAdmin,getAllUsers) 

//Supprimer un candidat
//method delete
adminRouter.delete('/deleteUser/:id',isAuth,isAdmin,deleteUser) 

//Afficher tous les recruteurs
//method Get
adminRouter.get('/allRecruteurs',isAuth,isAdmin,getAllRecruteurs)

//Supprimer un recruteur
//method delete
adminRouter.delete('/deleteRecruteur/:id',isAuth,isAdmin,deleteRecruteur)

//Afficher tous les Offres
//method Get
adminRouter.get('/allJobs',isAuth,isAdmin,getAllJobs) 

//Supprimer un Offre
//method delete
adminRouter.delete('/deleteOffre/:id',isAuth,isAdmin,deleteJob) 
//Consulter les messages 
//method get
adminRouter.get('/allMessages',isAuth,isAdmin,getMsgs)

//Supprimer un msg 
//method delete
adminRouter.delete('/deleteMessage/:id',isAuth,isAdmin,deleteMsg)


module.exports = adminRouter;