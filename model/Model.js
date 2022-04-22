const {Sequelize, DataTypes} = require('sequelize')
const db = require('../database/connection')

const Survey = db.define('sandesh', {
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT()
    }
})

// db.sync({alter: true})

module.exports = {Survey}