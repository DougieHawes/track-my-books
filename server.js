const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')

dotenv.config()

mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    console.log('MONGO CONNECTED'))

const app = express()

const port = process.env.PORT || 5000

app.listen(port, console.log(`app running on port ${port}`))

const BooksRoute = require('./routes/api/books')

app.use('/api/books', BooksRoute)