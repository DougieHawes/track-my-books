const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    Author: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
})

module.exports = mongoose.model('book', BookSchema)