const express = require('express')
const router = express.Router()
const {createCourse,getAllCourse,deleteCourse} = require('../controllers/course.controller')
const { loginMiddleware } = require('../middleware/handleLogin.middleware')
const { sessionHandle } = require('../middleware/sessionHandle.middleware')

router.post('/add',sessionHandle,loginMiddleware,createCourse)
router.get('/get',sessionHandle,loginMiddleware,getAllCourse)
router.delete('/delete/:id',sessionHandle,loginMiddleware,deleteCourse)

module.exports = router

// {
// "title":"AI",
// "description":"Artifical Intengence",
// "ownerId":"6a367304e31746baefee45d0"
// }