const express = require('express')
const router = express.Router()

const User = require('../models/user.model')
const { connetionRedis } = require('../config/redisConnections')
router.post('/register', async (req, res) => {
    const { username, password } = req.body
    console.log(req.body)
    const user = new User({ username, password })
    await user.save()
    res.status(201).json({ message: "User Register Done" })
})

router.post('/login', async (req, res) => {

    const { username, password } = req.body
    const user = await User.findOne({ username })
    req.session.user = {
        id: user._id,
        username: user.username,
    }
    res.status(200).json({ message: "user Login successfully" })
})

router.post('/get', async (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ message: "you are not autherized to get " })
    }
    res.status(200).json(req.session.user, { message: "you are autherized to get " })

})

router.post('/logout', async (req, res) => {
    await req.session.destroy()
    res.json({ message: "you logout successfully" })
})

router.get('/users', async (req, res) => {
    const usersChecked = await connetionRedis.get('users')
    if (usersChecked) {
        return res.status(200).json(JSON.parse(usersChecked))
    }
    const users = await User.find()
    await connetionRedis.set("users", JSON.stringify(users))
    res.status(200).json(users)
})
module.exports = router
