let express=require('express')

let server=express()

server.use(express.json())

server.use(express.urlencoded({extended:true}))

let path=require('path')

let cart=require('./Route/cart.js')

let deleteCart=require('./Public/deletecart.js')
server.use('/',express.static(path.join(__dirname,'Public')))

server.use('/cart',cart.route)
server.use('/cart/delete',deleteCart.route)


server.listen(2222)