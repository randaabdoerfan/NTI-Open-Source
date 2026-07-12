const express = require('express')
const router = express.Router()
const { Register, Login, Logout } = require('../controllers/student.controller')
const { loginMiddleware } = require('../middleware/handleLogin.middleware')
router.post('/add', Register)
router.post('/login', Login)
router.post('/logout', loginMiddleware, Logout)

module.exports = router 