const session = require('express-session')
const redis = require('redis')
const { RedisStore } = require('connect-redis')

const connetionRedis = redis.createClient({ url: "redis://localhost:6379" })
connetionRedis.connect()
    .then(() => console.log("connection done..."))
    .catch((err) => console.log(err))

    const SessionRedis = session({
        store: new RedisStore({ client: connetionRedis }),
        secret: "xxxxx",
        resave: false, // not to save sesion already exists 
        saveUninitialized: false, // not to save session when its reate without data 
        cookie: {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 // ms 
            // it remove the session from browser not from redis 
            // it that mean that the cookie removed after one hour from browser
        }
    })
    module.exports = {SessionRedis,connetionRedis}