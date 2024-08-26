//import express
const express = require('express')

//import user controller
const userController = require('./controllers/userController')

//importproject controller
const projectController = require('./controllers/projectController')

//import jwt Middleware
const jwt = require('./middleware/jwtMiddleware')

//import multer middleware
const multer = require('./middleware/multerMiddleware')

//create object for Router class
const router = new express.Router()

//Register 
router.post('/register', userController.registerController)

//login
router.post('/login', userController.loginController)

//add Project
router.post('/add-project', jwt, multer.single("projectImg"), projectController.addProjectController)

//get home project

router.get('/home-project', projectController.getHomeProjectController)

//get all project

router.get('/all-project', projectController.getAllProjectController)

//get user project
router.get('/user-project', jwt, projectController.getUserProjectController)

//delete userProject
router.delete('/remove-userProject/:id', projectController.deleteUserProjectController)

//edit user project
router.put('/edit-Project/:id', jwt, multer.single("projectImg"), projectController.editUserProjectController)

//update profile 
router.put('/update-profile', jwt, multer.single("profile"), userController.updateProfileController)

//export router
module.exports = router