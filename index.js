const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const usersRouter = require('./routers/users')
const audioFilesRouter = require('./routers/audiofiles')

app.use(express.json());

app.use('/users', usersRouter)
app.use('/audiofiles', audioFilesRouter)

app.listen(port, () => console.log('Listening on:', port))