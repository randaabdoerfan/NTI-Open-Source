const userController = require('../controllers/user.controller')
const verifyEmailMiddleware = require('../middleware/user.verify.email')
const express = require('express')
const router = express.Router()

router.post('/',userController.Register)
router.get('/verify/:token',verifyEmailMiddleware("verify"),userController.verifymail)
router.post('/reset',userController.resetpassword)
router.post('/change/:token',verifyEmailMiddleware("reset"),userController.changepassword)
module.exports = router;