const multer = require('multer')
const path = require('path')
const cloudinary = require('../config/cloudinary.config')
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        const uniquefilename = Date.now() + file.originalname
        cb(null, uniquefilename)
    }
})

const clouldStorage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params: {
        folder: "upload",
    }
})

const uploadFileClould = multer({ storage: clouldStorage })
const uploadFileMulter = multer({ storage: diskStorage })
module.exports = { uploadFileMulter, uploadFileClould }