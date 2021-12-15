const { Router } = require('express')
const router = Router()
const { initUserCreateAvatar } = require('../controllers/InitAvatar')

router.post('/init', initUserCreateAvatar)

module.exports = router
