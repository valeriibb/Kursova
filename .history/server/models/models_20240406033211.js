const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    id: {type: DataTypes.INTEGER, unique:true},
    email: {type: DataTypes.STRING, unique:true},

    password: {type: DataTypes.P},
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})
