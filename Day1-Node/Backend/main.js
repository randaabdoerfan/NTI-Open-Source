const http = require("http")
const fs = require("fs")
// fs.readFile("./file.json","utf-8",(error,data)=>{
//     if(error){
//         console.log("WE have Error",error)
//     }else{
//     }
// })
const users = [{id:1,name:"randa"}]
const server = http.createServer((req,res)=>{
    const path = req.url
    if(path === '/' || path === '/home'){
        res.writeHead(200,{"content-type":"text/html"})
        // res.end(`<h2 style="text-align:center;padding-top:90px;color:blue">Hello from Home Page </h2>`)
        const data = fs.readFileSync('./home.html','utf-8')
        res.end(data)
    }
    else if (path === '/api'){
        res.writeHead(200,{"content-type":"application/json"})

        const data = fs.readFileSync("./file.json",'utf-8')
            res.end(data)
        // fs.readFile("./file.json","utf-8",(err,data)=>{
        //     if(err){
        //         console.log("Error",err)
        //     }
        //     else{
        //         res.writeHead(200,{"content-type":"application/json"})
        //         res.end(data)
        //     }
        // })
            // res.end(JSON.stringify(users))      
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        const data = fs.readFileSync("./error.html","utf-8")
        // res.end(`<h2 style="text-align:center;color:red">Page Not Found </h2>`)
        res.end(data)
    }
})
server.listen(3000,()=>{
    console.log("server run now...")
})