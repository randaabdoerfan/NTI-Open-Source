const express = require("express")
const router = express.Router()
let {users} = require('../index.js')
 const {createUser,deleteUser,filterUsers,getAllUsers,getUserById,patchUser,putUser} = require("../Controllers/controller.users.js")
//users

router.post('/create',createUser)
router.delete("/delete/:id",deleteUser)
router.get("/filter",filterUsers)
router.get('/all',getAllUsers)
router.get('/user/:id',getUserById)
router.patch("/user/:id",patchUser)
router.put("/user/:id",putUser)

module.exports = router
