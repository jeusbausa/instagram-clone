const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')

// const initAvatar = require('./src/v1/routes/init-avatar')
const token = require('./src/v1/routes/token')
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(token)

module.exports = app

// const port = 9000
// app.listen(port, () => {
// 	console.log(`API server listening at http://localhost:${port}`)
// })
