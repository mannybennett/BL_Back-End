const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const usersRouter = require('./routers/users')
const audioFilesRouter = require('./routers/audiofiles')
const limboRouter = require('./routers/limbo')
const profileRouter = require('./routers/profile')

app.use(express.json());

app.use('/api/users', usersRouter)
app.use('/api/audioFiles', audioFilesRouter)
app.use('/api/limbo', limboRouter)
app.use('/api/profile', profileRouter)

app.listen(port, () => console.log('Listening on:', port))