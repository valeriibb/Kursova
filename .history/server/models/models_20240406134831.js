const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    email: {type: DataTypes.STRING, unique:true},

    password: {type: DataTypes.STRING},
    telephone: {type: DataTypes.NUMBER, unique:true},
    num_advertisement: {type: DataTypes.INTEGER,},

})  

const Advertisement = sequelize.define('advertisement', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    views: {type: DataTypes.INTEGER},
    date_added: {type: DataTypes.INTEGER}, 

})  



const Apartment = sequelize.define('apartment', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    addres: {type: DataTypes.INTEGER},
    square: {type: DataTypes.INTEGER}, 
    rooms: {type: DataTypes.INTEGER}, 
    num_rooms: {type: DataTypes.INTEGER}, 
    num_: {type: DataTypes.INTEGER}, 



})  




