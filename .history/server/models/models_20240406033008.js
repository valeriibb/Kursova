const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    id: {type: DataTypes.INTEGER, unique:true},
    pass: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})