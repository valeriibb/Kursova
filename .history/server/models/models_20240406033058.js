const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    id: {type: DataTypes.INTEGER, unique:true},
    email: {type: DataTypes., primaryKey:true, autoIncrement:true},

    password: {type: DataTypes.STRING},
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})