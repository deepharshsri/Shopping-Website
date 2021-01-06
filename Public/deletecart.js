let route =require('express').Router()


let items=require('../db.js').Items

route.post('/',(req,res)=>{
    items.destroy({
        where:{
            brand:req.body.data
        }
    }).then(()=>{
        res.send("Succesfull")
    }).catch((err)=>{
        res.send(err)
    })
    })


exports=module.exports={
    route
}