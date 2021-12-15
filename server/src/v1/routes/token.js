const { Router } = require('express')
const router = Router()
const { setAccessToken } = require('../controllers/Token')

router.post('/token', setAccessToken)

module.exports = router
