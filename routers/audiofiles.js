const express = require('express')
const audioFilesController = require('../controllers/audiofiles')
const router = express.Router()

router.get('/', audioFilesController.getAllFiles)

router.post('/upload', audioFilesController.uploadFile)

router.delete('/:id', audioFilesController.deleteFile)

module.exports = router