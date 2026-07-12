const mongoose = require('mongoose')
const User = require('./models/user.model')

seedingUsers = async ()=>{
    const users=[]

for(let i =0;i<2000;i++){
    users.push({
        username:`randa${i}`,
        password:"123456789"
    })
}
await User.insertMany(users)
console.log("data pushed to database ")
}

mongoose.connect("mongodb://localhost:27017/SessionCookies")

    .then(() => { console.log("Database Done") },seedingUsers())
    .catch((err) => { console.log(err) })

