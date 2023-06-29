const express = require('express')
const audioFilesController = require('../controllers/audiofiles')
const router = express.Router()

router.get('/', audioFilesController.getAllFiles)

module.exports = router