const express = require('express')
const profileController = require('../controllers/profile')
const router = express.Router()

router.delete('/votes/:audio_file_id', profileController.deleteVote)

router.delete('/comments/:audio_file_id', profileController.deleteComment)

router.delete('/audioFiles/:id', profileController.deleteFile)

module.exports = router