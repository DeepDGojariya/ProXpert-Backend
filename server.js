//Imports
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const router = require('./routes/index')
const cors = require('cors')


//mongoose connection
mongoose.connect('mongodb://localhost:27017/propxpert', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//dotenv config
dotenv.config()

//app
const app = express()
const port = process.env.PORT || 4000

//middlewares

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api/v1',router)

//Starting the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})