const express = require('express')
const router = express.Router()
const postconttroller = require('../controllers/post.contrller')


router.get('/',postconttroller.getall)
router.get('/getuser/:id',postconttroller.getPostWithUser)
router.post('/',postconttroller.createpost)
router.get('/:id',postconttroller.getbyid)
router.put('/:id',postconttroller.updatepost)
router.delete('/:id',postconttroller.deletepost)

module.exports = router