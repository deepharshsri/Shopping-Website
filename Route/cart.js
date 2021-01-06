let route =require('express').Router()


let items=require('../db.js').Items

route.get('/',(req,res)=>{
    items.findAll().then((data)=>{
        res.send(data)
    }).catch(()=>{
        res.send({
            error:"error to connect to database"
        })
    }
    )
})

route.post('/',(req,res)=>{
    console.log(req.body.name)
    items.create({
        image: req.body.image,
        price:parseInt(req.body.price),
        name:req.body.name,
        brand:req.body.brand
    }).then((products)=>{
    res.status(200).send(products)})
    .catch((err)=>{
        res.status(400).send({
            error:"Opps" +err
        })
    })
    })


exports=module.exports={
    route
}

