const {Sequealize} = require('sequelize')


module.exports = new Sequealize(
    process.env.DB_NAME,
    process.env.DB_,
    process.env.DB_NAME,
)
