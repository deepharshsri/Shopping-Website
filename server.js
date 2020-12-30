let express=require('express')

let server=express()

let path=require('path')

server.use('/',express.static(path.join(__dirname,'Public')))

server.listen(2222)