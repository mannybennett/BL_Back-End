const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()

router.get('/', usersController.getAllUsers)

router.get('/:id', usersController.getUserById)

router.put('/:id', usersController.updateUser)

router.post('/', usersController.createUser)

module.exports = router