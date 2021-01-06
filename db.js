let Sequelize=require('sequelize');

let sequelize=new Sequelize('cart','user','user123',{
    host:'localhost',
    dialect:'mysql'
})

const Items=sequelize.define('items',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    image:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    brand:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
sequelize.sync()

exports=module.exports={
    Items
}