const express = require('express')
const router = express.Router()
const userconttroller = require('../controllers/user.contrller')


router.get('/',userconttroller.getall)
router.get('/getposts/:id',userconttroller.getposts)
router.post('/',userconttroller.createuser)
router.get('/:id',userconttroller.getbyid)
router.put('/:id',userconttroller.updateuser)
router.delete('/:id',userconttroller.deleteuser)

module.exports = router
