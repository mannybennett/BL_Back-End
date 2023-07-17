const express = require('express')
const limboController = require('../controllers/limbo')
const router = express.Router()

router.get('/', limboController.getAllVotes)

router.post('/', limboController.postVote)

module.exports = router