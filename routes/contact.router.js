const express = require('express')
const router = express.Router()

const { sendContactFormEmail } = require('../controllers/contact.controller')

router.route('/').post(sendContactFormEmail)

module.exports = router