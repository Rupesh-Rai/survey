require('dotenv').config()
const express = require('express')

//db connection
const db = require('./database/connection')
const {Users} = require('./model/Model')

const {Survey} = require('./model/Model')

const app = express()

// Express body parser
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

//route to get data from database
app.get('/', (req, res) => {
  Survey.findAll().then(survey => {
    if(survey.length === 0) {
      return res.json({
        status: 404,
        msg: ' NO data found'
      })
    }
    res.json({
      status: 200,
      msg: 'Data successfully retrieved from database',
      data: survey})
  }).catch(err => {
    console.log(err)
    res.json({
      status: 502,
      msg: 'Something went wrong',
      data: err
    })
  })
})

// route to store data in database
app.post('/', (req, res) => {
  const {fname, phone, message} = req.body
    Survey.create({
    name: fname,
    phone: phone,
    message: message
    }).then(response => {
    let data = {
      status: 200,
      msg: 'Successfully data is stored'
    }
    res.json(data)
    }).catch(err => {
    let data = {
      status: 502,
      msg: 'Something went wrong while storing data',
      data: err
    }
    })
})

//server connection
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
