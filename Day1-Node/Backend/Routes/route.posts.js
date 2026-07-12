const express = require("express")
const router = express.Router()

let {posts} = require("../index.js")
//posts
const {createPost,deletePost,filterPosts,getAllPosts,patchPost,putPost,getPostById} = require("../Controllers/controller.posts.js")

router.post('/create',createPost)
router.delete("/delete/:id",deletePost)
router.get("/filter",filterPosts)
router.get('/all',getAllPosts)
router.get('/post/:id', getPostById)
router.patch("/post/:id",patchPost)
router.put("/post/:id", putPost)

module.exports = router