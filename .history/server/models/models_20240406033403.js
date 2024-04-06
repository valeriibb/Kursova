const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    email: {type: DataTypes.STRING, unique:true},

    password: {type: DataTypes.STRING},
    telephone: {type: DataTypes.NUMBER, unique:true},
    num_advertisement: {type: DataTypes.INTEGER,},

})
