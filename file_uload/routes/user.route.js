const express = require('express')
const router = express.Router()
const { fileMulter,filesMulter,fileClould,filesClould } = require('../controllers/uploadFile.controller')
const { uploadFileMulter,uploadFileClould } = require('../middleware/multer.middleware')

router.post('/registerfile', uploadFileMulter.single("avatar"), fileMulter)
router.post('/registerfiles',uploadFileMulter.array("avatars",5), filesMulter)
router.post('/clouldfile',uploadFileClould.single("avatar"),fileClould)
router.post('/clouldfiles',uploadFileClould.array("avatars",5),filesClould)

module.exports = router