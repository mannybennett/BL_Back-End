const express = require('express')
const limboController = require('../controllers/limbo')
const router = express.Router()

router.get('/', limboController.getAllVotes)

router.get('/comments', limboController.getAllComments)

router.post('/', limboController.postVote)

router.put('/', limboController.updateVote)

router.post('/comments', limboController.postComment)

router.delete('/comments/:id', limboController.deleteComment)

module.exports = router