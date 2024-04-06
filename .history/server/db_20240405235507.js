const {Sequealize} = require('sequelize')


module.exports = new Sequealize(
    process.env.DB_NAME
)
