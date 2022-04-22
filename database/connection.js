require('dotenv').config()
const {Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_ID, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
})

sequelize.authenticate()
.then(() => {
    console.log('Connected to database...')
})
.catch(err => {
    console.log('Error: ' + err)
})

module.exports = sequelize