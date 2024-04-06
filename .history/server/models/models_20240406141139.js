const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', { // дані про користувача
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    email: {type: DataTypes.STRING, unique:true},

    password: {type: DataTypes.STRING},
    telephone: {type: DataTypes.NUMBER, unique:true},
    num_advertisement: {type: DataTypes.INTEGER,},

})  

const Advertisement = sequelize.define('advertisement', { // дані про оголошення
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    views: {type: DataTypes.INTEGER},
    date_added: {type: DataTypes.INTEGER}, 

})  

const Apartment = sequelize.define('apartment', { // дані про будинок
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    addres: {type: DataTypes.ST},
    square: {type: DataTypes.INTEGER}, 
    rooms: {type: DataTypes.INTEGER}, 
    num_rooms: {type: DataTypes.INTEGER}, 
    num_bathroom: {type: DataTypes.INTEGER}, 
    description: {type: DataTypes.STRING}, 
})  


const Report = sequelize.define('report', { // щоденний звіт
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    report_information: {type: DataTypes.STRING}
})  




