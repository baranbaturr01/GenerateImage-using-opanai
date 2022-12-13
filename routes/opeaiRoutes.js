const express = require('express')
const router = express.Router()

router.post('/generate-image', require('../controllers/openaiController'))
module.exports = router