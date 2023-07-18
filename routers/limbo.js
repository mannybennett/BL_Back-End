const express = require('express')
const limboController = require('../controllers/limbo')
const router = express.Router()

router.get('/', limboController.getAllVotes)

router.get('/comments', limboController.getAllComments)

router.post('/', limboController.postVote)

router.post('/comments', limboController.postComment)

module.exports = router